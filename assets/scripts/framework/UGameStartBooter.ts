import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('UGameStartBooter')
export abstract class UGameStartBooter extends Component {

    @property({ tooltip:"Boot根节点", type:Node })
    BootRoot:Node;

    start() {
        this.onInitialize();
    }

    abstract onInitialize();
}


