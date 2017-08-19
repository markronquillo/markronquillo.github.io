webpackJsonp([678094949412576e4],{"./node_modules/json-loader/index.js!./.cache/json/docker-compose-for-local-development.json":function(e,n){e.exports={data:{site:{siteMetadata:{title:"Blog",author:"Mark Joseph Ronquillo"}},markdownRemark:{id:"/Users/markronquillo/Projects/blog-gatsby/blog/src/pages/posts/2017-04-08-docker-compose-for-local-development.md absPath of file >>> MarkdownRemark",html:'<p>In a previous post, I have talked about basics of Docker and how to utilize it in your own development environment. One important benefit of Docker is that you can have multiple versions of applications or dependencies (e.g. MySQL, PHP) <em>installed</em> in your machine through docker images. In this post, I’ll discuss about Docker Compose. In a nutshell, Docker Compose lets the user define linked containers using a file in YAML format. For example you can have a Django application container connected to a PostgreSQL container defined in your <code>docker-compose.yml</code> file. Containers defined in the yaml file created or deleted using the command line tool <code>docker-compose</code>.</p>\n<h3>Sample Django application using Docker Compose</h3>\n<p>If you are using Mac OSX, you need to boot up your docker using <code>docker-machine start</code>. If you are using linux, by default it is already running. After that, create a new folder for your project, this is where you are going to store your django application, Dockerfile and docker-compose file. Inside your project folder, create a new django application by <code>django-admin startproject app</code>. </p>\n<h3>Dockerizing our django application</h3>\n<p>To start using docker in our django application, we need to create a Dockerfile inside the project root directory. Refer to the Dockerfile below:</p>\n<div class="gatsby-highlight">\n      <pre class="language-docker"><code><span class="token keyword">FROM</span> python<span class="token punctuation">:</span>3.4\n\n<span class="token keyword">ADD</span> requirements.txt /app/\n<span class="token keyword">RUN</span> pip install <span class="token punctuation">-</span>r /app/requirements.txt\n\n<span class="token keyword">WORKDIR</span> /app\n\n<span class="token keyword">EXPOSE</span> 8000\n</code></pre>\n      </div>\n<p>This Dockerfile uses the python:3.4 Docker image as the base image. It also installs the django application dependencies using <code>pip</code>. Then sets the default working directory in <code>/app</code> folder. Lastly, it exposes port 8000, since by default, this is where django apps run. You can try building a docker image using this Dockerfile by <code>docker build -t my-django-app</code></p>\n<h3>Using Docker Compose in our project</h3>\n<p>We can use docker compose to define and connect the containers that we will use in our project. Notice that we didn’t declare in the Dockerfile to copy the django project in the docker image, meaning if we try to run the docker image right now, it won’t have access (or copy) to the django application. This is intentional, since we are only using docker in our development environment. Instead of copying the project inside the docker image, we can use <em>volume</em> to mount our django project inside the running container. Create a new <code>docker-compose.yml</code> file inside your project root directory and copy the content below.</p>\n<div class="gatsby-highlight">\n      <pre class="language-yml"><code>version: \'2\'\nnetworks:\n    app-network:\n        driver: bridge\nservices:\n  app:\n    build: .\n    command: python manage.py runserver 0.0.0.0:8000\n    networks:\n        - app-network\n    environment:\n        - DB_HOST=app-db\n        - DB_NAME=myapp\n        - DB_USER=myapp\n        - DB_PASSWORD=mysecretpass\n    volumes:\n        - ./app:/app\n    links:\n        - db:app-db\n    ports:\n        - 8000:8000\n  db:\n      image: postgres\n      networks:\n          - app-network\n      environment:\n          - POSTGRES_USER=myapp\n          - POSTGRES_PASSWORD=mysecretpass\n      ports:\n          - 5432:5432</code></pre>\n      </div>\n<p>The first line in the <code>docker-compose.yml</code> file defines the version of docker compose that we are using. The second line defines a new network where we set our containers to run. It is ideal to let connected containers run on a different network other than the default <code>bridge</code> network. The next line defines the services or containers that we will create and use. For each container, we define the image that it will use, mounted volumes, ports exposed, environment variables, network where it will run etc. </p>\n<p>One benefit in using docker compose is that we can organize and connect our containers using just one <code>docker-compose.yml</code> file. In our example, we defined a django app container that is connected to a postgres container. We defined our django app container to mount a volume <code>./app</code> to the container. This enables us to edit our code without accessing the insides of the container. The link parameter tells docker compose to map the postgres container <code>db</code> as <code>app-db</code> inside our <code>app</code> container. This enables us to use <code>app-db</code> as the DB_HOST value and  thus connect to the postgres container.</p>\n<p>Run <code>docker-compose up -d</code> to start building images and running our containers. You should see the results below. </p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="undefined"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; z-index: -1; display: block; "\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 13.748191027496382%;position: relative; width: 100%; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAADCAYAAACTWi8uAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAVUlEQVQI153Myw2AIBBFUVogRiQzcSMIyGdcmdB/Y0+DHbA4uburiBbs7nP8mAnGrNBaT1Exelz5REgOKXuIVITgYe02N2yt4hZBKWXMen9GmXlq+ALVhUw03neNvgAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="docker-compose-up"\n        title=""\n        src="/static/f6b332ce25ee85530946f11ebd10fca0-fb8a0.png"\n        srcset="/static/f6b332ce25ee85530946f11ebd10fca0-1a291.png 148w,\n/static/f6b332ce25ee85530946f11ebd10fca0-2bc4a.png 295w,\n/static/f6b332ce25ee85530946f11ebd10fca0-fb8a0.png 590w,\n/static/f6b332ce25ee85530946f11ebd10fca0-526de.png 885w,\n/static/f6b332ce25ee85530946f11ebd10fca0-fa2eb.png 1180w,\n/static/f6b332ce25ee85530946f11ebd10fca0-31287.png 1382w"\n        sizes="(max-width: 590px) 100vw, 590px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>To view the status of your containers, run <code>docker-compose ps</code>.</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="undefined"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; z-index: -1; display: block; "\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 18.59504132231405%;position: relative; width: 100%; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAECAYAAACOXx+WAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAn0lEQVQY022OXQ6EIBCDPQII6IKK/Ih6/wt26WTjw8aHCaVpv5khBIM1GcTK12KaJmit/0a9eO8zONdBm0cuW4cR6GCMgbUGyxJwng1W/lYmxk18auccUtqfvFYKQwihhyJqLaBmaF0XKeWc0FoV7f3nB4yY57lnveSuq8kSarmQJW45jtoBu5QIp1dKfsAsjOMoINUvIYQ+gfd9SpbAL5kZZwdGfXk7AAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="docker-compose-ps"\n        title=""\n        src="/static/ed5ac930df902280ad8af63023ea1ef9-fb8a0.png"\n        srcset="/static/ed5ac930df902280ad8af63023ea1ef9-1a291.png 148w,\n/static/ed5ac930df902280ad8af63023ea1ef9-2bc4a.png 295w,\n/static/ed5ac930df902280ad8af63023ea1ef9-fb8a0.png 590w,\n/static/ed5ac930df902280ad8af63023ea1ef9-526de.png 885w,\n/static/ed5ac930df902280ad8af63023ea1ef9-fa2eb.png 1180w,\n/static/ed5ac930df902280ad8af63023ea1ef9-c6200.png 1452w"\n        sizes="(max-width: 590px) 100vw, 590px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>Finally, access your django application in the browser using <code>localhost:8000</code>. If you are using mac, get the ip of your docker machine by <code>docker-machine ip</code> then access the app in the browser using [your docker machine ip]:8000. That’s it, you now have a connected django app container to a postgresql container. </p>',frontmatter:{title:"Docker Compose for local development",date:"April 08, 2017"}}},pathContext:{path:"/docker-compose-for-local-development"}}}});
//# sourceMappingURL=path---docker-compose-for-local-development-573abaf1317f3089ac0f.js.map