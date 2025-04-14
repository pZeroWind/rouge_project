import { _decorator, Component, Node } from 'cc';
import { UGameWorldBase } from './UGameWorldBase';
const { ccclass, property } = _decorator;

/**
 * 游戏系统基类
 * 用于实现ECS中的系统逻辑
 */
@ccclass('FGameSystemBase')
export abstract class FGameSystemBase{
    //初始化
    abstract onInitialize(world: UGameWorldBase) : void;

    //执行
    abstract onUpdate(world: UGameWorldBase, deltaTime: number) : void;
}


