#!/bin/bash

echo "Build script"

npm install
cd frontend
npm install
cd ../
npm run render-build