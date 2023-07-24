import json
#creates script_params.js
f=open("scripts_as.csv")
s=f.read().split('\n')
f2=open("script_params.js","w")
out=dict()
s=["test,o6906"]
for l in s:
    l2=l.split(",")
    script=l2[1]
    params=[]
    f3 = open("./scripts/"+script+".as");
    for l3 in f3.read().split('\n'):
        l3 = l3.strip()
        if not l3.startswith("public static var o20272:Array"):
            continue
        l3 = l3[l3.index("["):l3.rindex(";")]\
            .replace("o17243.o2013",'"short"')\
            .replace("o17243.o8809",'"int"')\
            .replace("o17243.float",'"float"')\
            .replace("o17243.o14773",'"boolean"')\
            .replace("o17243.o19845",'"UTF8"')\
            .replace("o17243.o13247",'"o17243.o13247"')\
            .replace("o17243.o1127",'"o17243.o1127"')\
            .replace("o13351.o10420","0")\
            .replace("o13351.o5585","1")
        l4 = eval(l3)
        for x in l4:
            params.append({'id':x[0],'type':x[1],'opt':x[2],'name':x[3]})
    out[l2[0]] = {'script':script, 'params':params}
f2.write("var scriptParams=")
f2.write(json.dumps(out,indent=4))
f2.write(";")
        
