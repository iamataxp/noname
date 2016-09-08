play.cardpile={
	arenaReady:function(){
        var data={
            total:160,
            sha:{
                diamond:6,
                club:14,
                heart:3,
                spade:7,
            },
            huosha:{
                diamond:2,
                hearth:3
            },
            leisha:{
                spade:5,
                club:4
            },
            shan:{
                heart:6,
                diamond:18
            },
            jiu:{
                diamond:1,
                spade:2,
                club:2
            },
            tao:{
                heart:9,
                diamond:3,
            },
            wanjian:{
                heart:1,
            },
            nanman:{
                spade:2,
                club:1,
            },
            guohe:{
                spade:3,
                club:2,
                heart:1
            },
            shunshou:{
                spade:3,
                diamond:2
            },
            wuxie:{
                heart:2,
                diamond:1,
                spade:2,
                club:2
            },
            tiesuo:{
                spade:2,
                club:4
            }
        }
        var rand=function(){
            return Math.ceil(Math.random()*13);
        };
        var num=0;
        for(var i in data){
            if(lib.config['cardpile_'+i+'_playpackconfig']){
                for(var j in data[i]){
                    num+=data[i][j];
                }
            }
        }
        var dn=num*(lib.card.list.length-data.total)/(data.total-num);
        if(dn>1000) dn=1000;
        if(dn>0){
            var p=0;
            for(var i in data){
                if(lib.config['cardpile_'+i+'_playpackconfig']){
                    for(var j in data[i]){
                        var n=Math.round(dn*data[i][j]/num);
                        while(n--){
                            if(i=='huosha'||i=='leisha'){
                                lib.card.list.push([j,rand(),'sha',i.slice(0,3)]);
                            }
                            else{
                                lib.card.list.push([j,rand(),i]);
                            }
                        }
                    }
                }
            }
        }
	},
	help:{
		'牌堆补充':'<ul><li>维持特定卡牌在牌堆中的比例，防止开启扩展包后重要的牌被过多地稀释'
	},
}
