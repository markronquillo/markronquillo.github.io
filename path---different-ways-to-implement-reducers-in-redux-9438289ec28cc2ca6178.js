webpackJsonp([0xad7fdeb12683e000],{"./node_modules/json-loader/index.js!./.cache/json/different-ways-to-implement-reducers-in-redux.json":function(n,s){n.exports={data:{site:{siteMetadata:{title:"Blog",author:"Mark Joseph Ronquillo"}},markdownRemark:{id:"/Users/markronquillo/Projects/blog-gatsby/blog/src/pages/posts/2017-08-01-different-ways-redux.md absPath of file >>> MarkdownRemark",html:'<p>In Redux, reducers are pure functions that basically builds up the state for every dispatched action in the store. Basically, reducers accepts the state (or part of the state) and returns a new copy of that state (normally mutated). Reducers can be build up by multiple sub-reducers. A reducer function accepts two parameters, the state and an action object. Most of the time, in your redux application, your main reducer is composed of different reducers that are responsible in different parts of your state.</p>\n<p>In this blog post, I’ll discuss a number of techniques to implement a reducer.</p>\n<h3>1. Switch-Case Pattern</h3>\n<p>This pattern is the most basic and the default approach in implementing a reducer. We basically use the <code>action.type</code> value in the switch case expression and if it matches any values defined it returns a new copy of the state.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">authReducer</span><span class="token punctuation">(</span>state<span class="token operator">=</span>initialState<span class="token punctuation">.</span>auth<span class="token punctuation">,</span> action<span class="token punctuation">)</span>\n<span class="token punctuation">{</span>\n    <span class="token keyword">switch</span><span class="token punctuation">(</span>action<span class="token punctuation">.</span>type<span class="token punctuation">)</span>\n    <span class="token punctuation">{</span>\n        <span class="token keyword">case</span> <span class="token string">\'LOGIN\'</span><span class="token punctuation">:</span>\n            <span class="token comment" spellcheck="true">// return new state</span>\n            <span class="token keyword">break</span><span class="token punctuation">;</span>\n        <span class="token keyword">case</span> <span class="token string">\'REGISTER\'</span><span class="token punctuation">:</span>\n            <span class="token comment" spellcheck="true">// return new state</span>\n            <span class="token keyword">break</span><span class="token punctuation">;</span>\n        <span class="token keyword">case</span> <span class="token string">\'LOGOUT\'</span><span class="token punctuation">:</span>\n            <span class="token comment" spellcheck="true">// return new state</span>\n            <span class="token keyword">break</span><span class="token punctuation">;</span>\n        <span class="token keyword">default</span>\n            <span class="token keyword">return</span> state\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<h3>2. Object property approach</h3>\n<p>In this approach, we define a <code>reducers</code> objects that contains methods which has the same name with the action types this reducer is responsible of. The function that we are exporting here checks if the <code>action.type</code> provided exists in the reducers methods, if yes, it then calls the that method passing the state and the action for further processing.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token keyword">const</span> reducers <span class="token operator">=</span> <span class="token punctuation">{</span>\n    LOGIN<span class="token punctuation">:</span> <span class="token punctuation">(</span>state<span class="token punctuation">,</span> action<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n        <span class="token comment" spellcheck="true">// return state</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n\n    LOGOUT<span class="token punctuation">:</span> <span class="token punctuation">(</span>state<span class="token punctuation">,</span> action<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n        <span class="token comment" spellcheck="true">// return state</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    \n    REGISTER<span class="token punctuation">:</span> <span class="token punctuation">(</span>state<span class="token punctuation">,</span> action<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n        <span class="token comment" spellcheck="true">// return state</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span>state <span class="token operator">=</span> initialState<span class="token punctuation">.</span>auth<span class="token punctuation">,</span> action<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> action<span class="token punctuation">.</span>type <span class="token keyword">in</span> reducers \n    <span class="token operator">?</span> reducers<span class="token punctuation">[</span>action<span class="token punctuation">.</span>type<span class="token punctuation">]</span><span class="token punctuation">(</span>state<span class="token punctuation">,</span> action<span class="token punctuation">)</span>\n    <span class="token punctuation">:</span> state\n    <span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<h3>3. Using the <em>build-reducer</em> library</h3>',frontmatter:{title:"Different ways to implement Reducers in Redux",date:"August 01, 2017"}}},pathContext:{path:"/different-ways-to-implement-reducers-in-redux"}}}});
//# sourceMappingURL=path---different-ways-to-implement-reducers-in-redux-9438289ec28cc2ca6178.js.map