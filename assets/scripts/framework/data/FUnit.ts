import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

/**
 * 实体单位结构体
 */
export class FUnit {
    Id: number = 0;

    private m_node: Node

    getNode(){
        return this.m_node;
    }

    setNode(node: Node){
        this.m_node = node;
    }
}


