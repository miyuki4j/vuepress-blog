calculator: calculator.l calculator.y
	rm -f *.c *.h; \
	bison -d calculator.y; \
  	flex calculator.l; \
  	gcc -o $@ calculator.tab.c lex.yy.c -lfl