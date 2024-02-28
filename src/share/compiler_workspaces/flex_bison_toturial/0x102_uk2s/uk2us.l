
/* 英式 -> 美式*/

%%
"colour" { printf("color"); }
"smart"  { printf("elegant"); }
.        { printf("%s",yytext); }
%%
