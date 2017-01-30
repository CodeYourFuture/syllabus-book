
Testing
---

Make sure when running this package, that the dependencies are installed

    npm install

To run the tests run,

    npm test


Tests are run/created using [Jest](http://facebook.github.io/jest/)

To start testing a project, add the testing dependencies to a create-react-app project

    npm install --save-dev enzyme react-test-renderer

Your `package.json` should have two new libraries added to it

```diff
diff --git a/package.json b/package.json
index e51b9b7..7e883e0 100644
--- a/package.json
+++ b/package.json
@@ -3,7 +3,9 @@
   "version": "0.1.0",
   "private": true,
   "devDependencies": {
-    "react-scripts": "0.8.5"
+    "react-scripts": "0.8.5",
+    "enzyme": "^2.7.1",
+    "react-test-renderer": "^15.4.2"
   },
   "dependencies": {
     "react": "^15.4.2",
```

Open `src/App.test.js` to view the test examples
