#!/bin/bash

#setup your program name
prog=calculator

rm -f *.c *.h ${prog}
flex --outfile ${prog}".c" --header-file=${prog}".h" ${prog}".l"
gcc ${prog}".c" -lfl -o ${prog}