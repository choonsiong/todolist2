# About

A simple Node.js demo app that can be deploy using Docker.

To run it locally, pull the image with `docker pull choonsiong/todoapp`, then run the command `docker run -p 80:3000 choonsiong/todoapp`. You should be able to open it via localhost port 80.

```
 17:34:32 364  docker pull choonsiong/todoapp
Using default tag: latest
latest: Pulling from choonsiong/todoapp
0a6724ff3fcd: Already exists 
f59e82757acf: Pull complete 
2b54ac9d1042: Pull complete 
cb081fe40633: Pull complete 
79a979dcac77: Pull complete 
8ed8cf9ba0cb: Pull complete 
ab49a3374399: Pull complete 
cbacdb046c84: Pull complete 
17310968cbfd: Pull complete 
e0d0dfff6bd7: Pull complete 
dacec6acaa42: Pull complete 
78a801d34ac3: Pull complete 
d1e7332db145: Pull complete 
277c090670a4: Pull complete 
a9953c7dde0e: Pull complete 
84387cd2b7ac: Pull complete 
Digest: sha256:faa4174855a2f7fc35fdd3e308e39980058ef36001a10afb42ba1a2efe5d66be
Status: Downloaded newer image for choonsiong/todoapp:latest
docker.io/choonsiong/todoapp:latest
 17:34:54 364  docker run -p 80:3000 choonsiong/todoapp
Server started on port 3000
```

> Note:
>
> This repository is link to Docker Hub and the image is automatically built after `git push`.
