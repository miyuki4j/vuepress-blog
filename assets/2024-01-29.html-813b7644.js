import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,f as e}from"./app-8fed2158.js";const i={},l=e(`<h1 id="编译器相关学习" tabindex="-1"><a class="header-anchor" href="#编译器相关学习" aria-hidden="true">#</a> 编译器相关学习</h1><h2 id="_1-编译器工具" tabindex="-1"><a class="header-anchor" href="#_1-编译器工具" aria-hidden="true">#</a> 1.编译器工具</h2><div class="language-code line-numbers-mode" data-ext="code"><pre class="language-code"><code>  1.antlr:
    https://dl.icdst.org/pdfs/files3/a91ace57a8c4c8cdd9f1663e1051bf93.pdf
    https://github.com/Lucifier129/language-implementation-patterns.git
    https://zhuanlan.zhihu.com/p/483679676
    https://github.com/mbbill/flexbison/blob/master/flexbison/fb1-5.y
  
  2.flex&amp;bison:
    https://xsky.tech/ebooks/flex%E4%B8%8Ebison%E4%B8%AD%E6%96%87%E7%89%88.pdf
    https://web.iitd.ac.in/~sumeet/flex__bison.pdf

    手册:
    https://epaperpress.com/lexandyacc/download/flex.pdf
    https://westes.github.io/flex/manual/
    https://www.gnu.org/software/bison/manual/bison.pdf

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-1-flex-bison" tabindex="-1"><a class="header-anchor" href="#_1-1-flex-bison" aria-hidden="true">#</a> 1.1. flex&amp;bison</h3><div class="language-code line-numbers-mode" data-ext="code"><pre class="language-code"><code>  1.多行注释匹配:
    https://www.coder.work/article/7136907
    https://www.coder.work/article/1551831
  
  2.参考手册:
    https://ftp.gnu.org/old-gnu/Manuals/flex-2.5.4/html_mono/flex.html
    https://www.cs.virginia.edu/~cr4bd/flex-manual/
    
    https://www.gnu.org/software/bison/manual/bison.html
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-2-flex-正则表达式" tabindex="-1"><a class="header-anchor" href="#_1-2-flex-正则表达式" aria-hidden="true">#</a> 1.2. flex 正则表达式</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">.</span>         匹配除了<span class="token punctuation">\\</span>n 之外的所有单个字符
<span class="token punctuation">[</span><span class="token punctuation">]</span>        匹配<span class="token punctuation">[</span><span class="token punctuation">]</span>内任意一个字符, 支持范围加减法<span class="token punctuation">[</span>a-z<span class="token punctuation">]</span><span class="token punctuation">{</span>-<span class="token punctuation">}</span><span class="token punctuation">[</span>def<span class="token punctuation">]</span>, a-z除去def
^         如果是第一个字符就匹配行首，被用于<span class="token punctuation">[</span><span class="token punctuation">]</span>表示补集，<span class="token punctuation">[</span>^abc<span class="token punctuation">]</span> 表示匹配出abc之外的所有字符
<span class="token punctuation">{</span><span class="token punctuation">}</span>        A<span class="token punctuation">{</span><span class="token number">1,5</span><span class="token punctuation">}</span>匹配1~3个A, b<span class="token punctuation">{</span><span class="token number">6</span><span class="token punctuation">}</span>匹配6个b
<span class="token punctuation">\\</span>         转义字符
*         匹配前面的表达式0次或者多次
+         匹配前面的表达式1次或者多次
?         匹配前面的表达式0次或者1次
<span class="token operator">|</span>         <span class="token punctuation">(</span>a<span class="token operator">|</span>b<span class="token operator">|</span>c<span class="token punctuation">)</span>选择其中一个 
<span class="token string">&quot;&quot;</span>        表达式字面意思
<span class="token punctuation">(</span><span class="token punctuation">)</span>        把一系列的正则表达式组成一个新的表达式，a<span class="token punctuation">(</span>bc<span class="token operator">|</span>de<span class="token punctuation">)</span> 匹配abch或者ade
/         尾部上下文，匹配斜线签的正则表达式,但是要求其后紧跟着斜线后的表达式，0/1匹配字符串01的0,一个模式中只有允许有一个尾部上下文
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-3-flex-二义性处理" tabindex="-1"><a class="header-anchor" href="#_1-3-flex-二义性处理" aria-hidden="true">#</a> 1.3. flex 二义性处理</h3><div class="language-code line-numbers-mode" data-ext="code"><pre class="language-code"><code>1.词法分析器匹配输入时,匹配尽可能多的字符串
2.如果两个模式都匹配的话, 匹配最早出现的
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,9),t=[l];function c(d,o){return s(),a("div",null,t)}const r=n(i,[["render",c],["__file","2024-01-29.html.vue"]]);export{r as default};
