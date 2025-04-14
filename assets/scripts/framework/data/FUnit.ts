import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

/**
 * 实体单位结构体
 */
@ccclass('FUnit')
export class FUnit {
    @property({ tooltip:"实体Id" })
    Id: number = 0;
}


