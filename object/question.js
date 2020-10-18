var str="HHHPPSDAAA"

var cnt={}
for (ch in str){
    if(ch in cnt){
        cnt[ch]+=1;
    }
    else{
        cnt[ch]=1;
    }
}

var output=""
for(key in cnt){
    output=output+cnt[key]+key
}
console.log(output)