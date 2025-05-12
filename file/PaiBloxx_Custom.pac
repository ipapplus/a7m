function FindProxyForURL(url, host) {
    const u = url.toLowerCase();   // تحويل الرابط إلى حروف صغيرة
    const h = host.toLowerCase();  // تحويل اسم المضيف إلى حروف صغيرة

    const blockedDomains = [
        "1.uc129.com",
        "1.ufc123.com",
        "1.ufc7.com",
        "1.v-x.com.cn",
        "1.weiheshidai.com",
        "1.xuexili.com",
        "1.yxzw.com.cn",
        "1.zhev.com.cn",
        "1.zhuangxiu567.com",
        "1.zuowenjun.com",
        "10.afs.googleadservices.com",
        "10.at.atwola.com",
        "10.im.cz",
        "100.pncdn.cn",
        "100001578.collect.igodigital.com"
    ];

    // فحص ما إذا كان اسم المضيف في قائمة المحجوبين
    for (let i = 0; i < blockedDomains.length; i++) {
        if (dnsDomainIs(h, blockedDomains[i].toLowerCase())) {
            return "PROXY 0.0.0.0:53";  // استخدام بروكسي وهمي لحظر الموقع
        }
    }

    return "DIRECT";  // السماح بالاتصال مباشرة في حال عدم وجود تطابق
}