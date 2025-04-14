import { _decorator, Component, Node } from 'cc';
import { Buff } from '../buffs/Buff';
const { ccclass, property } = _decorator;

@ccclass('BuffComponent')
export class BuffComponent extends Component {
    private m_buffs: Buff[] = []
}


