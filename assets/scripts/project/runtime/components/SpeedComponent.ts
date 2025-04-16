import { _decorator, Component, Node } from 'cc';

export class SpeedComponent {
    private m_speed: number

    
    public get value() : number {
        return this.m_speed;
    }
    
    
    public set value(v : number) {
        this.m_speed = v;
    }
    
}


