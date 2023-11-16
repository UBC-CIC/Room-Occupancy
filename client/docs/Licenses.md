# Client License Documentation

This project has the yarn package: check-licenses installed.
Package documentation can be found here: [License Checker](https://classic.yarnpkg.com/en/package/check-licenses#:~:text=Getting%20started&text=If%20you%20want%20to%20dig,use%20the%20%2D%2Dlist%20flag.).

## Commands

npm i check-licenses -g
licenses # Note how this is just `licenses`
licenses --list
licenses --help

// Or use the library straight from npm
npx check-licenses
npx check-licenses --list
npx check-licenses --help
npx --yes check-licenses

## Note & Potential Errors

ou need ~/Room-Occupancy/client/package-lock.json to check the licenses:
➤ Make sure you are in the correct folder (eg: client)
➤ Generate the lock file with npm install
➤ It will make your installs deterministic
➤ You can remove it after the license check

## Licenses (updated as of Nov 15 2024)

MIT ————————————————— 1143
ISC ————————————————— 64
CC0-1.0 ————————————— 46
Fair ———————————————— 43
BSD-2-Clause ———————— 37
BSD-3-Clause ———————— 32
Apache-2.0 —————————— 30
TCL ————————————————— 8
Unlicense ——————————— 2
0BSD ———————————————— 2
Intel ——————————————— 1
Python-2.0 —————————— 1
MPL-2.0 ————————————— 1
CC-BY-4.0 ——————————— 1
BSD ————————————————— 1
MPL-1.1 ————————————— 1
AFL-2.1 ————————————— 1
X11 ————————————————— 1
GPL-2.0 ————————————— 1

## GPL Licenses

Given that the project will have a MIT License, the incompatible licenses GPL2.0 licenses are:
node-forge@1.3.1 ———————————————————————— BSD-3-Clause + GPL-2.0

which stems from:
client@0.1.0 /Room-Occupancy/client
└─┬ react-scripts@5.0.1
└─┬ webpack-dev-server@4.15.1
└─┬ selfsigned@2.4.1
└── node-forge@1.3.1
