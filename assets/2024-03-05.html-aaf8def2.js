import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as a,c as i,f as d}from"./app-948deaf8.js";const n={},r=d(`<h1 id="_1-java-jvm" tabindex="-1"><a class="header-anchor" href="#_1-java-jvm" aria-hidden="true">#</a> 1.Java&amp;JVM</h1><h2 id="_1-1-并发相关" tabindex="-1"><a class="header-anchor" href="#_1-1-并发相关" aria-hidden="true">#</a> 1.1.并发相关</h2><h3 id="_1-1-1-reentrantlock" tabindex="-1"><a class="header-anchor" href="#_1-1-1-reentrantlock" aria-hidden="true">#</a> 1.1.1. ReentrantLock</h3><h4 id="_1-1-1-1-lock-接口" tabindex="-1"><a class="header-anchor" href="#_1-1-1-1-lock-接口" aria-hidden="true">#</a> 1.1.1.1. lock 接口</h4><div class="language-code line-numbers-mode" data-ext="code"><pre class="language-code"><code>1.公平锁流程:
  直接进入acquire方法，先执行tryAcquire：
    tryAcquire排队，然后cas状态是否直接可以上锁
    如果还是失败，再进队列，然后在acquireQueued方法中 for 循环，以及park等，具体路基如下
      再park中唤醒过来，如果我是头结点，并且执行tryAcquire成功就是上锁成功，执行过程中报异常，取消抢锁


2.非公平锁流程:
  1.cas判断当前状态是否没人使用,抢一下满足的直接上锁
  2.cas失败进入acquire方法,先执行tryAcquire：
    tryAcquire也是不排队，直接cas状态是否直接可以上锁
    如果还是失败，再进队列，然后在acquireQueued方法中 for 循环，以及park等，具体路基如下
      再park中唤醒过来，如果我是头结点，并且执行tryAcquire成功就是上锁成功，执行过程中报异常，取消抢锁

总结：公平锁和非公平的锁，上锁的区别就在tryAcquire方法上

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-1-2-分布式reentrantlock" tabindex="-1"><a class="header-anchor" href="#_1-1-2-分布式reentrantlock" aria-hidden="true">#</a> 1.1.2. 分布式ReentrantLock</h3><div class="language-code line-numbers-mode" data-ext="code"><pre class="language-code"><code>大致需要以下几方面:
1.以线程为单位
2.可重入
3.设置过期时间
4.发布订阅通知锁其他线程获取锁

-------------
1. lock 流程

2.tryLock流程:

3.unlock流程:

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_2-数据库-mysql" tabindex="-1"><a class="header-anchor" href="#_2-数据库-mysql" aria-hidden="true">#</a> 2.数据库(MySQL)</h1><div class="language-code line-numbers-mode" data-ext="code"><pre class="language-code"><code>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h1 id="_3-redis" tabindex="-1"><a class="header-anchor" href="#_3-redis" aria-hidden="true">#</a> 3.Redis</h1><div class="language-code line-numbers-mode" data-ext="code"><pre class="language-code"><code>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h1 id="_4-消息队列-kafka、rocketmq" tabindex="-1"><a class="header-anchor" href="#_4-消息队列-kafka、rocketmq" aria-hidden="true">#</a> 4.消息队列(Kafka、RocketMQ)</h1><div class="language-code line-numbers-mode" data-ext="code"><pre class="language-code"><code>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,13),s=[r];function c(l,v){return a(),i("div",null,s)}const o=e(n,[["render",c],["__file","2024-03-05.html.vue"]]);export{o as default};
