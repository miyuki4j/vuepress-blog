const s=JSON.parse('{"key":"v-72d893a6","path":"/daily/2024-01-16.html","title":"shell脚本","lang":"zh-CN","frontmatter":{"cover":"/assets/images/cover1.jpg","icon":"pen-to-square","date":"2024-01-16T00:00:00.000Z","category":["shell"],"tag":["bash shell"],"star":true,"sticky":true,"description":"shell脚本 1.查看项目java文件的行数 #!/usr/bin/env bash # 统计代码行数（Count Lines of Code） function usage() { echo \\"usage:\\" echo \\" 1. nothing input,use current dir.\\" echo \\" 2. -a absolute_dir.\\" echo \\" 3. -d base_dir.\\" echo \\" 4. -s sub_dir.\\" exit } function usage_exit() { usage exit } argc=$# args=$* # shellcheck disable=SC2206 args_arr=($args) # shellcheck disable=SC2006 base_path=`pwd` i=0 while [ $i -lt $argc ] do case ${args_arr[$i]} in \\"-a\\") if [ $argc -le $(($i+1)) ]; then usage_exit fi base_path=${args_arr[$(($i+1))]} i=$(($i+2)) ;; \\"-b\\") if [ $argc -le $(($i+1)) ]; then usage_exit fi base_path=${args_arr[$(($i+1))]} i=$(($i+2)) ;; \\"-s\\") if [ $argc -le $(($i+1)) ]; then usage_exit fi base_path=$base_path/${args_arr[$(($i+1))]} i=$(($i+2)) ;; \\"-h\\") usage_exit ;; *) # shellcheck disable=SC2086 echo \\"err args_arr: \\"$args usage_exit ;; esac done # shellcheck disable=SC2006 # shellcheck disable=SC2038 # shellcheck disable=SC2086 lines=`find $base_path -name \\"*.java\\" | xargs cat | wc -l` echo \\"java code lines: \\"$lines","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/vuepress-blog/daily/2024-01-16.html"}],["meta",{"property":"og:site_name","content":"miyuki4jのblog"}],["meta",{"property":"og:title","content":"shell脚本"}],["meta",{"property":"og:description","content":"shell脚本 1.查看项目java文件的行数 #!/usr/bin/env bash # 统计代码行数（Count Lines of Code） function usage() { echo \\"usage:\\" echo \\" 1. nothing input,use current dir.\\" echo \\" 2. -a absolute_dir.\\" echo \\" 3. -d base_dir.\\" echo \\" 4. -s sub_dir.\\" exit } function usage_exit() { usage exit } argc=$# args=$* # shellcheck disable=SC2206 args_arr=($args) # shellcheck disable=SC2006 base_path=`pwd` i=0 while [ $i -lt $argc ] do case ${args_arr[$i]} in \\"-a\\") if [ $argc -le $(($i+1)) ]; then usage_exit fi base_path=${args_arr[$(($i+1))]} i=$(($i+2)) ;; \\"-b\\") if [ $argc -le $(($i+1)) ]; then usage_exit fi base_path=${args_arr[$(($i+1))]} i=$(($i+2)) ;; \\"-s\\") if [ $argc -le $(($i+1)) ]; then usage_exit fi base_path=$base_path/${args_arr[$(($i+1))]} i=$(($i+2)) ;; \\"-h\\") usage_exit ;; *) # shellcheck disable=SC2086 echo \\"err args_arr: \\"$args usage_exit ;; esac done # shellcheck disable=SC2006 # shellcheck disable=SC2038 # shellcheck disable=SC2086 lines=`find $base_path -name \\"*.java\\" | xargs cat | wc -l` echo \\"java code lines: \\"$lines"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://mister-hope.github.io/vuepress-blog/assets/images/cover1.jpg"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-01-16T10:10:43.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"shell脚本"}],["meta",{"property":"article:author","content":"miyuki4j"}],["meta",{"property":"article:tag","content":"bash shell"}],["meta",{"property":"article:published_time","content":"2024-01-16T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-01-16T10:10:43.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"shell脚本\\",\\"image\\":[\\"https://mister-hope.github.io/vuepress-blog/assets/images/cover1.jpg\\"],\\"datePublished\\":\\"2024-01-16T00:00:00.000Z\\",\\"dateModified\\":\\"2024-01-16T10:10:43.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"miyuki4j\\",\\"url\\":\\"https://github.com/miyuki4j\\",\\"email\\":\\"rebirthypp@gmail.com\\"}]}"]]},"headers":[{"level":2,"title":"1.查看项目java文件的行数","slug":"_1-查看项目java文件的行数","link":"#_1-查看项目java文件的行数","children":[]}],"git":{"createdTime":1705399843000,"updatedTime":1705399843000,"contributors":[{"name":"miyuki4j","email":"rebirthypp@163.com","commits":1}]},"readingTime":{"minutes":0.6,"words":181},"filePathRelative":"daily/2024-01-16.md","localizedDate":"2024年1月16日","excerpt":"<h1> shell脚本</h1>\\n<h2> 1.查看项目java文件的行数</h2>\\n<div class=\\"language-bash line-numbers-mode\\" data-ext=\\"sh\\"><pre class=\\"language-bash\\"><code><span class=\\"token shebang important\\">#!/usr/bin/env bash</span>\\n<span class=\\"token comment\\"># 统计代码行数（Count Lines of Code）</span>\\n\\n<span class=\\"token keyword\\">function</span> <span class=\\"token function-name function\\">usage</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span>\\n<span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token builtin class-name\\">echo</span> <span class=\\"token string\\">\\"usage:\\"</span>\\n    <span class=\\"token builtin class-name\\">echo</span> <span class=\\"token string\\">\\"  1. nothing input,use current dir.\\"</span>\\n    <span class=\\"token builtin class-name\\">echo</span> <span class=\\"token string\\">\\"  2. -a absolute_dir.\\"</span>\\n    <span class=\\"token builtin class-name\\">echo</span> <span class=\\"token string\\">\\"  3. -d base_dir.\\"</span>\\n    <span class=\\"token builtin class-name\\">echo</span> <span class=\\"token string\\">\\"  4. -s sub_dir.\\"</span>\\n    <span class=\\"token builtin class-name\\">exit</span>\\n<span class=\\"token punctuation\\">}</span>\\n\\n<span class=\\"token keyword\\">function</span> <span class=\\"token function-name function\\">usage_exit</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n    usage\\n    <span class=\\"token builtin class-name\\">exit</span> \\n<span class=\\"token punctuation\\">}</span>\\n\\n<span class=\\"token assign-left variable\\">argc</span><span class=\\"token operator\\">=</span><span class=\\"token variable\\">$#</span>\\n<span class=\\"token assign-left variable\\">args</span><span class=\\"token operator\\">=</span><span class=\\"token variable\\">$*</span>\\n<span class=\\"token comment\\"># shellcheck disable=SC2206</span>\\n<span class=\\"token assign-left variable\\">args_arr</span><span class=\\"token operator\\">=</span><span class=\\"token punctuation\\">(</span><span class=\\"token variable\\">$args</span><span class=\\"token punctuation\\">)</span>\\n<span class=\\"token comment\\"># shellcheck disable=SC2006</span>\\n<span class=\\"token assign-left variable\\">base_path</span><span class=\\"token operator\\">=</span><span class=\\"token variable\\"><span class=\\"token variable\\">`</span><span class=\\"token builtin class-name\\">pwd</span><span class=\\"token variable\\">`</span></span>\\n<span class=\\"token assign-left variable\\">i</span><span class=\\"token operator\\">=</span><span class=\\"token number\\">0</span>\\n<span class=\\"token keyword\\">while</span> <span class=\\"token punctuation\\">[</span> <span class=\\"token variable\\">$i</span> <span class=\\"token parameter variable\\">-lt</span> <span class=\\"token variable\\">$argc</span> <span class=\\"token punctuation\\">]</span>\\n<span class=\\"token keyword\\">do</span>\\n    <span class=\\"token keyword\\">case</span> <span class=\\"token variable\\">${args_arr<span class=\\"token punctuation\\">[</span>$i<span class=\\"token punctuation\\">]</span>}</span> <span class=\\"token keyword\\">in</span>\\n    <span class=\\"token string\\">\\"-a\\"</span><span class=\\"token punctuation\\">)</span>\\n        <span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">[</span> <span class=\\"token variable\\">$argc</span> <span class=\\"token parameter variable\\">-le</span> <span class=\\"token variable\\"><span class=\\"token variable\\">$((</span>$i<span class=\\"token operator\\">+</span><span class=\\"token number\\">1</span><span class=\\"token variable\\">))</span></span> <span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">;</span> <span class=\\"token keyword\\">then</span>\\n            usage_exit\\n        <span class=\\"token keyword\\">fi</span>\\n        <span class=\\"token assign-left variable\\">base_path</span><span class=\\"token operator\\">=</span><span class=\\"token variable\\">${args_arr<span class=\\"token punctuation\\">[</span>$(($i+1))<span class=\\"token punctuation\\">]</span>}</span>\\n        <span class=\\"token assign-left variable\\">i</span><span class=\\"token operator\\">=</span><span class=\\"token variable\\"><span class=\\"token variable\\">$((</span>$i<span class=\\"token operator\\">+</span><span class=\\"token number\\">2</span><span class=\\"token variable\\">))</span></span>\\n    <span class=\\"token punctuation\\">;</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token string\\">\\"-b\\"</span><span class=\\"token punctuation\\">)</span>\\n        <span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">[</span> <span class=\\"token variable\\">$argc</span> <span class=\\"token parameter variable\\">-le</span> <span class=\\"token variable\\"><span class=\\"token variable\\">$((</span>$i<span class=\\"token operator\\">+</span><span class=\\"token number\\">1</span><span class=\\"token variable\\">))</span></span> <span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">;</span> <span class=\\"token keyword\\">then</span>\\n            usage_exit\\n        <span class=\\"token keyword\\">fi</span>\\n        <span class=\\"token assign-left variable\\">base_path</span><span class=\\"token operator\\">=</span><span class=\\"token variable\\">${args_arr<span class=\\"token punctuation\\">[</span>$(($i+1))<span class=\\"token punctuation\\">]</span>}</span>\\n        <span class=\\"token assign-left variable\\">i</span><span class=\\"token operator\\">=</span><span class=\\"token variable\\"><span class=\\"token variable\\">$((</span>$i<span class=\\"token operator\\">+</span><span class=\\"token number\\">2</span><span class=\\"token variable\\">))</span></span>\\n    <span class=\\"token punctuation\\">;</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token string\\">\\"-s\\"</span><span class=\\"token punctuation\\">)</span>\\n        <span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">[</span> <span class=\\"token variable\\">$argc</span> <span class=\\"token parameter variable\\">-le</span> <span class=\\"token variable\\"><span class=\\"token variable\\">$((</span>$i<span class=\\"token operator\\">+</span><span class=\\"token number\\">1</span><span class=\\"token variable\\">))</span></span> <span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">;</span> <span class=\\"token keyword\\">then</span>\\n            usage_exit\\n        <span class=\\"token keyword\\">fi</span>\\n        <span class=\\"token assign-left variable\\">base_path</span><span class=\\"token operator\\">=</span><span class=\\"token variable\\">$base_path</span>/<span class=\\"token variable\\">${args_arr<span class=\\"token punctuation\\">[</span>$(($i+1))<span class=\\"token punctuation\\">]</span>}</span>\\n        <span class=\\"token assign-left variable\\">i</span><span class=\\"token operator\\">=</span><span class=\\"token variable\\"><span class=\\"token variable\\">$((</span>$i<span class=\\"token operator\\">+</span><span class=\\"token number\\">2</span><span class=\\"token variable\\">))</span></span>\\n    <span class=\\"token punctuation\\">;</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token string\\">\\"-h\\"</span><span class=\\"token punctuation\\">)</span>\\n        usage_exit\\n    <span class=\\"token punctuation\\">;</span><span class=\\"token punctuation\\">;</span>\\n    *<span class=\\"token punctuation\\">)</span>\\n        <span class=\\"token comment\\"># shellcheck disable=SC2086</span>\\n        <span class=\\"token builtin class-name\\">echo</span> <span class=\\"token string\\">\\"err args_arr: \\"</span><span class=\\"token variable\\">$args</span>\\n        usage_exit\\n    <span class=\\"token punctuation\\">;</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token keyword\\">esac</span>\\n<span class=\\"token keyword\\">done</span>\\n\\n<span class=\\"token comment\\"># shellcheck disable=SC2006</span>\\n<span class=\\"token comment\\"># shellcheck disable=SC2038</span>\\n<span class=\\"token comment\\"># shellcheck disable=SC2086</span>\\n<span class=\\"token assign-left variable\\">lines</span><span class=\\"token operator\\">=</span><span class=\\"token variable\\"><span class=\\"token variable\\">`</span><span class=\\"token function\\">find</span> $base_path <span class=\\"token parameter variable\\">-name</span> <span class=\\"token string\\">\\"*.java\\"</span> <span class=\\"token operator\\">|</span> <span class=\\"token function\\">xargs</span> <span class=\\"token function\\">cat</span> <span class=\\"token operator\\">|</span> <span class=\\"token function\\">wc</span> <span class=\\"token parameter variable\\">-l</span><span class=\\"token variable\\">`</span></span>\\n<span class=\\"token builtin class-name\\">echo</span> <span class=\\"token string\\">\\"java code lines: \\"</span><span class=\\"token variable\\">$lines</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{s as data};
