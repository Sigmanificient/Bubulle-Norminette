#
# Copyright (c) 2020 aureliancnx
#
# MIT LICENSE
#
# This project is part of aureliancnx.
# See https://github.com/aureliancnx/Bubulle-Norminette for further info.
#
# Permission is hereby granted, free of charge, to any person obtaining a copy
# of this software and associated documentation files (the "Software"), to deal
# in the Software without restriction, including without limitation the rights
# to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
# copies of the Software, and to permit persons to whom the Software is
# furnished to do so, subject to the following conditions:
#
# The above copyright notice and this permission notice shall be included in all
# copies or substantial portions of the Software.
#
# THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
# IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
# FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
# AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
# LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
# OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
# SOFTWARE.#
from checks._check import Check
from utils.error_handling import BuErrors


class LinesExtra(Check):
    def __init__(self, file_name, path, header_lines):
        self.message = self.get_config()["message"]
        self.file_name = file_name
        self.path = path
        self.header_lines = header_lines
        self.last_empty_line = -100

    def check_inner(self, file_content, file_contentf):
        lines = file_content.split("\n")
        last = -2
        for i, line in enumerate(lines, start=1):
            if len(line.lstrip().strip()) == 0 or line == " " * len(line):
                if i == last + 1:
                    line = i
                    BuErrors.print_error(
                        self.path,
                        self.file_name,
                        line,
                        self.get_check_level(),
                        self.get_check_id(),
                        self.message,
                    )
                last = i
        return 0
