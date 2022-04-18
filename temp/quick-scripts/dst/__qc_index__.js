
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/BackUpScripts/DuoBlock');
require('./assets/BackUpScripts/TripleBlock');
require('./assets/Scripts/Block');
require('./assets/Scripts/BlockContain');
require('./assets/Scripts/Board');
require('./assets/Scripts/DiemSo');
require('./assets/Scripts/EmptyBlock');
require('./assets/Scripts/FBInstantManager');
require('./assets/Scripts/Gamecontroller');
require('./assets/Scripts/NovaBlock');
require('./assets/Scripts/PauseMenu');
require('./assets/Scripts/SoundController');
require('./assets/Scripts/StartGameScreen');

                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();