clean: 
	rm -rf *.c *.h calc

build: clean *.l *.y
	rm -f *.c *.h calc; \
	bison -d *.y; \
  	flex *.l; \
  	gcc *.c -lfl -Wimplicit-function-declaration -o calc 