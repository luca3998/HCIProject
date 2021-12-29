const graph = {
    adjacency:
    [
    /*   0 */ [1],
    /*   1 */ [0,31,204],
    /*   2 */ [11,21,22],
    /*   3 */ [4,26,204],
    /*   4 */ [3,12,308],
    /*   5 */ [6,13,17,308],
    /*   6 */ [5,7,14,18],
    /*   7 */ [6,8,15,19,28],
    /*   8 */ [7,9],
    /*   9 */ [8,10,16],
    /*  10 */ [9,11],
    /*  11 */ [2,10,20],
    /*  12 */ [4],
    /*  13 */ [5],
    /*  14 */ [6],
    /*  15 */ [7],
    /*  16 */ [9],
    /*  17 */ [5,23],
    /*  18 */ [6,23],
    /*  19 */ [7,24],
    /*  20 */ [11,24],
    /*  21 */ [2],
    /*  22 */ [2],
    /*  23 */ [17,18],
    /*  24 */ [19,20],
    /*  25 */ [26,27],
    /*  26 */ [3,25],
    /*  27 */ [25,81],
    /*  28 */ [7,29],
    /*  29 */ [28,30],
    /*  30 */ [29,61],
    /*  31 */ [1,32],
    /*  32 */ [31,33],
    /*  33 */ [32,34],
    /*  34 */ [33,35],
    /*  35 */ [34,36],
    /*  36 */ [35,37],
    /*  37 */ [36,38],
    /*  38 */ [37,202],
    /*  39 */ [40,202],
    /*  40 */ [39,41],
    /*  41 */ [40,303],
    /*  42 */ [43,203],
    /*  43 */ [42,44],
    /*  44 */ [43,45],
    /*  45 */ [44,295],
    /*  46 */ [47,84],
    /*  47 */ [46,49,64],
    /*  48 */ [64,65],
    /*  49 */ [47,50,65],
    /*  50 */ [49,51,66],
    /*  51 */ [50,52],
    /*  52 */ [51,54,309],
    /*  53 */ [54,55],
    /*  54 */ [52,53,67],
    /*  55 */ [53,56,68,73],
    /*  56 */ [55,57,69,74],
    /*  57 */ [56,58,70,75],
    /*  58 */ [57,59],
    /*  59 */ [58,60,71],
    /*  60 */ [59,61],
    /*  61 */ [30,60,62,76],
    /*  62 */ [61,63,72,77],
    /*  63 */ [62,78,79],
    /*  64 */ [47,48],
    /*  65 */ [49,48],
    /*  66 */ [50],
    /*  67 */ [54],
    /*  68 */ [55],
    /*  69 */ [56],
    /*  70 */ [57],
    /*  71 */ [59],
    /*  72 */ [62],
    /*  73 */ [55,80],
    /*  74 */ [56,80],
    /*  75 */ [57],
    /*  76 */ [61],
    /*  77 */ [62],
    /*  78 */ [63],
    /*  79 */ [63],
    /*  80 */ [73,74],
    /*  81 */ [27,82],
    /*  82 */ [81,83],
    /*  83 */ [82,309],
    /*  84 */ [46,85,87],
    /*  85 */ [84,86],
    /*  86 */ [85,138],
    /*  87 */ [84,88],
    /*  88 */ [87,89,201],
    /*  89 */ [88,90,139],
    /*  90 */ [89,91],
    /*  91 */ [90,92,140],
    /*  92 */ [91,93,141],
    /*  93 */ [92,94],
    /*  94 */ [93,95,142],
    /*  95 */ [94,96,143,144],
    /*  96 */ [95,97,145,146],
    /*  97 */ [96,98,147,148],
    /*  98 */ [97,99,149,150],
    /*  99 */ [98,100,151,152],
    /* 100 */ [99,101,153,154],
    /* 101 */ [100,102,155,156],
    /* 102 */ [101,103,157,158],
    /* 103 */ [102,104],
    /* 104 */ [103,105,159],
    /* 105 */ [104,106,160],
    /* 106 */ [105,107,161],
    /* 107 */ [106,108,162],
    /* 108 */ [107,109,163,164],
    /* 109 */ [108,110,165,166],
    /* 110 */ [109,111,167,168],
    /* 111 */ [110,112,169,170],
    /* 112 */ [111,113,171,172],
    /* 113 */ [112,114,173,174],
    /* 114 */ [113,115,175],
    /* 115 */ [114,116,176],
    /* 116 */ [115,117,203],
    /* 117 */ [116,118,177],
    /* 118 */ [117,120],
    /* 119 */ [120,178],
    /* 120 */ [118,119,121],
    /* 121 */ [120,122,179],
    /* 122 */ [121,123,180],
    /* 123 */ [122,124,181],
    /* 124 */ [123,125,182,183],
    /* 125 */ [124,126,186,187],
    /* 126 */ [125,127,184,185],
    /* 127 */ [126,128,188],
    /* 128 */ [127,129,190,189],
    /* 129 */ [128,130,191,192],
    /* 130 */ [129,131,193,194],
    /* 131 */ [130,133],
    /* 132 */ [133,134,195],
    /* 133 */ [131,132,196],
    /* 134 */ [132,135],
    /* 135 */ [134,197],
    /* 136 */ [135,137,198,199],
    /* 137 */ [136,138,200],
    /* 138 */ [86,137],
    /* 139 */ [89],
    /* 140 */ [91],
    /* 141 */ [92],
    /* 142 */ [94],
    /* 143 */ [95],
    /* 144 */ [95],
    /* 145 */ [96],
    /* 146 */ [96],
    /* 147 */ [97],
    /* 148 */ [97],
    /* 149 */ [98],
    /* 150 */ [98],
    /* 151 */ [99],
    /* 152 */ [99],
    /* 153 */ [100],
    /* 154 */ [100],
    /* 155 */ [101],
    /* 156 */ [101],
    /* 157 */ [102],
    /* 158 */ [102],
    /* 159 */ [104],
    /* 160 */ [105],
    /* 161 */ [106],
    /* 162 */ [107],
    /* 163 */ [108],
    /* 164 */ [108],
    /* 165 */ [109],
    /* 166 */ [109],
    /* 167 */ [110],
    /* 168 */ [110],
    /* 169 */ [111],
    /* 170 */ [111],
    /* 171 */ [112],
    /* 172 */ [112],
    /* 173 */ [113],
    /* 174 */ [113],
    /* 175 */ [114],
    /* 176 */ [115],
    /* 177 */ [117],
    /* 178 */ [119],
    /* 179 */ [121],
    /* 180 */ [122],
    /* 181 */ [123],
    /* 182 */ [124],
    /* 183 */ [124],
    /* 184 */ [126],
    /* 185 */ [126],
    /* 186 */ [125],
    /* 187 */ [125],
    /* 188 */ [127],
    /* 189 */ [128],
    /* 190 */ [128],
    /* 191 */ [129],
    /* 192 */ [129],
    /* 193 */ [130],
    /* 194 */ [130],
    /* 195 */ [132],
    /* 196 */ [133],
    /* 197 */ [135],
    /* 198 */ [136],
    /* 199 */ [136],
    /* 200 */ [137],
    /* 201 */ [88,202],
    /* 202 */ [38,39,201],
    /* 203 */ [42,116],
    /* 204 */ [1,3],
    /* 205 */ [206,253],
	/* 206 */ [205,207,307],
	/* 207 */ [206,209,254],
	/* 208 */ [209,256],
	/* 209 */ [207,208,210],
	/* 210 */ [209,211,255],
	/* 211 */ [210,212,257],
	/* 212 */ [211,213,258],
	/* 213 */ [212,214],
	/* 214 */ [213,215],
	/* 215 */ [214,216],
	/* 216 */ [215,217,259],
	/* 217 */ [216,218],
	/* 218 */ [217,219,260,261],
	/* 219 */ [217,218,262,263],
	/* 220 */ [219,221,264,265],
	/* 221 */ [220,222,266,267],
	/* 222 */ [221,223,268,269],
	/* 223 */ [222,224,270],
	/* 224 */ [223,225,271],
	/* 225 */ [224,226,301],
	/* 226 */ [225,228],
	/* 227 */ [228,272],
	/* 228 */ [226,227,229],
	/* 229 */ [228,230,273],
	/* 230 */ [229,231,274],
	/* 231 */ [230,232,275],
	/* 232 */ [231,233,276,277],
	/* 233 */ [232,234,278,279],
	/* 234 */ [233,235,282,283],
	/* 235 */ [234,236,280,281],
	/* 236 */ [235,237,284],
	/* 237 */ [236,238,285,286],
	/* 238 */ [237,239,287,288],
	/* 239 */ [238,240,289,290],
	/* 240 */ [239,242],
	/* 241 */ [242,243,291],
	/* 242 */ [240,241,292],
	/* 243 */ [241,244],
	/* 244 */ [243,245,293],
	/* 245 */ [244,246,294],
	/* 246 */ [245,247,296,297],
	/* 247 */ [246,248,298],
	/* 248 */ [247,249,299,300],
	/* 249 */ [248,250,302],
	/* 250 */ [249,251],
	/* 251 */ [250,252,304],
	/* 252 */ [251,253,305,310],
	/* 253 */ [205,252,306,311],
	/* 254 */ [207],
	/* 255 */ [210],
	/* 256 */ [208],
	/* 257 */ [211],
	/* 258 */ [258],
	/* 259 */ [216],
	/* 260 */ [218],
	/* 261 */ [218],
	/* 262 */ [219],
	/* 263 */ [219],
	/* 264 */ [220],
	/* 265 */ [220],
	/* 266 */ [221],
	/* 267 */ [221],
	/* 268 */ [222],
	/* 269 */ [222],
	/* 270 */ [223],
	/* 271 */ [224],
	/* 272 */ [227],
	/* 273 */ [229],
	/* 274 */ [230],
	/* 275 */ [231],
	/* 276 */ [232],
	/* 277 */ [232],
	/* 278 */ [233],
	/* 279 */ [233],
	/* 280 */ [235],
	/* 281 */ [235],
	/* 282 */ [234],
	/* 283 */ [234],
	/* 284 */ [236],
	/* 285 */ [237],
	/* 286 */ [237],
	/* 287 */ [238],
	/* 288 */ [238],
	/* 289 */ [239],
	/* 290 */ [239],
	/* 291 */ [241],
	/* 292 */ [242],
	/* 293 */ [244],
	/* 294 */ [245],
	/* 295 */ [45,301],
	/* 296 */ [246],
	/* 297 */ [246],
	/* 298 */ [247],
	/* 299 */ [248],
	/* 300 */ [248],
	/* 301 */ [225,295],
	/* 302 */ [249],
	/* 303 */ [41,307],
	/* 304 */ [251],
	/* 305 */ [252],
	/* 306 */ [253],
	/* 307 */ [206,303],
	/* 308 */ [4,5],
	/* 309 */ [52,83],
	/* 310 */ [252],
	/* 311 */ [253],
    ],
    vertices: [
    /*   0 */ {x:553,y:521,z:1,type:'',queries:[]},
    /*   1 */ {x:553,y:501,z:1,type:'',queries:[]},
    /*   2 */ {x:790,y:132,z:1,type:'',queries:[]},
    /*   3 */ {x:790,y:501,z:1,type:'',queries:[]},
    /*   4 */ {x:790,y:474,z:1,type:'',queries:[]},
    /*   5 */ {x:790,y:409,z:1,type:'',queries:[]},
    /*   6 */ {x:790,y:348,z:1,type:'',queries:[]},
    /*   7 */ {x:790,y:284,z:1,type:'',queries:[]},
    /*   8 */ {x:798,y:244,z:1,type:'',queries:[]},
    /*   9 */ {x:798,y:220,z:1,type:'',queries:[]},
    /*  10 */ {x:798,y:185,z:1,type:'',queries:[]},
    /*  11 */ {x:790,y:168,z:1,type:'',queries:[]},
    /*  12 */ {x:805,y:474,z:1,type:'',queries:["301","Flesschekamer"]},
    /*  13 */ {x:805,y:409,z:1,type:'',queries:["303"]},
    /*  14 */ {x:805,y:348,z:1,type:'',queries:["305"]},
    /*  15 */ {x:805,y:284,z:1,type:'',queries:["307"]},
    /*  16 */ {x:805,y:220,z:1,type:'',queries:["309"]},
    /*  17 */ {x:775,y:409,z:1,type:'',queries:["302","304"]},
    /*  18 */ {x:775,y:348,z:1,type:'',queries:["302","304"]},
    /*  20 */ {x:775,y:168,z:1,type:'',queries:["306","308"]},
    /*  19 */ {x:775,y:284,z:1,type:'',queries:["306","308"]},
    /*  21 */ {x:784,y:101,z:1,type:'',queries:["312"]},
    /*  22 */ {x:796,y:101,z:1,type:'',queries:["313"]},
    /*  23 */ {x:745,y:378,z:1,type:'',queries:[]},
    /*  24 */ {x:745,y:226,z:1,type:'',queries:[]},
    /*  25 */ {x:824,y:509,z:12,type:'interstairs',queries:[]},
    /*  26 */ {x:812,y:509,z:1,type:'stairs',queries:[]},
    /*  27 */ {x:852,y:509,z:12,type:'interstairs',queries:[]},
    /*  28 */ {x:782,y:244,z:1,type:'door',queries:[]},
    /*  29 */ {x:782,y:226,z:12,type:'stairs',queries:[]},
    /*  30 */ {x:782,y:186,z:12,type:'stairs',queries:[]},
    /*  31 */ {x:441,y:501,z:1,type:'',queries:[]},
    /*  32 */ {x:441,y:530,z:1,type:'door',queries:[]},
    /*  33 */ {x:441,y:559,z:1,type:'',queries:[]},
    /*  34 */ {x:430,y:559,z:1,type:'door',queries:[]},
    /*  35 */ {x:422,y:559,z:12,type:'stairs',queries:[]},
    /*  36 */ {x:386,y:559,z:12,type:'interstairs',queries:[]},
    /*  37 */ {x:386,y:547,z:12,type:'interstairs',queries:[]},
    /*  38 */ {x:422,y:547,z:12,type:'interstairs',queries:[]},
    /*  39 */ {x:386,y:559,z:2,type:'interstairs',queries:[]},
    /*  40 */ {x:386,y:547,z:2,type:'interstairs',queries:[]},
    /*  41 */ {x:422,y:547,z:2,type:'interstairs',queries:[]},
    /*  42 */ {x:76,y:310,z:2,type:'stairs',queries:[]},
    /*  43 */ {x:112,y:310,z:23,type:'interstairs',queries:[]},
    /*  44 */ {x:112,y:322,z:23,type:'interstairs',queries:[]},
    /*  45 */ {x:76,y:322,z:23,type:'interstairs',queries:[]},
    /*  46 */ {x:501,y:501,z:2,type:'door',queries:[]},
    /*  47 */ {x:506,y:501,z:2,type:'',queries:[]},
    /*  48 */ {x:572,y:446,z:2,type:'',queries:[]},
    /*  49 */ {x:642,y:501,z:2,type:'',queries:[]},
    /*  50 */ {x:652,y:501,z:2,type:'',queries:[]},
    /*  51 */ {x:714,y:501,z:2,type:'door',queries:[]},
    /*  52 */ {x:790,y:501,z:2,type:'',queries:[]},
    /*  53 */ {x:790,y:468,z:2,type:'door',queries:[]},
    /*  54 */ {x:790,y:474,z:2,type:'',queries:[]},
    /*  55 */ {x:790,y:409,z:2,type:'',queries:[]},
    /*  56 */ {x:790,y:348,z:2,type:'',queries:[]},
    /*  57 */ {x:790,y:284,z:2,type:'',queries:[]},
    /*  58 */ {x:798,y:244,z:2,type:'',queries:[]},
    /*  59 */ {x:798,y:220,z:2,type:'',queries:[]},
    /*  60 */ {x:798,y:185,z:2,type:'',queries:[]},
    /*  61 */ {x:790,y:168,z:2,type:'',queries:[]},
    /*  62 */ {x:790,y:157,z:2,type:'',queries:[]},
    /*  63 */ {x:790,y:115,z:2,type:'',queries:[]},
    /*  64 */ {x:506,y:482,z:2,type:'',queries:["174"]},
    /*  65 */ {x:642,y:482,z:2,type:'',queries:["174"]},
    /*  66 */ {x:652,y:482,z:2,type:'',queries:["176"]},
    /*  67 */ {x:805,y:474,z:2,type:'',queries:["401"]},
    /*  68 */ {x:805,y:409,z:2,type:'',queries:["403"]},
    /*  69 */ {x:805,y:348,z:2,type:'',queries:["405"]},
    /*  70 */ {x:805,y:284,z:2,type:'',queries:["407"]},
    /*  71 */ {x:805,y:220,z:2,type:'',queries:["409"]},
    /*  72 */ {x:805,y:157,z:2,type:'',queries:["411"]},
    /*  73 */ {x:775,y:409,z:2,type:'',queries:["402"]},
    /*  74 */ {x:775,y:348,z:2,type:'',queries:["404"]},
    /*  75 */ {x:775,y:284,z:2,type:'',queries:["406"]},
    /*  76 */ {x:775,y:168,z:2,type:'',queries:["408"]},
    /*  77 */ {x:775,y:157,z:2,type:'',queries:["410"]},
    /*  78 */ {x:784,y:101,z:2,type:'',queries:["412"]},
    /*  79 */ {x:796,y:101,z:2,type:'',queries:["413"]},
    /*  80 */ {x:745,y:378,z:2,type:'',queries:[]},
    /*  81 */ {x:859,y:509,z:12,type:'interstairs',queries:[]},
    /*  82 */ {x:859,y:491,z:2,type:'interstairs',queries:[]},
    /*  83 */ {x:835,y:491,z:2,type:'stairs',queries:[]},
    /*  84 */ {x:441,y:501,z:2,type:'',queries:[]},
    /*  85 */ {x:441,y:410,z:2,type:'',queries:[]},
    /*  86 */ {x:441,y:320,z:2,type:'',queries:[]},
    /*  87 */ {x:441,y:530,z:2,type:'door',queries:[]},
    /*  88 */ {x:441,y:559,z:2,type:'',queries:[]},
    /*  89 */ {x:441,y:575,z:2,type:'',queries:[]},
    /*  90 */ {x:441,y:625,z:2,type:'',queries:[]},
    /*  91 */ {x:436,y:625,z:2,type:'',queries:[]},
    /*  92 */ {x:404,y:625,z:2,type:'',queries:[]},
    /*  93 */ {x:399,y:625,z:2,type:'door',queries:[]},
    /*  94 */ {x:395,y:625,z:2,type:'',queries:[]},
    /*  95 */ {x:342,y:625,z:2,type:'',queries:[]},
    /*  96 */ {x:333,y:625,z:2,type:'',queries:[]},
    /*  97 */ {x:279,y:625,z:2,type:'',queries:[]},
    /*  98 */ {x:269,y:625,z:2,type:'',queries:[]},
    /*  99 */ {x:216,y:625,z:2,type:'',queries:[]},
    /* 100 */ {x:206,y:625,z:2,type:'',queries:[]},
    /* 101 */ {x:153,y:625,z:2,type:'',queries:[]},
    /* 102 */ {x:143,y:625,z:2,type:'',queries:[]},
    /* 103 */ {x:116,y:625,z:2,type:'door',queries:[]},
    /* 104 */ {x:88,y:625,z:2,type:'',queries:[]},
    /* 105 */ {x:79,y:625,z:2,type:'',queries:[]},
    /* 106 */ {x:60,y:625,z:2,type:'',queries:[]},
    /* 107 */ {x:60,y:590,z:2,type:'',queries:[]},
    /* 108 */ {x:60,y:525,z:2,type:'',queries:[]},
    /* 109 */ {x:60,y:516,z:2,type:'',queries:[]},
    /* 110 */ {x:60,y:462,z:2,type:'',queries:[]},
    /* 111 */ {x:60,y:452,z:2,type:'',queries:[]},
    /* 112 */ {x:60,y:398,z:2,type:'',queries:[]},
    /* 113 */ {x:60,y:389,z:2,type:'',queries:[]},
    /* 114 */ {x:60,y:336,z:2,type:'',queries:[]},
    /* 115 */ {x:60,y:326,z:2,type:'',queries:[]},
    /* 116 */ {x:60,y:310,z:2,type:'',queries:[]},
    /* 117 */ {x:60,y:293,z:2,type:'',queries:[]},
    /* 118 */ {x:60,y:266,z:2,type:'door',queries:[]},
    /* 119 */ {x:60,y:240,z:2,type:'',queries:[]},
    /* 120 */ {x:60,y:243,z:2,type:'',queries:[]},
    /* 121 */ {x:96,y:243,z:2,type:'',queries:[]},
    /* 122 */ {x:105,y:243,z:2,type:'',queries:[]},
    /* 123 */ {x:159,y:243,z:2,type:'',queries:[]},
    /* 124 */ {x:169,y:243,z:2,type:'',queries:[]},
    /* 125 */ {x:222,y:243,z:2,type:'',queries:[]},
    /* 126 */ {x:231,y:243,z:2,type:'',queries:[]},
    /* 127 */ {x:285,y:243,z:2,type:'',queries:[]},
    /* 128 */ {x:294,y:243,z:2,type:'',queries:[]},
    /* 129 */ {x:348,y:243,z:2,type:'',queries:[]},
    /* 130 */ {x:358,y:243,z:2,type:'',queries:[]},
    /* 131 */ {x:385,y:243,z:2,type:'door',queries:[]},
    /* 132 */ {x:424,y:243,z:2,type:'',queries:[]},
    /* 133 */ {x:414,y:243,z:2,type:'',queries:[]},
    /* 134 */ {x:441,y:243,z:2,type:'',queries:[]},
    /* 135 */ {x:441,y:247,z:2,type:'',queries:[]},
    /* 136 */ {x:441,y:277,z:2,type:'',queries:[]},
    /* 137 */ {x:441,y:287,z:2,type:'',queries:[]},
    /* 138 */ {x:441,y:307,z:2,type:'door',queries:[]},
    /* 139 */ {x:453,y:575,z:2,type:'',queries:["169"]},
    /* 140 */ {x:436,y:636,z:2,type:'',queries:["167"]},
    /* 141 */ {x:404,y:636,z:2,type:'',queries:[]},
    /* 142 */ {x:395,y:636,z:2,type:'',queries:["164","Duc Nguyen","Anna Kononova"]},
    /* 143 */ {x:342,y:636,z:2,type:'',queries:["161","Michael Emmerich","Andre Deutz"]},
    /* 144 */ {x:342,y:614,z:2,type:'',queries:["163","Thomas Bäck"]},
    /* 145 */ {x:333,y:636,z:2,type:'',queries:["160","Alfons Laarman"]},
    /* 146 */ {x:333,y:614,z:2,type:'',queries:["162","Hendrik Jan Hoogeboom","Henning Basold"]},
    /* 147 */ {x:279,y:636,z:2,type:'',queries:["157b","Frank Takes"]},
    /* 148 */ {x:279,y:614,z:2,type:'',queries:["159","Walter Kosters"]},
    /* 149 */ {x:269,y:636,z:2,type:'',queries:["157a","Marcello Bonsangue"]},
    /* 150 */ {x:269,y:614,z:2,type:'',queries:["158","Aske Plaat"]},
    /* 151 */ {x:216,y:636,z:2,type:'',queries:["155","Abdel El Boujadayni"]},
    /* 152 */ {x:216,y:614,z:2,type:'',queries:["156a"]},
    /* 153 */ {x:206,y:636,z:2,type:'',queries:["154","Eline Huisjes"]},
    /* 154 */ {x:206,y:614,z:2,type:'',queries:["156","Caroline de Bruin"]},
    /* 155 */ {x:153,y:636,z:2,type:'',queries:["151","Jeanette de Graaf","Pieter Kwantes"]},
    /* 156 */ {x:153,y:614,z:2,type:'',queries:["153","Jetty Kleijn","Grzegorz Rozenberg"]},
    /* 157 */ {x:143,y:636,z:2,type:'',queries:["150","Mischa Hautvast","Jayshri Murli","Hestia Tamboer"]},
    /* 158 */ {x:143,y:614,z:2,type:'',queries:["152","Bas van Stein","Hao Wang","Yali Wang"]},
    /* 159 */ {x:88,y:636,z:2,type:'',queries:["148","Matthijs van Leeuwen"]},
    /* 160 */ {x:79,y:636,z:2,type:'',queries:["147","Suzan Verberne","Roos van der Voordt","Iris Yocarini"]},
    /* 161 */ {x:49,y:625,z:2,type:'',queries:["145a","Erqian Tang","Hongchang Shan","Peng Wang","Sobhan Niknam","Svetlana Mikanova"]},
    /* 162 */ {x:49,y:590,z:2,type:'',queries:["145","Todor Stefanov"]},
    /* 163 */ {x:49,y:525,z:2,type:'',queries:["142","M. Konig","S. Marshall","Zhao Yong","Wenjing Chu","Xueqin Chia","Lincen Yang","Serban Vadinesna"]},
    /* 164 */ {x:70,y:525,z:2,type:'',queries:["144","Service Room"]},
    /* 165 */ {x:49,y:516,z:2,type:'',queries:[]},
    /* 166 */ {x:70,y:516,z:2,type:'',queries:["143","Anna van der Meulen","Fenia Aivaloglou","Sabiha Yeni"]},
    /* 167 */ {x:49,y:462,z:2,type:'',queries:["138","Alex Uta"]},
    /* 168 */ {x:70,y:462,z:2,type:'',queries:["140","Rudy van Vliet","Jan van Rijn"]},
    /* 169 */ {x:49,y:452,z:2,type:'',queries:["137","Harry Wijshoff"]},
    /* 170 */ {x:70,y:452,z:2,type:'',queries:["139","Vian Govers"]},
    /* 171 */ {x:49,y:398,z:2,type:'',queries:["134","Michael Lew"]},
    /* 172 */ {x:70,y:398,z:2,type:'',queries:["136","Guus Ramackers","Christian Fuch","Pieter Kwantes"]},
    /* 173 */ {x:49,y:389,z:2,type:'',queries:["133","Juriaan Bakx","Arno Knobbe"]},
    /* 174 */ {x:70,y:389,z:2,type:'',queries:["135","Felix Wittleben","Doron Gollnast","Chris Flinterman"]},
    /* 175 */ {x:49,y:336,z:2,type:'',queries:["132","Joost Broekens"]},
    /* 176 */ {x:49,y:326,z:2,type:'',queries:["131","Daan Pelt"]},
    /* 177 */ {x:49,y:293,z:2,type:'',queries:["128","Max van Duijn","Tessa Verhoef","Peter van der Putten"]},
    /* 178 */ {x:49,y:240,z:2,type:'',queries:["126","126a","Anne Dirkson","António Pereira Barata","Daniela Gawehns","Gerrit-Jan de Bruin","Yuchen Lian","Xue Wang","Erwin Bakker","Catholijn Jonker"]},
    /* 179 */ {x:96,y:233,z:2,type:'',queries:["124","Holger Hoos"]},
    /* 180 */ {x:105,y:233,z:2,type:'',queries:["123","Anna Latour","Can Wang","Zhou Zhou"]},
    /* 181 */ {x:159,y:233,z:2,type:'',queries:["120","Esme Caubo","José Visser"]},
    /* 182 */ {x:169,y:233,z:2,type:'',queries:["119","Vedran Dunjko","Mathys Rennela"]},
    /* 183 */ {x:169,y:254,z:2,type:'',queries:[]},
    /* 184 */ {x:231,y:233,z:2,type:'',queries:["115","Lise Stork","Danyi Liu","Leon Helwerda","Irene Martorelli","Yi Chen	Miriam Basajja"]},
    /* 185 */ {x:231,y:254,z:2,type:'',queries:["117","Wojtek Kowalczyk","Cor Veenman"]},
    /* 186 */ {x:222,y:233,z:2,type:'',queries:["116","Mitra Baratchi","Mike Preuss"]},
    /* 187 */ {x:222,y:254,z:2,type:'',queries:["118","York-Kam Kwok","Loes van der Hulst-Scheffer","Merel van der Weide"]},
    /* 188 */ {x:285,y:254,z:2,type:'',queries:["114","Marloes van der Nat","Barbara Visscher-van Grinsven"]},
    /* 189 */ {x:294,y:233,z:2,type:'',queries:["111","Katy Wolstencroft"]},
    /* 190 */ {x:294,y:254,z:2,type:'',queries:["113","Joost Visser"]},
    /* 191 */ {x:348,y:233,z:2,type:'',queries:["108","Sascha Goultiaev","Lu Cao"]},
    /* 192 */ {x:348,y:254,z:2,type:'',queries:["110","Riet Derogee","Merel van der Weide"]},
    /* 193 */ {x:358,y:233,z:2,type:'',queries:["107","Mehrdad Jahanbanifard","Rohola Hosseini","Shima Javanmardi"]},
    /* 194 */ {x:358,y:254,z:2,type:'',queries:[]},
    /* 195 */ {x:424,y:233,z:2,type:'',queries:["105","Fons Verbeek"]},
    /* 196 */ {x:414,y:233,z:2,type:'',queries:["106","Feibo Duan","Chen Li","Erwin van Soest"]},
    /* 197 */ {x:453,y:247,z:2,type:'',queries:["104","Felienne Hermans"]},
    /* 198 */ {x:453,y:277,z:2,type:'',queries:["102","Anna van der Meulen","Sabiha Yeni"]},
    /* 199 */ {x:428,y:277,z:2,type:'',queries:["103","Flex Room"]},
    /* 200 */ {x:453,y:287,z:2,type:'',queries:[]},
    /* 201 */ {x:430,y:559,z:2,type:'door',queries:[]},
    /* 202 */ {x:422,y:559,z:2,type:'stairs',queries:[]},
    /* 203 */ {x:69,y:310,z:2,type:'door',queries:[]},
    /* 204 */ {x:714,y:501,z:1,type:'door',queries:[]},
	/* 205 */ {x:441,y:530,z:3,type:'door',queries:[]},
	/* 206 */ {x:441,y:559,z:3,type:'',queries:[]},
	/* 207 */ {x:441,y:564,z:3,type:'',queries:[]},
	/* 208 */ {x:441,y:630,z:3,type:'',queries:[]},
	/* 209 */ {x:441,y:625,z:3,type:'',queries:[]},
	/* 210 */ {x:436,y:625,z:3,type:'',queries:[]},
	/* 211 */ {x:404,y:625,z:3,type:'',queries:[]},
	/* 212 */ {x:364,y:625,z:3,type:'',queries:[]},
	/* 213 */ {x:342,y:625,z:3,type:'door',queries:[]},
	/* 214 */ {x:288,y:625,z:3,type:'',queries:[]},
	/* 215 */ {x:288,y:591,z:3,type:'',queries:[]},
	/* 216 */ {x:60,y:591,z:3,type:'',queries:[]},
	/* 217 */ {x:60,y:553,z:3,type:'door',queries:[]},
	/* 218 */ {x:60,y:525,z:3,type:'',queries:[]},
	/* 219 */ {x:60,y:516,z:3,type:'',queries:[]},
	/* 220 */ {x:60,y:462,z:3,type:'',queries:[]},
	/* 221 */ {x:60,y:452,z:3,type:'',queries:[]},
	/* 222 */ {x:60,y:389,z:3,type:'',queries:[]},
	/* 223 */ {x:60,y:336,z:3,type:'',queries:[]},
	/* 224 */ {x:60,y:326,z:3,type:'',queries:[]},
	/* 225 */ {x:60,y:310,z:3,type:'',queries:[]},
	/* 226 */ {x:60,y:266,z:3,type:'door',queries:[]},
	/* 227 */ {x:60,y:240,z:3,type:'',queries:[]},
	/* 228 */ {x:60,y:243,z:3,type:'',queries:[]},
	/* 229 */ {x:63,y:243,z:3,type:'',queries:[]},
	/* 230 */ {x:96,y:243,z:3,type:'',queries:[]},
	/* 231 */ {x:105,y:243,z:3,type:'',queries:[]},
	/* 232 */ {x:159,y:243,z:3,type:'',queries:[]},
	/* 233 */ {x:169,y:243,z:3,type:'',queries:[]},
	/* 234 */ {x:222,y:243,z:3,type:'',queries:[]},
	/* 235 */ {x:231,y:243,z:3,type:'',queries:[]},
	/* 236 */ {x:285,y:243,z:3,type:'',queries:[]},
	/* 237 */ {x:294,y:243,z:3,type:'',queries:[]},
	/* 238 */ {x:348,y:243,z:3,type:'',queries:[]},
	/* 239 */ {x:358,y:243,z:3,type:'',queries:[]},
	/* 240 */ {x:385,y:243,z:3,type:'door',queries:[]},
	/* 241 */ {x:424,y:243,z:3,type:'',queries:[]},
	/* 242 */ {x:414,y:243,z:3,type:'',queries:[]},
	/* 243 */ {x:441,y:243,z:3,type:'',queries:[]},
	/* 244 */ {x:441,y:247,z:3,type:'',queries:[]},
	/* 245 */ {x:441,y:257,z:3,type:'',queries:[]},
	/* 246 */ {x:441,y:310,z:3,type:'',queries:[]},
	/* 247 */ {x:441,y:319,z:3,type:'',queries:[]},
	/* 248 */ {x:441,y:374,z:3,type:'',queries:[]},
	/* 249 */ {x:441,y:385,z:3,type:'',queries:[]},
	/* 250 */ {x:441,y:391,z:3,type:'door',queries:[]},
	/* 251 */ {x:441,y:400,z:3,type:'',queries:[]},
	/* 252 */ {x:441,y:439,z:3,type:'',queries:[]},
	/* 253 */ {x:441,y:447,z:3,type:'',queries:[]},
	/* 254 */ {x:451,y:564,z:3,type:'',queries:["206","206a","206a2","Vivi Rottschäfer","Bente Bakker","Mia Jukic","Rik Westdorp","Private Room"]},
	/* 255 */ {x:436,y:636,z:3,type:'',queries:["204","Hermen Jan Hupkes"]},
	/* 256 */ {x:452,y:630,z:3,type:'',queries:["204a","Arjen Doelman"]},
	/* 257 */ {x:404,y:636,z:3,type:'',queries:["202","Mark van den Bosch","Poulami Ganguly","Olfa Jaïbi","David Kok","Daphne Nesenberend","Lars van Vianen"]},
	/* 258 */ {x:364,y:614,z:3,type:'',queries:[]},
	/* 259 */ {x:49,y:591,z:3,type:'',queries:["Silent Room"]},
	/* 260 */ {x:49,y:525,z:3,type:'',queries:["252","Martin Bright","Jan Vonk"]},
	/* 261 */ {x:70,y:525,z:3,type:'',queries:["233","David Holmes"]},
	/* 262 */ {x:49,y:516,z:3,type:'',queries:["250","Ronald van Luijk"]},
	/* 263 */ {x:70,y:516,z:3,type:'',queries:["231","Hendrik Lenstra"]},
	/* 264 */ {x:49,y:462,z:3,type:'',queries:["248","Jan-Hendrik Evertse"]},
	/* 265 */ {x:70,y:462,z:3,type:'',queries:["229","Peter Bruin","Marco Streng"]},
	/* 266 */ {x:49,y:452,z:3,type:'',queries:["246b","Meeting Room"]},
	/* 267 */ {x:70,y:452,z:3,type:'',queries:["227","Marc Houben","Rosa Schwartz","Sebastiano Tronto","Ruihua Wang"]},
	/* 268 */ {x:49,y:389,z:3,type:'',queries:["244","Marta Fiocco"]},
	/* 269 */ {x:70,y:389,z:3,type:'',queries:["225","Lawrence Barrot","Kees Boot","Remy van Dobben de Bruyn","Amine Hadji","Stefan van der Lugt","Adrien Sauvaget","Misja Steinmetz","Aline Zanadini"]},
	/* 270 */ {x:49,y:336,z:3,type:'',queries:["242","Onno Berrevoets","Daan van Gent","Pim Spelier","Jesse Vogel"]},
	/* 271 */ {x:49,y:326,z:3,type:'',queries:["245",]},
	/* 272 */ {x:49,y:240,z:3,type:'',queries:["238","238a","Marton Hablicsek","Bram Mesland","Bas Edixhoven"]},
	/* 273 */ {x:63,y:233,z:3,type:'',queries:["236","Vera Arntzen","Bart Eggen","Daniel Gomon","Mate Kormos","G.J. Koers","Maria Quelhas","M. Spreafico","Tyron Lardi","L. Vuursteen"]},
	/* 274 */ {x:96,y:233,z:3,type:'',queries:["234","Algant"]},
	/* 275 */ {x:105,y:233,z:3,type:'',queries:["232a","Johannes Schmidt-Hiebe"]},
	/* 276 */ {x:159,y:233,z:3,type:'',queries:["232","Frans de Haas"]},
	/* 277 */ {x:159,y:254,z:3,type:'',queries:["223","Chen Dalpeng","Javier Silva","Koen Keijzer","Martijn de Jong"]},
	/* 278 */ {x:169,y:233,z:3,type:'',queries:["230","Segre Fehr","Eder Kikianty","Jan Harm van der Walt","Miek Messerschmidt","Walt van Amstel"]},
	/* 279 */ {x:169,y:254,z:3,type:'',queries:["221","Valentina Masarotto","Mirko Signorelli"]},
	/* 280 */ {x:231,y:233,z:3,type:'',queries:["228","226","Floske Spieksma","Rajat Hazra","Odysseas Kanavetas"]},
	/* 281 */ {x:231,y:254,z:3,type:'',queries:["217","Mark van den Bergh","Dylan Gonzalez Arroyo","Oliver Nagy","Ekaterina Kosarevskaya"]},
	/* 282 */ {x:222,y:233,z:3,type:'',queries:["230a","Y.C. Chung","Q. Peng","E. Tsingos"]},
	/* 283 */ {x:222,y:254,z:3,type:'',queries:["219","Emeriti"]},
	/* 284 */ {x:285,y:254,z:3,type:'',queries:["215","Elena Sellentin","Thijs Bos"]},
	/* 285 */ {x:294,y:233,z:3,type:'',queries:["224a","Bogdan Luchian","Frederico Capannoli","Mirmukhsin Makhmudov","Nandan Malhotra"]},
	/* 286 */ {x:294,y:254,z:3,type:'',queries:["213","Garnet Akeyr"]},
	/* 287 */ {x:348,y:233,z:3,type:'',queries:["224"]},
	/* 288 */ {x:348,y:254,z:3,type:'',queries:["211","Chun Ding","Jack Thelin af Ekenstam","Yufan Ge","Yuezhao Li","Mayke Schouten-Straatman"]},
	/* 289 */ {x:358,y:233,z:3,type:'',queries:["222","Onno van Gaans"]},
	/* 290 */ {x:358,y:254,z:3,type:'',queries:["209","Rangel Baldasso","Yiftach Dayan","Matteo Quattropiani","Fanni Sélley"]},
	/* 291 */ {x:424,y:233,z:3,type:'',queries:["218","Marcel de Jeu"]},
	/* 292 */ {x:414,y:233,z:3,type:'',queries:["220","Sander Hille","Mark Roelands"]},
	/* 293 */ {x:453,y:247,z:3,type:'',queries:["216","Pierfrancesco Dionigi","Jonny Imbierski","Twan Koperberg","Shubhamony Nandan","Daoyi Wang","Benthen Zeegers"]},
	/* 294 */ {x:453,y:257,z:3,type:'',queries:["214","Evgeny Verbitskiy"]},
	/* 295 */ {x:76,y:310,z:3,type:'stairs',queries:[]},
	/* 296 */ {x:453,y:310,z:3,type:'',queries:["212","Charlene Kalle"]},
	/* 297 */ {x:427,y:310,z:3,type:'',queries:["207","Student-assistenten"]},
	/* 298 */ {x:453,y:319,z:3,type:'',queries:["210","Frank den Hollander"]},
	/* 299 */ {x:453,y:374,z:3,type:'',queries:["208","Luca Avena","Dalia Terhesiu"]},
	/* 300 */ {x:427,y:374,z:3,type:'',queries:["205","Fencesca Arici","Frits Veerman"]},
	/* 301 */ {x:69,y:310,z:3,type:'door',queries:[]},
	/* 302 */ {x:427,y:385,z:3,type:'',queries:["203c","Roeland Merks"]},
	/* 303 */ {x:422,y:559,z:3,type:'stairs',queries:[]},
	/* 304 */ {x:451,y:400,z:3,type:'',queries:["206d","Martina Chirilus-Bruckner"]},
	/* 305 */ {x:453,y:439,z:3,type:'',queries:["206c","Laura van Kempen	Michelle Krens"]},
	/* 306 */ {x:453,y:447,z:3,type:'',queries:["206b","Mieke Schutte"]},
	/* 307 */ {x:430,y:559,z:3,type:'door',queries:[]},
	/* 308 */ {x:790,y:469,z:1,type:'door',queries:[]},
	/* 309 */ {x:824,y:491,z:2,type:'door',queries:[]},
	/* 310 */ {x:427,y:439,z:3,type:'',queries:["302b"]},
	/* 311 */ {x:427,y:447,z:3,type:'',queries:["203a","Marianne van Batenburg","Hanneke Langeveld"]},
    ]
}