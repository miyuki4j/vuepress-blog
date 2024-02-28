#!/bin/bash

#setup your program name
prog=calculator

rm -f *.c *.h ${prog}
# bison -d --output ${prog}"_yacc.c" --header=${prog}"_yacc.h" ${prog}".y"
# flex --outfile ${prog}"_lex.c" --header-file=${prog}"_lex.h" ${prog}".l"
# gcc *.c -lfl -o ${prog}

bison -d ${prog}".y"
flex ${prog}".l"
gcc ${prog}".tab.c" lex.yy.c -Wimplicit-function-declaration -lfl -o ${prog}