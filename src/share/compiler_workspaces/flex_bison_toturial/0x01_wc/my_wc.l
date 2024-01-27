%{
    int chars = 0, words = 0, lines = 0;
%}

%%
[a-zA-Z]+   {words++; chars += strlen(yytext);}
\n          {chars++; lines++;}
,           {chars++;}
.           {chars++;}
%%

int main(int argc, char **argv){
    yylex();
    printf("%8d %8d %8d\n",lines, words, chars);
}