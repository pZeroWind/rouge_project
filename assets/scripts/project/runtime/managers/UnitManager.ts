import { resources, TextAsset } from "cc";
import { FUnit } from "../../../framework/data/FUnit";

/**
 * 实体单位管理器
 */
class UnitManager{
    private m_path = "units";
    private m_units: Map<string, FUnit>
    
    initialize(): Promise<void>{
        return new Promise((resolve, reject) =>{
            console.log("正在初始化实体单位管理器")
            resources.loadDir<TextAsset>(this.m_path, (err, data)=>{
                if(err) {
                    reject(err);
                }
                else {
                    for (const json of data) {
                        let unit = JSON.parse(json.text);
                        this.m_units.set(json.name, unit);
                    }
                    console.log("实体单位管理器 载入完毕")
                    resolve();
                }
                
            });
        })
        
    }

    findUnit(name: string) : FUnit {
        return this.m_units.get(name);
    }
}

export const UnitMgr = new UnitManager();