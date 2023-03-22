
Test project where inotify doesn't seem to work at all on colima HEAD-eceb851
```
brew reinstall colima --force-HEAD
colima stop
colima delete
colima start --cpu 4 --memory 8 --mount-inotify --very-verbose
git clone https://github.com/henrik242/nextjs-colima-inotify-test
cd nextjs-colima-inotify-test/web
yarn build
docker build .
cd ..
docker-compose up
```
Now open http://localhost:4900/ and edit `foo` in `web/src/components/Layout.tsx`. The web page should change, but it doesn't.

But touching the file inside the container works:
```
docker exec -ti <containerId> touch /app/src/components/Layout.tsx
```

Ref:
- [Discussed in Colima issue #261](https://github.com/abiosoft/colima/issues/261#issuecomment-1479163510)