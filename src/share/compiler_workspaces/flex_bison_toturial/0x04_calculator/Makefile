clean: 
	rm -rf *.c *.h calculator

calc: clean calculator.l calculator.y
	rm -f *.c *.h; \
	bison -d calculator.y; \
  	flex calculator.l; \
  	gcc calculator.tab.c lex.yy.c -lfl -Wimplicit-function-declaration -o calculator 