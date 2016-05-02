global.IS_TEST_ENV = true;

// System Objects
global.cp = require('child_process');
global.events = require('events');
global.os = require('os');
global.path = require('path');
global.stream = require('stream');
global.util = require('util');
global.zlib = require('zlib');

global.Emitter = events.EventEmitter;
global.Duplex = stream.Duplex;
global.Stream = stream.Stream;
global.Transform = stream.Transform;


// Third Party Dependencies
global.acorn = require('acorn');
global.async = require('async');
global.bindings = require('bindings');
global.fs = require('fs-extra');
global.fsTemp = require('fs-temp');
global.Ignore = require('fstream-ignore');
global.inquirer = require('inquirer');
global.mdns = require('mdns-js');
global.mkdirp = require('mkdirp');
global.osenv = require('osenv');
global.Project = require('t2-project');
global.request = require('request');
global.sinon = require('sinon');
global.sshpk = require('sshpk');
global.ssh = require('ssh2');
global.tags = require('common-tags');
global.tar = require('tar');
global.uglify = require('uglify-js');


// Internal
// ./lib/tessel/*
global.Tessel = require('../../lib/tessel/tessel');
global.commands = require('../../lib/tessel/commands');
global.deploy = require('../../lib/tessel/deploy');
global.deployLists = require('../../lib/tessel/deploy-lists');
global.provision = require('../../lib/tessel/provision');
global.RSA = require('../../lib/tessel/rsa-delegation');

// ./lib/*
global.CrashReporter = require('../../lib/crash-reporter');
global.Preferences = require('../../lib/preferences');
global.controller = require('../../lib/controller');
global.discover = require('../../lib/discover');
global.logs = require('../../lib/logs');
global.updates = require('../../lib/update-fetch');
global.lan = require('../../lib/lan-connection');
global.usb = require('../../lib/usb-connection');

// ./lib/usb/*
global.Daemon = require('../../lib/usb/usb-daemon');
global.USBProcess = require('../../lib/usb/usb-process');

// ./test/common/*
global.TesselSimulator = require('../common/tessel-simulator');
global.RemoteProcessSimulator = require('../common/remote-process-simulator');

// ./bin/*
global.cli = require('../../bin/tessel-2');


// Shorthands
global.LAN = lan.LAN;
global.TesselSeeker = discover.TesselSeeker;
global.USB = usb.USB;

global.Request = function Request() {};
util.inherits(global.Request, global.Stream);
