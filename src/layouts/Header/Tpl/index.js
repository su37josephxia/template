import {useEffect} from "react";
import styles from "./index.less";

const tplData = [
  {
    id: "0",
    name: "奖状",
    img: "https://tva1.sinaimg.cn/large/008eGmZEly1gnn7496dgnj30i40dkakb.jpg",
    cmps:
      '{"style":{"width":320,"height":568,"backgroundColor":"#fff","backgroundImage":"","backgroundPosition":"center","backgroundSize":"contain"},"cmps":[{"desc":"图片","data":{"type":2,"value":"https://img.tusij.com/ips_asset/15/92/20/82/17/0c/0cd90db0a695dbd3e3863fc91966f9e5.png!l800_i_w?auth_key=1638115200-0-0-b0ffe9b4a1b908c00614751f80c5576a","style":{"top":0,"left":0,"width":315,"height":187,"borderRadius":"0%"}},"onlyKey":0.6696634341937919},{"desc":"图片","data":{"type":2,"value":"https://img.tusij.com/ips_asset/15/92/20/82/17/81/812e08e2157d0fb0021cb376f3abdf89.png!l800_i_w?auth_key=1638115200-0-0-934ab0fcf8ac0d630994dfaa68d02736","style":{"top":130,"left":237,"width":39,"height":27,"borderRadius":"0%"}},"onlyKey":0.5770365144261809},{"desc":"图片","data":{"type":2,"value":"https://img.tusij.com/ips_asset/15/92/20/82/17/07/075b0e0118f23549ce0e700676e45191.png!l800_i_w?auth_key=1638115200-0-0-6bcef5430a7fef147606bfd7e6776a72","style":{"top":25,"left":85,"width":128,"height":29,"borderRadius":"0%"}},"onlyKey":0.06514563061276268},{"desc":"文本","data":{"type":0,"value":"高少云同学 :","style":{"top":58,"left":36,"width":74,"height":26,"lineHeight":30,"fontSize":12,"color":"#000","backgroundColor":"#fff","textAlign":"left","borderRadius":"0%"}},"onlyKey":0.5164626325385688},{"desc":"文本","data":{"type":0,"value":"在2021年度，表现优异，被评为","style":{"top":95,"left":54.5,"width":187,"height":20,"lineHeight":"20","fontSize":12,"color":"#000","backgroundColor":"#fff","textAlign":"left","borderRadius":"0%"}},"onlyKey":0.9101550683481234},{"desc":"文本","data":{"type":0,"value":"三好学生","style":{"top":117,"left":105.5,"width":84,"height":20,"lineHeight":"22","fontSize":"20","color":"#fa0202ff","backgroundColor":"#fff","textAlign":"left","borderRadius":"0%"}},"onlyKey":0.4927326124835836},{"desc":"文本","data":{"type":0,"value":"特发此状，以资鼓励！","style":{"top":137,"left":38.5,"width":128,"height":22,"lineHeight":30,"fontSize":12,"color":"#000","backgroundColor":"#fff","textAlign":"left","borderRadius":"0%"}},"onlyKey":0.8330317242862308}]}',
  },

  {
    id: "1",
    name: "元宵节",
    img: "https://tva1.sinaimg.cn/large/008eGmZEly1gnp7obc3dzj30hk0vctxn.jpg",
    cmps:
      '{"style":{"width":320,"height":568,"backgroundColor":"#fff","backgroundImage":"https://img.tusij.com/ips_asset/15/48/39/56/79/2c/2ce035569e9220b4ca27c2d29f52977e.png!l800_i_w?auth_key=1639152000-0-0-6f62548d215a0bcc4548f6dacf9b88f9","backgroundPosition":"center","backgroundSize":"contain","backgroundRepeat":"no-repeat"},"cmps":[{"desc":"图片","data":{"type":2,"value":"https://img.tusij.com/ips_asset/15/48/39/56/78/3f/3f1b670ab744dc8c895b3483e4fe7bfe.png!l800_i_w?auth_key=1639152000-0-0-5ad0647faf411b341c9f9e8d5b88b2f8","style":{"top":0,"left":0,"width":108,"height":193,"borderRadius":"0%"}},"onlyKey":0.059593328650888955},{"desc":"图片","data":{"type":2,"value":"https://img.tusij.com/ips_asset/15/48/39/56/74/7f/7f0b45e3009c7a22a0708415582d4635.png!l800_i_w?auth_key=1639152000-0-0-1b204be366ee0b8c146485295b52704f","style":{"top":16,"left":181,"width":137,"height":36,"borderRadius":"0%"}},"onlyKey":0.3393020198391947},{"desc":"图片","data":{"type":2,"value":"https://img.tusij.com/ips_asset/15/48/39/56/74/56/564896077cb72510ff3b920732d8c53c.png!l800_i_w?auth_key=1639152000-0-0-456d31b72cda757ae3945425296bd646","style":{"top":356,"left":54,"width":200,"height":100,"borderRadius":"0%"}},"onlyKey":0.12804288268725483},{"desc":"文本","data":{"type":0,"value":"元宵节","style":{"top":124,"left":129,"width":61,"height":181,"lineHeight":"60","fontSize":"60","fontWeight":"bold","color":"#fc0000ff","backgroundColor":"#ffffff00","textAlign":"left","borderRadius":"0%"}},"onlyKey":0.09559137553660801}]}',
  },

  {
    id: "2",
    name: "牛年大吉",
    img: "https://tva1.sinaimg.cn/large/008eGmZEly1gnpfgy1zonj30hk0v81j8.jpg",
    cmps:
      '{"style":{"width":320,"height":568,"backgroundColor":"#fff","backgroundImage":"https://img.tusij.com/ips_asset/16/11/10/44/54/a5/a57d2950001941a5e65fc3ac73fe8cb8.png!l800_i_w?auth_key=1639324800-0-0-d94f8946bfa0f7eca8fc8094a1516003","backgroundPosition":"center","backgroundSize":"contain","backgroundRepeat":"no-repeat"},"cmps":[{"desc":"图片","data":{"type":2,"value":"https://img.tusij.com/ips_asset/16/11/10/44/53/5a/5aac2e49feeb917d0071a29126964010.png!l800_i_w?auth_key=1639324800-0-0-fa311768fea7460b62100c4e6366a2e4","style":{"top":-3,"left":-1,"width":317,"height":564,"borderRadius":"0%"}},"onlyKey":0.8084904366045147},{"desc":"图片","data":{"type":2,"value":"https://img.tusij.com/ips_asset/16/11/10/44/54/09/09917bf7e35711c91d353fd7aebf2a38.png!l800_i_w?auth_key=1639324800-0-0-bd838424e74c24b3f0787ae4c4fb11d6","style":{"top":175,"left":54.5,"width":207,"height":219,"borderRadius":"0%"}},"onlyKey":0.9654882275495524},{"desc":"图片","data":{"type":2,"value":"https://img.tusij.com/ips_asset/16/11/10/44/54/70/70913bd41742596a4a0dd68b088e6551.png!l800_i_w?auth_key=1639324800-0-0-2a8cd9567a9d2a9aa2ddd8acc4a24450","style":{"top":480,"left":-1,"width":320,"height":85,"borderRadius":"0%"}},"onlyKey":0.3204906861875192},{"desc":"图片","data":{"type":2,"value":"https://img.tusij.com/ips_asset/16/11/10/44/54/ab/ab06c00c974c83828a1ec4efb5bca2bf.png!l800_i_w?auth_key=1639324800-0-0-65182ed5f3ed55503bbfb02fb65b4663","style":{"top":53,"left":56,"width":231,"height":113,"borderRadius":"0%"}},"onlyKey":0.15280772255383002},{"desc":"图片","data":{"type":2,"value":"https://img.tusij.com/ips_asset/16/11/10/44/54/ae/aefd66a218248c11f5652ef1a6e64b19.png!l800_i_w?auth_key=1639324800-0-0-2a91660153714f43bf6087c3c800f17b","style":{"top":172,"left":44.5,"width":230,"height":231,"borderRadius":"0%"}},"onlyKey":0.7928329196335928},{"desc":"图片","data":{"type":2,"value":"https://img.tusij.com/ips_asset/16/11/10/44/53/69/6917ec339fa98e4cb97cf596cc9179df.png!l800_i_w?auth_key=1639324800-0-0-31958bfca526c4f4f87f4363b8b16b61","style":{"top":400,"left":0,"width":132,"height":132,"borderRadius":"0%"}},"onlyKey":0.3017541431658919},{"desc":"图片","data":{"type":2,"value":"https://img.tusij.com/ips_asset/16/11/10/44/53/e7/e722646ec5596c852c8b193b2ef09db9.png!l800_i_w?auth_key=1639324800-0-0-0e5dcd8e08ad1e7f0de72c2dad23419c","style":{"top":415,"left":198,"width":117,"height":100,"borderRadius":"0%"}},"onlyKey":0.9492462781302984},{"desc":"文本","data":{"type":0,"value":"牛","style":{"top":90,"left":92,"width":33,"height":32,"lineHeight":30,"fontSize":"30","fontWeight":"bold","color":"#080707ff","backgroundColor":"#ffffff00","textAlign":"left","borderRadius":"0%"}},"onlyKey":0.29642804459681216},{"desc":"文本","data":{"type":0,"value":"年","style":{"top":68,"left":132,"width":33,"height":32,"lineHeight":30,"fontSize":"30","fontWeight":"bold","color":"#080707ff","backgroundColor":"#ffffff00","textAlign":"left","borderRadius":"0%"}},"onlyKey":0.07803881565883475},{"desc":"文本","data":{"type":0,"value":"大","style":{"top":68,"left":180,"width":33,"height":32,"lineHeight":30,"fontSize":"30","fontWeight":"bold","color":"#080707ff","backgroundColor":"#ffffff00","textAlign":"left","borderRadius":"0%"}},"onlyKey":0.9790554274376768},{"desc":"文本","data":{"type":0,"value":"吉","style":{"top":88,"left":221,"width":33,"height":32,"lineHeight":30,"fontSize":"30","fontWeight":"bold","color":"#080707ff","backgroundColor":"#ffffff00","textAlign":"left","borderRadius":"0%"}},"onlyKey":0.008274151634457994},{"desc":"图片","data":{"type":2,"value":"https://img.tusij.com/ips_asset/16/11/10/44/53/9a/9a353760e02b49cbdd2706f5c452291b.png!l800_i_w?auth_key=1639324800-0-0-8825104eb9f4bd5ca42b9ff8c3690c9c","style":{"top":435,"left":73,"width":154,"height":79,"borderRadius":"0%"}},"onlyKey":0.22889093407147554},{"desc":"图片","data":{"type":2,"value":"https://img.tusij.com/ips_asset/16/11/10/44/53/ca/ca7ebd1a9683109e61f374e75e87fc85.png!l800_i_w?auth_key=1639324800-0-0-04d5239353f80379a2430dc74d1ac11a","style":{"top":-5,"left":239.5,"width":73,"height":78,"borderRadius":"0%"}},"onlyKey":0.831948911851419}]}',
  },

  {
    id: "3",
    name: "元宵抽奖",
    img: "https://tva1.sinaimg.cn/large/008eGmZEly1gnpkvyq3q5j30hq0vgkfn.jpg",

    cmps:
      '{"style":{"width":320,"height":568,"backgroundColor":"#d12a2aff","backgroundImage":"https://img.tusij.com/ips_asset/16/11/10/44/54/a5/a57d2950001941a5e65fc3ac73fe8cb8.png!l800_i_w?auth_key=1639324800-0-0-d94f8946bfa0f7eca8fc8094a1516003","backgroundPosition":"center","backgroundSize":"contain","backgroundRepeat":"no-repeat"},"cmps":[{"desc":"图片","data":{"type":2,"value":"https://img.tusij.com/ips_asset/16/11/10/44/54/09/09917bf7e35711c91d353fd7aebf2a38.png!l800_i_w?auth_key=1639324800-0-0-bd838424e74c24b3f0787ae4c4fb11d6","style":{"top":128,"left":112,"width":111,"height":146,"borderRadius":"0%"}},"onlyKey":0.8555276485757941},{"desc":"图片","data":{"type":2,"value":"https://img.tusij.com/ips_asset/16/11/10/44/53/ca/ca7ebd1a9683109e61f374e75e87fc85.png!l800_i_w?auth_key=1639324800-0-0-04d5239353f80379a2430dc74d1ac11a","style":{"top":32,"left":154,"width":139,"height":109,"borderRadius":"0%"}},"onlyKey":0.9280545997542136},{"desc":"图片","data":{"type":2,"value":"https://tva1.sinaimg.cn/large/008eGmZEly1gnpfp4bgkuj30ci06f3z7.jpg","style":{"top":207,"left":64,"width":200,"height":100,"borderRadius":"0%"}},"onlyKey":0.5707040859891097},{"desc":"图片","data":{"type":2,"value":"https://img.tusij.com/ips_asset/16/11/10/44/54/70/70913bd41742596a4a0dd68b088e6551.png!l800_i_w?auth_key=1639324800-0-0-2a8cd9567a9d2a9aa2ddd8acc4a24450","style":{"top":463,"left":-2,"width":319,"height":102,"borderRadius":"0%"}},"onlyKey":0.9564208214110723},{"desc":"图片","data":{"type":2,"value":"https://img.tusij.com/ips_asset/16/11/10/44/53/e7/e722646ec5596c852c8b193b2ef09db9.png!l800_i_w?auth_key=1639324800-0-0-0e5dcd8e08ad1e7f0de72c2dad23419c","style":{"top":400,"left":33,"width":135,"height":117,"borderRadius":"0%"}},"onlyKey":0.17963575080516958},{"desc":"图片","data":{"type":2,"value":"https://img.tusij.com/ips_asset/16/11/10/44/53/69/6917ec339fa98e4cb97cf596cc9179df.png!l800_i_w?auth_key=1639324800-0-0-31958bfca526c4f4f87f4363b8b16b61","style":{"top":458,"left":181,"width":120,"height":88,"borderRadius":"0%"}},"onlyKey":0.12644409828801928},{"desc":"按钮","data":{"type":1,"value":"立即领取","style":{"top":268,"left":125,"width":81,"height":25,"lineHeight":30,"fontSize":"20","fontWeight":"bold","color":"#e8c410ff","backgroundColor":"#ffffff00","textAlign":"center","borderRadius":"0%"}},"onlyKey":0.7510316444644778},{"desc":"图片","data":{"type":2,"value":"https://img.tusij.com/ips_asset/15/48/39/56/74/56/564896077cb72510ff3b920732d8c53c.png!l800_i_w?auth_key=1639152000-0-0-456d31b72cda757ae3945425296bd646","style":{"top":139,"left":233,"width":78,"height":55,"borderRadius":"0%"}},"onlyKey":0.4579364745456389},{"desc":"图片","data":{"type":2,"value":"https://img.tusij.com/ips_asset/16/11/10/44/54/a5/a57d2950001941a5e65fc3ac73fe8cb8.png!l800_i_w?auth_key=1639324800-0-0-d94f8946bfa0f7eca8fc8094a1516003","style":{"top":295,"left":-1,"width":340,"height":269,"borderRadius":"0%"}},"onlyKey":0.09410858481084006},{"desc":"图片","data":{"type":2,"value":"https://img.tusij.com/ips_asset/16/11/66/55/03/f6/f6b968f702f10b9b3a46504f1063a61f.png!l800_i_w?auth_key=1638633600-0-0-1301d0e3269d9765ee7b94af3a523aa1","style":{"top":319,"left":249,"width":50,"height":106,"borderRadius":"0%"}},"onlyKey":0.3118813798433606},{"desc":"图片","data":{"type":2,"value":"https://img.tusij.com/ips_asset/16/11/10/44/54/a5/a57d2950001941a5e65fc3ac73fe8cb8.png!l800_i_w?auth_key=1639324800-0-0-d94f8946bfa0f7eca8fc8094a1516003","style":{"top":0,"left":-2,"width":319,"height":88,"borderRadius":"0%"}},"onlyKey":0.7351902635091521}]}',
  },
];

export default function Tpl({openOrCloseTpl, globalCanvas}) {
  const updateCmps = (cmps) => {
    globalCanvas.updateCanvas(JSON.parse(cmps));
    openOrCloseTpl(false);
  };

  return (
    <ul className={styles.main}>
      <li className={styles.close} onClick={openOrCloseTpl}>
        <i className="iconfont icon-close"></i>
      </li>
      {tplData.map((item) => (
        <li
          key={item.id}
          className={styles.item}
          onClick={() => updateCmps(item.cmps)}>
          <div className={styles.name}>{item.name}</div>
          <div className={styles.thumbnail}>
            <img src={item.img} />
          </div>
        </li>
      ))}
    </ul>
  );
}
