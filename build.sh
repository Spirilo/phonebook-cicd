#!/bin/bash

echo "Build script"

npm install
cd frontend
npm install
cd ../
mkdir build
npm run build-render