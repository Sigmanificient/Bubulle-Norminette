import os
import sys
import re

from pycparser import c_parser, parse_file

from utils.error_handling import BuErrors
from utils.functions_reader import FunctionPrinter
from utils import file_utils, check_utils, string_utils


class RunCheck:
    def __init__(self, file_name, full_path):
        self.file_name = file_name
        self.full_path = full_path
        self.file_content = None

    def is_validsource(self):
        if self.file_name.endswith('.tmp'):
            self.delete_temp(already=True)
        return self.file_name.endswith('.c') or self.file_name.endswith('.h')

    def delete_temp(self, already=False):
        path = self.full_path
        if not already:
            path = path + '.tmp'
        try:
            os.remove(path)
        except:
            pass

    def read_content(self):
        try:
            self.file_content = file_utils.read(self.full_path)
            return 1
        except:
            return 0

    def get_headerlines(self):
        header_lines = 0
        header_found_end = False
        lines_with_comments = self.file_content.split('\n')
        for line in lines_with_comments:
            header_lines += 1
            if line.startswith("*/"):
                header_found_end = True
                break

        if not header_found_end:
            return 0
        return header_lines

    def run(self):
        self.delete_temp()
        tmp = self.full_path + '.tmp'

        for clazz in check_utils.get_filenames():
            clazz = clazz(file_name=self.file_name, header_lines=0)
            clazz.process_filename()

        if not self.is_validsource():
            return

        if not self.read_content():
            return

        header_lines = self.get_headerlines()
        lines_with_comments = self.file_content.split('\n')
        lines = ()
        parser = c_parser.CParser()

        file_contentf = string_utils.removeComments(self.file_content)
        lines = file_contentf.split('\n')
        header_lines = len(lines_with_comments) - len(lines)
        if header_lines < 0:
            header_lines = 0

        parsed = False
        try:
            f = open(tmp, "a")
            f.write(file_contentf)
            f.close()

            ast = parse_file(tmp, use_cpp=True)
            self.delete_temp()
            parsed = True
        except c_parser.ParseError:
            e = sys.exc_info()[1]
            BuErrors.print_error(self.file_name, -1, 2, "0?", "Unable to compile the file")
            self.delete_temp()

        self.delete_temp()
        if parsed:
            v = FunctionPrinter()
            FunctionPrinter.reset_visit(v)
            v.visit(ast)

            for clazz in check_utils.get_visitor():
                clazz = clazz(file_name=self.file_name, header_lines=header_lines)
                clazz.process_visitor_check(v, lines)

            for func in v.func:
                for clazz in check_utils.get_func_decl():
                    clazz = clazz(file_name=self.file_name, header_lines=header_lines)
                    clazz.process_function_decl(v, func)
                for var in func.body.block_items:
                    for clazz in check_utils.get_func_call():
                        clazz = clazz(file_name=self.file_name, header_lines=header_lines)
                        clazz.process_function_call(var)
                    for clazz in check_utils.get_var_decl():
                        clazz = clazz(file_name=self.file_name, header_lines=header_lines)
                        clazz.process_variable_decl(var)

        line_index = 0
        for line in lines:
            line_index += 1
            for clazz in check_utils.get_line():
                clazz = clazz(file_name=self.file_name, header_lines=header_lines)
                clazz.process_line(line, line_index)

        for clazz in check_utils.get_inner():
            clazz = clazz(file_name=self.file_name, header_lines=header_lines)
            clazz.process_inner(self.file_content, file_contentf)
