webpackJsonp([0xe0244597cbb17800],{'./node_modules/babel-loader/lib/index.js?{"presets":["/Users/markronquillo/Projects/blog-gatsby/blog/node_modules/babel-preset-react/lib/index.js","/Users/markronquillo/Projects/blog-gatsby/blog/node_modules/babel-preset-es2015/lib/index.js","/Users/markronquillo/Projects/blog-gatsby/blog/node_modules/babel-preset-stage-1/lib/index.js","/Users/markronquillo/Projects/blog-gatsby/blog/node_modules/babel-preset-env/lib/index.js","/Users/markronquillo/Projects/blog-gatsby/blog/node_modules/babel-preset-stage-0/lib/index.js","/Users/markronquillo/Projects/blog-gatsby/blog/node_modules/babel-preset-react/lib/index.js"],"plugins":["/Users/markronquillo/Projects/blog-gatsby/blog/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","/Users/markronquillo/Projects/blog-gatsby/blog/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/markronquillo/Projects/blog-gatsby/blog/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/markronquillo/Projects/blog-gatsby/blog/node_modules/babel-plugin-transform-object-assign/lib/index.js"],"cacheDirectory":true}!./src/pages/blog.js':function(e,t,o){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function n(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.pageQuery=void 0;var s=function(){function e(e,t){for(var o=0;o<t.length;o++){var l=t[o];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}return function(t,o,l){return o&&e(t.prototype,o),l&&e(t,l),t}}(),i=o("./node_modules/react/react.js"),u=l(i),d=o("./node_modules/gatsby-link/index.js"),b=l(d),c=o("./node_modules/lodash/get.js"),p=l(c),f=o("./node_modules/react-helmet/lib/Helmet.js"),g=l(f),m=o("./src/components/SectionTitle.js"),y=l(m),j=o("./src/utils/typography.js"),h=function(e){function t(){return r(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return n(t,e),s(t,[{key:"render",value:function(){var e=[],t=((0,p.default)(this,"props.data.site.siteMetadata.title"),(0,p.default)(this,"props.data.allMarkdownRemark.edges"));return t.forEach(function(t){if("/404/"!==t.node.path){(0,p.default)(t,"node.frontmatter.title")||t.node.path;e.push(u.default.createElement("li",{key:t.node.frontmatter.path,style:{marginBottom:(0,j.rhythm)(1)}},u.default.createElement(b.default,{className:"title",style:{boxShadow:"none"},to:t.node.frontmatter.path},t.node.frontmatter.title),u.default.createElement("i",{className:"date"},t.node.frontmatter.date),u.default.createElement("div",null,t.node.excerpt)))}}),u.default.createElement("div",null,u.default.createElement(g.default,{title:(0,p.default)(this,"props.data.site.siteMetadata.title")}),u.default.createElement(y.default,null," Blog "),u.default.createElement("ul",{className:"page-list"},e))}}]),t}(u.default.Component);h.propTypes={route:u.default.PropTypes.object},t.default=h;t.pageQuery="** extracted graphql fragment **"}});
//# sourceMappingURL=page-component---src-pages-blog-js-7501306a1f51a772cf38.js.map