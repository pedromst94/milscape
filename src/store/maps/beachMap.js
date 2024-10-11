import {beachTable} from "./beachMap/beachTable";
import BeachMap from "./beachMap/BeachMap";
import BeachMapDownLevel from "./beachMap/BeachMapDownLevel";
import BeachMapTopLevel from "./beachMap/BeachMapTopLevel";

export default [
    {
        table: beachTable,
        MapComp: BeachMap,
        DownLevelComp: BeachMapDownLevel,
        TopLevelComp: BeachMapTopLevel
    }
]
