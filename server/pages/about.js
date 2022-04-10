import React from "react";
import Layout from "../components/Layout";
const About = () => {
    return (
        <Layout title="เกี่ยวกับเรา">
            <div className="container col-md-5">
                <h3>สวัสดีค่ะ</h3>
                <p>ยินดีต้อนรับสู่ Mintra Blog พื้นที่สำหรับการแบ่งปันเรื่องราวของเราเอง สวัสดีค่ะ เราชื่อมิ้นท์ มินตรา เราเปิด Blog นี้ขึ้นมา
                    เพื่อแชร์เรื่องราวทั้งกิน เที่ยว ไลฟ์สไตล์ ความรู้ต่างๆ มาแชร์ให้คนที่สนใจ ขอบคุณทุกคนสำหรับกาารติดตามเรานะคะ
                </p>
                <h5 className="text-success">จาก Mintra Blog</h5>
            </div>
        </Layout>
    )
}

export default About;