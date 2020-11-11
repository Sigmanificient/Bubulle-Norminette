/*
 * Copyright (c) 2020 aureliancnx
 *
 * MIT LICENSE
 *
 * This project is part of aureliancnx.
 * See https://github.com/aureliancnx/Bubulle-Norminette for further info.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE. */
$(function(){"use strict";var e=document.getElementById("chartBar1").getContext("2d"),a=(new Chart(e,{type:"bar",data:{labels:["Jan","Feb","Mar","Apr","May","Jun"],datasets:[{label:"# of Votes",data:[12,39,20,10,25,18],backgroundColor:"#27AAC8"}]},options:{legend:{display:!1,labels:{display:!1}},scales:{yAxes:[{ticks:{beginAtZero:!0,fontSize:10,max:80}}],xAxes:[{ticks:{beginAtZero:!0,fontSize:11}}]}}}),document.getElementById("chartBar2").getContext("2d")),t=(new Chart(a,{type:"bar",data:{labels:["Jan","Feb","Mar","Apr","May","Jun"],datasets:[{label:"# of Votes",data:[12,39,20,10,25,18],backgroundColor:["#29B0D0","#2A516E","#F07124","#CBE0E3","#979193"]}]},options:{legend:{display:!1,labels:{display:!1}},scales:{yAxes:[{ticks:{beginAtZero:!0,fontSize:10,max:80}}],xAxes:[{ticks:{beginAtZero:!0,fontSize:11}}]}}}),document.getElementById("chartBar3").getContext("2d"));new Chart(t,{type:"horizontalBar",data:{labels:["Jan","Feb","Mar","Apr","May","Jun"],datasets:[{label:"# of Votes",data:[12,39,20,10,25,18],backgroundColor:"#27AAC8"}]},options:{legend:{display:!1,labels:{display:!1}},scales:{yAxes:[{ticks:{beginAtZero:!0,fontSize:10}}],xAxes:[{ticks:{beginAtZero:!0,fontSize:11,max:80}}]}}});var o=document.getElementById("chartBar4").getContext("2d");new Chart(o,{type:"horizontalBar",data:{labels:["Jan","Feb","Mar","Apr","May","Jun"],datasets:[{label:"# of Votes",data:[12,39,20,10,25,18],backgroundColor:["#29B0D0","#2A516E","#F07124","#CBE0E3","#979193"]}]},options:{legend:{display:!1,labels:{display:!1}},scales:{yAxes:[{ticks:{beginAtZero:!0,fontSize:10}}],xAxes:[{ticks:{beginAtZero:!0,fontSize:11,max:80}}]}}});var r=document.getElementById("chartLine1"),d=(new Chart(r,{type:"line",data:{labels:["Jan","Feb","Mar","Apr","May","Jun"],datasets:[{label:"# of Votes",data:[12,39,20,10,25,18],borderColor:"#27AAC8",borderWidth:1,fill:!1}]},options:{legend:{display:!1,labels:{display:!1}},scales:{yAxes:[{ticks:{beginAtZero:!0,fontSize:10,max:80}}],xAxes:[{ticks:{beginAtZero:!0,fontSize:11}}]}}}),document.getElementById("chartLine2")),l=(new Chart(d,{type:"line",data:{labels:["Jan","Feb","Mar","Apr","May","Jun"],datasets:[{data:[12,39,20,10,20,18],borderColor:"#2E5773",borderWidth:1,fill:!1},{data:[30,50,28,23,25,28],borderColor:"#F47322",borderWidth:1,fill:!1}]},options:{legend:{display:!1,labels:{display:!1}},scales:{yAxes:[{ticks:{beginAtZero:!0,fontSize:10,max:80}}],xAxes:[{ticks:{beginAtZero:!0,fontSize:11}}]}}}),document.getElementById("chartArea1")),n=(new Chart(l,{type:"line",data:{labels:["Jan","Feb","Mar","Apr","May","Jun"],datasets:[{data:[12,39,20,10,25,18],backgroundColor:"#F07124",fill:!0,borderWidth:0,borderColor:"#fff"}]},options:{legend:{display:!1,labels:{display:!1}},scales:{yAxes:[{ticks:{beginAtZero:!0,fontSize:10,max:80}}],xAxes:[{ticks:{beginAtZero:!0,fontSize:11}}]}}}),document.getElementById("chartArea2"));new Chart(n,{type:"line",data:{labels:["Jan","Feb","Mar","Apr","May","Jun"],datasets:[{data:[10,24,20,25,35,50],backgroundColor:"#2E5773",borderWidth:1,fill:!0},{data:[20,30,28,33,45,65],backgroundColor:"#F47322",borderWidth:1,fill:!0}]},options:{legend:{display:!1,labels:{display:!1}},scales:{yAxes:[{ticks:{beginAtZero:!0,fontSize:10,max:80}}],xAxes:[{ticks:{beginAtZero:!0,fontSize:11}}]}}});var s=document.getElementById("chartStacked1");new Chart(s,{type:"bar",data:{labels:["Jan","Feb","Mar","Apr","May","Jun"],datasets:[{data:[10,24,20,25,35,50],backgroundColor:"#29B0D0",borderWidth:1,fill:!0},{data:[10,24,20,25,35,50],backgroundColor:"#2E5773",borderWidth:1,fill:!0},{data:[20,30,28,33,45,65],backgroundColor:"#F47322",borderWidth:1,fill:!0}]},options:{legend:{display:!1,labels:{display:!1}},scales:{yAxes:[{stacked:!0}],xAxes:[{stacked:!0}]}}});var i=document.getElementById("chartStacked2");new Chart(i,{type:"horizontalBar",data:{labels:["Jan","Feb","Mar","Apr","May","Jun"],datasets:[{data:[10,24,20,25,35,50],backgroundColor:"#29B0D0",borderWidth:1,fill:!0},{data:[10,24,20,25,35,50],backgroundColor:"#2E5773",borderWidth:1,fill:!0},{data:[20,30,28,33,45,65],backgroundColor:"#F47322",borderWidth:1,fill:!0}]},options:{legend:{display:!1,labels:{display:!1}},scales:{yAxes:[{stacked:!0}],xAxes:[{stacked:!0}]}}});var b=document.getElementById("chartArea3");new Chart(b,{type:"line",data:{labels:["Jan","Feb","Mar","Apr","May","Jun"],datasets:[{data:[10,24,20,25,35,50],backgroundColor:"rgba(46,87,115,.4)",borderWidth:1,fill:!0},{data:[20,30,28,33,45,65],backgroundColor:"rgba(41,176,208,.4)",borderWidth:1,fill:!0}]},options:{legend:{display:!1,labels:{display:!1}},scales:{yAxes:[{gridLines:{drawBorder:!1,color:["","","#cc0000"]},ticks:{beginAtZero:!0,fontSize:10,max:80}}],xAxes:[{ticks:{beginAtZero:!0,fontSize:11}}]}}});var c=document.getElementById("chartArea4");new Chart(c,{type:"line",data:{labels:["Jan","Feb","Mar","Apr","May","Jun"],datasets:[{data:[10,24,20,25,35,50],backgroundColor:"rgba(46,87,115,.4)",borderWidth:1,fill:!0},{data:[20,30,28,33,45,65],backgroundColor:"rgba(41,176,208,.4)",borderWidth:1,fill:!0}]},options:{legend:{display:!1,labels:{display:!1}},scales:{yAxes:[{gridLines:{drawBorder:!1,color:["","#cc0000","#0ad013"]},ticks:{beginAtZero:!0,fontSize:10,max:80}}],xAxes:[{ticks:{beginAtZero:!0,fontSize:11}}]}}});function y(){return Math.round(100*Math.random())}var g={datasets:[{data:[y(),y(),y(),y(),y()],backgroundColor:["#29B0D0","#4C6579","#F57E2E","#C8E0E4","#A6A7AC"]}]},A={responsive:!0,legend:{display:!1},animation:{animateScale:!0,animateRotate:!0}},n=document.getElementById("chartPie"),s=(new Chart(n,{type:"doughnut",data:g,options:A}),document.getElementById("chartDonut"));new Chart(s,{type:"pie",data:g,options:A})});