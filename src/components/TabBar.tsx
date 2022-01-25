import { useState } from "react";

enum Tabs {
    blog = "Blob",
    none = "None"
}

export const TabBar = () => {
    const [activeTab, setActiveTab] = useState(Tabs.none);

    return (
        <div>
            <div
                onClick={() => {
                    setActiveTab(Tabs.blog);
                }}
                style={{ fontWeight: activeTab === Tabs.blog ? 800 : 400 }}
            >
                Blog
            </div>
        </div>
    )
}