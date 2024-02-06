import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{o as n,c as a,f as e}from"./app-8e378060.js";const l={},t=e(`<h1 id="shell脚本" tabindex="-1"><a class="header-anchor" href="#shell脚本" aria-hidden="true">#</a> shell脚本</h1><h2 id="_1-查看项目java文件的行数" tabindex="-1"><a class="header-anchor" href="#_1-查看项目java文件的行数" aria-hidden="true">#</a> 1.查看项目java文件的行数</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/usr/bin/env bash</span>
<span class="token comment"># 统计代码行数（Count Lines of Code）</span>

<span class="token keyword">function</span> <span class="token function-name function">usage</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;usage:&quot;</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;  1. nothing input,use current dir.&quot;</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;  2. -a absolute_dir.&quot;</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;  3. -d base_dir.&quot;</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;  4. -s sub_dir.&quot;</span>
    <span class="token builtin class-name">exit</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function-name function">usage_exit</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    usage
    <span class="token builtin class-name">exit</span> 
<span class="token punctuation">}</span>

<span class="token assign-left variable">argc</span><span class="token operator">=</span><span class="token variable">$#</span>
<span class="token assign-left variable">args</span><span class="token operator">=</span><span class="token variable">$*</span>
<span class="token comment"># shellcheck disable=SC2206</span>
<span class="token assign-left variable">args_arr</span><span class="token operator">=</span><span class="token punctuation">(</span><span class="token variable">$args</span><span class="token punctuation">)</span>
<span class="token comment"># shellcheck disable=SC2006</span>
<span class="token assign-left variable">base_path</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token builtin class-name">pwd</span><span class="token variable">\`</span></span>
<span class="token assign-left variable">i</span><span class="token operator">=</span><span class="token number">0</span>
<span class="token keyword">while</span> <span class="token punctuation">[</span> <span class="token variable">$i</span> <span class="token parameter variable">-lt</span> <span class="token variable">$argc</span> <span class="token punctuation">]</span>
<span class="token keyword">do</span>
    <span class="token keyword">case</span> <span class="token variable">\${args_arr<span class="token punctuation">[</span>$i<span class="token punctuation">]</span>}</span> <span class="token keyword">in</span>
    <span class="token string">&quot;-a&quot;</span><span class="token punctuation">)</span>
        <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$argc</span> <span class="token parameter variable">-le</span> <span class="token variable"><span class="token variable">$((</span>$i<span class="token operator">+</span><span class="token number">1</span><span class="token variable">))</span></span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
            usage_exit
        <span class="token keyword">fi</span>
        <span class="token assign-left variable">base_path</span><span class="token operator">=</span><span class="token variable">\${args_arr<span class="token punctuation">[</span>$(($i+1))<span class="token punctuation">]</span>}</span>
        <span class="token assign-left variable">i</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$((</span>$i<span class="token operator">+</span><span class="token number">2</span><span class="token variable">))</span></span>
    <span class="token punctuation">;</span><span class="token punctuation">;</span>
    <span class="token string">&quot;-b&quot;</span><span class="token punctuation">)</span>
        <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$argc</span> <span class="token parameter variable">-le</span> <span class="token variable"><span class="token variable">$((</span>$i<span class="token operator">+</span><span class="token number">1</span><span class="token variable">))</span></span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
            usage_exit
        <span class="token keyword">fi</span>
        <span class="token assign-left variable">base_path</span><span class="token operator">=</span><span class="token variable">\${args_arr<span class="token punctuation">[</span>$(($i+1))<span class="token punctuation">]</span>}</span>
        <span class="token assign-left variable">i</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$((</span>$i<span class="token operator">+</span><span class="token number">2</span><span class="token variable">))</span></span>
    <span class="token punctuation">;</span><span class="token punctuation">;</span>
    <span class="token string">&quot;-s&quot;</span><span class="token punctuation">)</span>
        <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$argc</span> <span class="token parameter variable">-le</span> <span class="token variable"><span class="token variable">$((</span>$i<span class="token operator">+</span><span class="token number">1</span><span class="token variable">))</span></span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
            usage_exit
        <span class="token keyword">fi</span>
        <span class="token assign-left variable">base_path</span><span class="token operator">=</span><span class="token variable">$base_path</span>/<span class="token variable">\${args_arr<span class="token punctuation">[</span>$(($i+1))<span class="token punctuation">]</span>}</span>
        <span class="token assign-left variable">i</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$((</span>$i<span class="token operator">+</span><span class="token number">2</span><span class="token variable">))</span></span>
    <span class="token punctuation">;</span><span class="token punctuation">;</span>
    <span class="token string">&quot;-h&quot;</span><span class="token punctuation">)</span>
        usage_exit
    <span class="token punctuation">;</span><span class="token punctuation">;</span>
    *<span class="token punctuation">)</span>
        <span class="token comment"># shellcheck disable=SC2086</span>
        <span class="token builtin class-name">echo</span> <span class="token string">&quot;err args_arr: &quot;</span><span class="token variable">$args</span>
        usage_exit
    <span class="token punctuation">;</span><span class="token punctuation">;</span>
    <span class="token keyword">esac</span>
<span class="token keyword">done</span>

<span class="token comment"># shellcheck disable=SC2006</span>
<span class="token comment"># shellcheck disable=SC2038</span>
<span class="token comment"># shellcheck disable=SC2086</span>
<span class="token assign-left variable">lines</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token function">find</span> $base_path <span class="token parameter variable">-name</span> <span class="token string">&quot;*.java&quot;</span> <span class="token operator">|</span> <span class="token function">xargs</span> <span class="token function">cat</span> <span class="token operator">|</span> <span class="token function">wc</span> <span class="token parameter variable">-l</span><span class="token variable">\`</span></span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;java code lines: &quot;</span><span class="token variable">$lines</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-awk-分隔符替换" tabindex="-1"><a class="header-anchor" href="#_2-awk-分隔符替换" aria-hidden="true">#</a> 2. awk 分隔符替换</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>原始分割字符:FS, 输出分割字符:OFS:
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">cat</span> logs/stdout.log <span class="token operator">|</span> <span class="token function">grep</span> <span class="token string">&quot;FireBaseService&quot;</span> <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">&#39;BEGIN{ FS=&quot;\\01&quot;; OFS=&quot;\\t&quot;; } { out=&quot;&quot;; for(i=1;i&lt;=NF;i++){if (i&lt;=1) out=out&quot;&quot;$i; else out=out&quot;&quot;OFS&quot;&quot;$i; } print out; }&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,6),p=[t];function i(o,c){return n(),a("div",null,p)}const d=s(l,[["render",i],["__file","2024-01-16.html.vue"]]);export{d as default};
