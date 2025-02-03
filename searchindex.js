Search.setIndex({"alltitles": {"1. Generate synthetic data": [[12, "1.-Generate-synthetic-data"]], "1. Reading the MSA file": [[1, "1.-Reading-the-MSA-file"], [2, "1.-Reading-the-MSA-file"]], "1. Variables and data types": [[14, "1.-Variables-and-data-types"]], "2. Control flow": [[14, "2.-Control-flow"]], "2. Fit the linear model": [[12, "2.-Fit-the-linear-model"]], "2. Processing the MSA": [[1, "2.-Processing-the-MSA"], [2, "2.-Processing-the-MSA"]], "3 Calculating Shannon Entropy": [[1, "3-Calculating-Shannon-Entropy"], [2, "3-Calculating-Shannon-Entropy"]], "3. Functions": [[14, "3.-Functions"]], "4. Classes and objects": [[14, "4.-Classes-and-objects"]], "5. Modules and packages": [[14, "5.-Modules-and-packages"]], "Assignment 1: Python Basics": [[2, null]], "Chem 193: (ML \\cup MD) \\cap Biophysics": [[6, null]], "Collection types": [[14, "Collection-types"]], "Conditional statements": [[14, "Conditional-statements"]], "Define the loss function for softmax regression": [[3, "Define-the-loss-function-for-softmax-regression"], [4, "Define-the-loss-function-for-softmax-regression"]], "Dictionaries": [[14, "Dictionaries"]], "Gradient descent": [[12, "Gradient-descent"]], "High Performance Computing": [[10, null]], "Homeworks": [[5, null]], "Lecture Slides": [[7, null]], "Linear Algebra": [[0, null]], "Linear Regression": [[12, null]], "List": [[14, "List"]], "Log in to Expanse": [[10, "log-in-to-expanse"]], "Loops": [[14, "Loops"]], "Make predictions and compute the accuracy on the training data": [[3, "Make-predictions-and-compute-the-accuracy-on-the-training-data"], [4, "Make-predictions-and-compute-the-accuracy-on-the-training-data"]], "Make predictions on the test data": [[3, "Make-predictions-on-the-test-data"], [4, "Make-predictions-on-the-test-data"]], "Model": [[3, "Model"], [4, "Model"]], "Model interpretation": [[4, "Model-interpretation"]], "Numpy & JAX": [[13, null]], "Predict protein secondary structure": [[3, null], [4, null]], "Process the training data": [[3, "Process-the-training-data"], [4, "Process-the-training-data"]], "Processing protein multiple sequence alignments": [[1, null]], "Python Basics": [[14, null]], "Scalar types and string type": [[14, "Scalar-types-and-string-type"]], "Schedule": [[8, null]], "Set": [[14, "Set"]], "Submission instructions": [[4, "Submission-instructions"]], "Syllabus": [[9, null]], "Train the model": [[3, "Train-the-model"], [4, "Train-the-model"]], "Tuple": [[14, "Tuple"]], "Tutorials": [[11, null]]}, "docnames": ["homework/0-linear-algebra", "homework/1-python-basics/main", "homework/1-python-basics/solutions", "homework/2-protein-secondary-structure/script/homework_with_solutions", "homework/2-protein-secondary-structure/script/main", "homework/index", "index", "lecture", "schedule", "syllabus", "tutorial/hpc", "tutorial/index", "tutorial/linear-regression", "tutorial/numpy-jax", "tutorial/python-basics"], "envversion": {"nbsphinx": 4, "sphinx": 64, "sphinx.domains.c": 3, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 9, "sphinx.domains.index": 1, "sphinx.domains.javascript": 3, "sphinx.domains.math": 2, "sphinx.domains.python": 4, "sphinx.domains.rst": 2, "sphinx.domains.std": 2}, "filenames": ["homework/0-linear-algebra.rst", "homework/1-python-basics/main.ipynb", "homework/1-python-basics/solutions.ipynb", "homework/2-protein-secondary-structure/script/homework_with_solutions.ipynb", "homework/2-protein-secondary-structure/script/main.ipynb", "homework/index.rst", "index.rst", "lecture.rst", "schedule.rst", "syllabus.rst", "tutorial/hpc.rst", "tutorial/index.rst", "tutorial/linear-regression.ipynb", "tutorial/numpy-jax.rst", "tutorial/python-basics.ipynb"], "indexentries": {}, "objects": {}, "objnames": {}, "objtypes": {}, "terms": {"": [2, 3, 4, 14], "0": [1, 2, 3, 4, 12, 14], "00": [3, 12], "00021359": 12, "00026707": 12, "00033394": 12, "00041755": 12, "0005221": 12, "00065282": 12, "00081627": 12, "00102065": 12, "0012762": 12, "0014462": 12, "00159574": 12, "0018083": 12, "00199528": 12, "00226106": 12, "00249486": 12, "00282719": 12, "00311953": 12, "00353506": 12, "0039006": 12, "00442018": 12, "00487723": 12, "0055269": 12, "005x": 6, "00609839": 12, "00691073": 12, "00762531": 12, "00864104": 12, "00869544": 12, "00953454": 12, "01": [3, 8, 12], "01080459": 12, "0119218": 12, "012e": 3, "01350984": 12, "013e": 3, "01490678": 12, "01689244": 12, "01863915": 12, "02": [3, 8], "02112198": 12, "02330603": 12, "02641051": 12, "027e": 3, "0291414": 12, "03": 3, "03302319": 12, "03643784": 12, "036e": 3, "04": 3, "040e": 3, "04129155": 12, "042e": 3, "0437616": 12, "043e": 3, "044e": 3, "04556116": 12, "048e": 3, "05": 3, "05163014": 12, "05696878": 12, "057e": 3, "06": 8, "06266747": 12, "06455732": 12, "065e": 3, "066e": 3, "070e": 3, "07123264": 12, "0721836": 12, "073e": 3, "074e": 3, "076e": 3, "079e": 12, "08072121": 12, "083e": 3, "0890679": 12, "09": 12, "092e": 3, "099e": 3, "1": [3, 4, 9], "10": [3, 4, 6, 12, 14], "100": [1, 2, 3, 12], "1000": 12, "10093222": 12, "100e": 3, "101": 3, "102": 3, "103": 3, "104": 3, "105": 3, "106": 3, "107": 3, "108": 3, "109": 3, "10_000": 12, "10e": 3, "11": [1, 3, 4, 6, 12, 14], "110": 3, "1100": 12, "111": 3, "11136876": 12, "111e": 3, "112": [3, 6], "113": 3, "114": 3, "115": 3, "116": 3, "116e": 3, "117": 3, "118": 3, "119": 3, "12": [3, 4, 12, 14], "120": [3, 12], "1200": 12, "120e": 3, "121": 3, "122": 3, "123": 3, "124": 3, "125": 3, "126": 3, "12620367": 12, "127": 3, "128": 3, "129": 3, "13": [3, 8, 14], "130": 3, "1300": 12, "131": 3, "132": 3, "133": 3, "13334832": 12, "134": 3, "135": 3, "136": 3, "137": 3, "138": 3, "139": 3, "13925332": 12, "14": [2, 3, 4, 14], "140": 3, "1400": 12, "141": 3, "142": 3, "142e": 3, "143": 3, "144": 3, "144e": 3, "145": 3, "146": 3, "148e": 3, "15": [3, 4, 14], "1500": 12, "153e": 3, "1578026": 12, "15x21": [3, 4], "16": [3, 14], "1600": 12, "17": [3, 14], "1700": 12, "179e": 3, "18": [3, 12, 14], "1800": 12, "183e": 3, "18974219": 12, "19": [3, 4, 14], "1900": 12, "191e": 3, "19731329": 12, "1e": [3, 4, 12], "2": [3, 4, 6, 9], "20": [1, 2, 3, 4, 6, 8, 14], "200": 12, "2000": 12, "2025": [1, 4], "20315769": 12, "20392477": 12, "204e": 3, "205e": 3, "207e": 3, "21": [1, 2, 3, 4, 14], "2100": 12, "210e": 3, "2111111111222000000000220000": [3, 4], "211e": 3, "212e": 3, "22": [3, 14], "2200": 12, "23": [3, 4, 14], "2300": 12, "234e": 3, "236e": 3, "24": [3, 4, 12, 14], "2400": 12, "240e": 3, "242e": 3, "24671667": 12, "25": [3, 14], "2500": 12, "26": [3, 4, 14], "2600": 12, "27": [1, 3, 8, 14], "2700": 12, "274e": 3, "28": [3, 14], "2800": 12, "281e": 3, "29": [3, 14], "2900": 12, "296e": 3, "297e": 3, "2e": [3, 4], "2f": [3, 4, 12], "2x2": 12, "3": [3, 4, 6, 8, 9, 12], "30": [3, 14], "300": [3, 4, 12], "3000": 12, "304e": 3, "3084897": 12, "308e": 3, "30am": 6, "30pm": 6, "31": [3, 6, 14], "315": [3, 4], "31576877": 12, "316": [3, 4], "31689623": 12, "32": [3, 14], "321e": 3, "326": 2, "326e": 3, "327": 2, "327e": 3, "328e": 3, "33": [3, 4, 14], "334": [1, 2], "338e": 3, "339e": 3, "34": [3, 14], "341e": 3, "344e": 3, "35": [3, 14], "354e": 3, "358e": 3, "36": [3, 14], "367e": 3, "37": [3, 14], "373e": 3, "38": 3, "38572948": 12, "38904808": 12, "39": [1, 2, 3, 14], "39718003": 12, "3d": [3, 4], "3e": [3, 4], "4": [1, 2, 3, 4, 8, 9, 12], "40": [3, 6], "400": 12, "402e": 3, "403e": 3, "404e": 3, "405e": 3, "4068179203820095": 12, "406e": 3, "4072459": 12, "407e": 3, "408e": 3, "409e": 3, "40e": 3, "41": [3, 12], "410e": 3, "411e": 3, "412e": 3, "413e": 3, "414e": 3, "415e": 3, "416e": 3, "417e": 3, "419e": 3, "42": [3, 12], "420e": 3, "423e": 3, "424e": 3, "427": 2, "428": 2, "43": [3, 12], "430e": 3, "432e": 3, "433e": 3, "437": [1, 2], "439e": 3, "44": [3, 12], "45": 3, "450e": 3, "458e": 3, "45am": 6, "46": [3, 12], "465e": 3, "47": 3, "4776": 3, "47950364": 12, "479e": 3, "48": 3, "48230859": 12, "489e": 3, "49": 3, "491e": 3, "5": [1, 2, 3, 4, 12], "50": [3, 12], "500": 12, "500e": 3, "504e": 3, "51": [3, 6], "51084153": 12, "51161546": 12, "51179635": 12, "511e": 12, "51203541": 12, "51233434": 12, "51270811": 12, "51317547": 12, "51375984": 12, "51449053": 12, "51540417": 12, "51654657": 12, "517975": 12, "51976108": 12, "52": 3, "52199436": 12, "521e": 3, "52478681": 12, "52827843": 12, "528e": 3, "53": 3, "531e": 3, "53264429": 12, "53729225": 12, "53810328": 12, "54": 3, "544": 2, "54492909": 12, "547e": 3, "549e": 3, "55": [3, 12], "55316878": 12, "55346395": 12, "556e": 3, "56": 3, "56413577": 12, "566e": 3, "57": 3, "5774796": 12, "578e": 3, "58": 3, "58350907": 12, "59": [1, 3, 4], "59416447": 12, "594e": 3, "595e": 3, "597e": 3, "59e": 3, "6": [1, 2, 3, 4, 12, 14], "60": 3, "600": 12, "600e": 3, "601e": 3, "602e": 3, "60306922": 12, "605e": 3, "606e": 3, "61": 3, "61202215": 12, "613e": 3, "6150269": 12, "62": [3, 12], "62047128": 12, "620e": 3, "622e": 3, "62it": 3, "63": 3, "64": 3, "64111288": 12, "646e": 3, "647": 2, "647e": 3, "648e": 3, "65": 3, "65003205": 12, "650e": 3, "653e": 3, "657e": 3, "66": 3, "66519321": 12, "67": 3, "670e": 3, "67367347": 12, "67373028": 12, "678e": 3, "68": 3, "686e": 3, "69": 3, "691e": 3, "69258085": 12, "692e": 3, "7": [1, 2, 3, 12, 14], "70": [3, 6, 12], "700": 12, "705e": 3, "70770216": 12, "71": 3, "71451443": 12, "71979552": 12, "72": 3, "720e": 3, "722e": 3, "727e": 3, "72946726": 12, "73": 3, "730e": 3, "731e": 3, "73720231": 12, "739e": 3, "74": 3, "74338846": 12, "747e": 3, "74833587": 12, "75": [3, 12], "750e": 3, "7522926": 12, "75406595": 12, "75545702": 12, "75798779": 12, "76": 3, "76001178": 12, "76163049": 12, "76285527": 12, "76551014": 12, "766e": 3, "76809547": 12, "76809548": 12, "768e": 12, "77": 3, "770e": 3, "772e": 3, "779e": 3, "78": 3, "782e": 3, "789e": 3, "79": 3, "796e": 3, "797e": 3, "798e": 3, "799e": 3, "8": [1, 2, 3, 12, 14], "80": [1, 2, 3], "800": 12, "806e": 3, "81": 3, "810e": 3, "82": 3, "821e": 3, "82927418": 12, "83": 3, "838e": 3, "84": 3, "844e": 3, "847e": 3, "85": [3, 12], "850e": 3, "86": 3, "863e": 3, "869e": 3, "87": 3, "872e": 3, "877e": 12, "88": 3, "88604211": 12, "886e": 3, "89": 3, "893e": 3, "899e": 3, "9": [2, 3, 12, 14], "90": 3, "900": 12, "904e": 3, "908e": 3, "90900348": 12, "91": 3, "913e": 3, "92": 3, "93": 3, "932e": 3, "934e": 3, "93e": 3, "94": [3, 12], "941e": 3, "94286931": 12, "943e": 3, "945e": 3, "95": 3, "955e": 3, "958e": 3, "96": 3, "97": [3, 12], "97421894": 12, "98": 3, "99": 3, "991e": 3, "996e": 3, "999e": 3, "A": [1, 2, 3, 4, 14], "As": [3, 4], "For": [1, 2, 3, 4, 10, 14], "If": [0, 1, 2, 3, 4], "In": [1, 2, 3, 4, 10, 12, 14], "It": [1, 2, 3, 4, 12, 13], "No": 14, "OF": 12, "Such": [1, 2], "The": [1, 2, 3, 4, 6, 9, 12, 14], "Then": [3, 4], "There": 6, "To": [3, 4, 14], "_": [3, 4], "__add__": 14, "__class__": 14, "__class_getitem__": 14, "__contains__": 14, "__delattr__": 14, "__delitem__": 14, "__dir__": 14, "__doc__": 14, "__eq__": 14, "__format__": 14, "__ge__": 14, "__getattribute__": 14, "__getitem__": 14, "__getstate__": 14, "__gt__": 14, "__hash__": 14, "__iadd__": 14, "__imul__": 14, "__init__": 14, "__init_subclass__": 14, "__iter__": 14, "__le__": 14, "__len__": 14, "__lt__": 14, "__mul__": 14, "__ne__": 14, "__new__": 14, "__reduce__": 14, "__reduce_ex__": 14, "__repr__": 14, "__reversed__": 14, "__rmul__": 14, "__setattr__": 14, "__setitem__": 14, "__sizeof__": 14, "__str__": 14, "__subclasshook__": 14, "_infost": [3, 4], "_print_info": [3, 4], "_run_opt": [3, 4], "_seed": [1, 2], "aa": [2, 3], "ab": 12, "about": 6, "abov": 4, "absolut": 13, "ac": [1, 2], "accept": 14, "access": [10, 14], "account": 10, "accuracy_fin": [3, 4], "accuracy_init": [3, 4], "acdefghiklmnpqrstvwi": [3, 4], "acid": [1, 2, 3, 4], "actual": 14, "ad": [1, 3, 4, 10, 14], "add": [1, 3, 4, 14], "addit": [1, 2, 13], "advanc": 12, "after": [3, 4], "alanin": [1, 2], "algebra": [5, 6, 8], "algorithm": [0, 6, 12], "align": [2, 9], "all": [1, 2, 3, 4, 12], "allow": 14, "along": [3, 4], "alpha": [3, 4, 12], "although": [0, 3, 4, 12], "alwai": [3, 4], "amino": [1, 2, 3, 4], "amino_acid": [3, 4], "among": 6, "amount": 10, "an": [1, 2, 3, 4, 6, 10, 14], "analysi": 9, "analyt": 12, "ani": [4, 10], "annot": [1, 2], "answer": 4, "api": 13, "append": [2, 3, 4, 14], "appli": 0, "applic": 6, "apply_upd": [3, 4], "approach": [3, 4], "approx": [1, 2], "ar": [0, 1, 2, 3, 4, 6, 9, 13, 14], "area": 14, "arg": [3, 4], "argmax": 3, "argnum": 12, "aris": [3, 4], "around": [3, 4], "arrai": [3, 4, 12, 13, 14], "arrang": [3, 4], "articl": 6, "ask": 4, "assert": [3, 4], "assign": [1, 3, 4, 6, 8, 10, 14], "associ": 14, "assum": 10, "atom": [3, 4], "attempt": 12, "attribut": 14, "author": 4, "automat": [3, 4, 13], "avail": 14, "axi": 12, "axler": 0, "b": [3, 4, 12, 14], "back": 14, "backbon": [3, 4], "background": 6, "base": [1, 2, 3, 4, 12, 14], "basi": 6, "basic": [0, 6, 8, 11], "becaus": [0, 1, 2, 3, 4, 12], "been": [1, 4, 14], "befor": [3, 4], "begin": [3, 4], "beginn": 13, "below": [3, 4], "berend": 6, "besid": 14, "beta": [3, 4], "between": [3, 4], "beyond": [3, 4], "bfg": [3, 4, 12], "bind": 9, "biologi": 6, "biophys": 9, "bishop": 6, "black": 12, "block": [3, 4], "boltzmann": 9, "bond": [3, 4], "book": 6, "bool": 14, "both": [3, 4, 12, 13], "boyd": 0, "break": [2, 12], "build": [3, 4], "built": 14, "builtin": 14, "bundl": 14, "button": 1, "c": [1, 2, 3, 4, 14], "calcul": 9, "call": [1, 2, 4, 14], "can": [1, 2, 3, 4, 12, 14], "cannot": 14, "cap": 9, "carri": [3, 4], "case": [3, 4, 10], "categor": [3, 4], "cell": [3, 4, 14], "center": 10, "central": [3, 4], "chain": [3, 4], "chang": [9, 14], "changeabl": 14, "charact": [1, 2], "check": [3, 4], "chemistri": 6, "chex": [3, 4], "christoph": 6, "class": [3, 4, 10], "classif": [3, 4, 7, 8, 9], "classifi": [3, 4], "clear": 14, "clf": [1, 2, 12], "click": 1, "club": 8, "cluster": [1, 2, 10], "code": [1, 2, 3, 4, 10, 14], "coil": [3, 4], "color": 12, "come": 14, "comment": [1, 2], "common": [1, 2, 3, 4], "commonli": [1, 2], "commun": 13, "compar": [3, 4, 12], "compil": 13, "complet": [3, 4], "comput": [6, 9, 11, 12, 13], "compute_accurai": [3, 4], "compute_entropi": 2, "compute_entropy_ma": [1, 2], "compute_freq": 2, "concaten": 14, "concept": 0, "config": [3, 4, 12], "conserv": [1, 2], "consid": [1, 2, 3, 4], "constant": [3, 4], "contain": [1, 2, 3, 4, 12, 14], "content": [1, 2], "continu": [2, 3, 4], "continuing_criterion": [3, 4], "converg": 12, "convert": [3, 4], "coordin": [3, 4], "copi": 14, "correct": [3, 4], "correspond": [3, 4, 14], "could": [1, 2, 3, 4, 12], "count": [3, 4, 14], "coupl": 9, "cours": [0, 6, 9], "cover": [0, 3, 4, 6, 9], "creat": [1, 2, 3, 4, 14], "criteria": [3, 4, 12], "cystein": [1, 2], "d": [3, 4, 12, 14], "daan": 6, "data": [1, 2], "databas": [1, 2], "dataset": [3, 4], "date": [1, 4], "debug": [3, 4], "decod": [1, 2], "decomposit": 12, "decompress": [1, 2], "deep": [7, 8], "def": [1, 2, 3, 4, 12, 14], "defin": [1, 12, 14], "definit": 14, "degenaraci": [3, 4], "degre": [1, 2], "del": [3, 4], "depend": [1, 3, 4, 9], "describ": 4, "descript": 6, "design": [3, 4, 6, 9], "desktop": 10, "determin": [3, 4], "deviat": 12, "dict": [1, 2, 14], "dict_item": 14, "dict_kei": 14, "dict_valu": 14, "dictionari": [1, 2, 3, 4], "diego": 10, "differ": [3, 4, 14], "differenti": [3, 4, 13], "diffus": 9, "dimension": [3, 4], "ding": 6, "dir": 14, "direct": 9, "directli": [3, 4, 12], "directori": [4, 14], "disp": 12, "distribut": 9, "divid": [3, 4], "do": [3, 4, 12], "document": 13, "doe": 12, "doesn": 14, "don": 4, "done": 0, "download": [1, 2, 4], "dr": 6, "drug": [6, 9], "dssp": [3, 4], "dtype": [3, 4, 12], "due": [1, 4, 8], "duplic": 14, "dynam": [6, 9], "e": [1, 2, 3, 4, 14], "each": [1, 2, 3, 4, 14], "ebi": [1, 2], "edit": 1, "editor": [1, 2], "edu": 6, "effici": 12, "eight": [3, 4], "either": 14, "element": [6, 14], "elif": [3, 14], "els": [2, 3, 14], "encod": [3, 4], "encount": 14, "end": [1, 2, 3, 4, 14], "energi": 9, "enough": 10, "entri": [1, 2], "enumer": 3, "epha1_human": [1, 2], "epha3_chick": 2, "ephb2_chick": 2, "epsilon": 12, "equal": [1, 2, 14], "equival": 6, "err": [3, 4], "error": 14, "essenti": 0, "estim": 12, "etc": [1, 2], "even": [4, 14], "everi": [3, 4, 14], "everyth": 14, "evolutionari": [1, 2], "evvgsssasellsai": [3, 4], "exactli": 4, "exampl": [1, 2, 3, 4, 14], "excel": 13, "except": 14, "exchang": 9, "exclud": [1, 2], "exercis": 0, "exist_ok": 1, "expand": [3, 4], "expand_theta": [3, 4], "extend": [3, 4, 14], "extra_arg": [3, 4], "extract": [3, 4], "f": [1, 2, 3, 4, 12, 14], "f_tol": 12, "fals": 14, "famili": [1, 2], "far": 14, "featur": [3, 4, 12, 13], "februari": 4, "few": [3, 4], "fewer": [3, 4], "fig": [1, 2, 12], "figur": [1, 2, 12], "file": [3, 4, 14], "file_handl": [1, 2], "final": [3, 4, 6, 8], "final_param": [3, 4], "final_st": [3, 4], "final_theta": [3, 4], "find": [10, 14], "finish": [3, 4], "first": [1, 2, 3, 4, 12], "fix": [3, 4, 12], "float": [2, 3, 4, 14], "float64": 12, "flow": 9, "fmin_lbfg": [3, 4], "fold": [6, 9], "folder": [1, 2, 4], "follow": [1, 2, 3, 4, 6, 9, 13, 14], "form": [8, 12], "format": [1, 2, 3, 4], "formula": 12, "four": 14, "free": 9, "frenkel": 6, "freq": 2, "frequenc": [1, 2], "friedman": 6, "from": [1, 2, 3, 4, 6, 12, 14], "full": 10, "fun": [3, 4, 12], "func": 12, "function": [1, 2, 12], "g": [1, 2, 3, 4], "g_tol": 12, "gap": [1, 2], "gaps_per_posit": 2, "gaussian": 12, "gener": 9, "get": [1, 2, 3, 4, 13, 14], "get_amino_acid": 2, "get_names_of_long_sequ": [1, 2], "get_window": [3, 4], "gf": [1, 2], "gilbert": 0, "given": [3, 4], "gpu": 13, "grad": [3, 4, 12], "grad_fn": 12, "grade": 6, "gradid": 12, "gradient": [3, 4], "gradienttransformationextraarg": [3, 4], "greater": [3, 4, 14], "group": [1, 2], "gt": [12, 14], "gtol": 12, "guid": 10, "gzip": [1, 2], "h": [1, 2, 3, 4], "ha": [1, 2, 3, 4, 10, 13, 14], "hand": 6, "handl": [3, 4], "hasti": 6, "have": [1, 2, 3, 4, 10, 14], "height": 14, "helic": [3, 4], "helix": [3, 4], "hello": 14, "help": 14, "helper": [1, 2], "here": [0, 1, 2, 3, 4, 10, 12], "hess_inv": 12, "high": [11, 13], "higher": [3, 4], "highest": [3, 4], "hint": 4, "hold": 14, "homework": [0, 6, 10], "hot": [3, 4], "hour": 6, "how": [1, 2, 4, 6, 10, 12], "howev": [4, 6], "hpc": 10, "hstack": [3, 4], "http": [1, 2], "hydrogen": [3, 4], "i": [0, 1, 2, 3, 4, 6, 10, 12, 13, 14], "id": [1, 2], "identifi": [1, 2], "idx_it": 12, "iehvaeka": [3, 4], "ignor": [1, 2], "immut": 14, "implement": 12, "import": [0, 1, 2, 3, 4, 6, 12, 14], "in_ax": 3, "includ": [1, 2, 3, 4, 6], "index": 14, "inform": 10, "init": [3, 4], "init_carri": [3, 4], "init_fn": [3, 4], "init_param": [3, 4], "initi": [3, 4], "initial_param": [3, 4], "input": [1, 2, 3, 4, 14], "insert": 14, "insid": 14, "instal": [1, 4, 8], "instanc": 14, "instead": 12, "instruct": 1, "instructor": [6, 10], "int": [1, 2, 3, 4, 14], "int64": [3, 4], "interest": [1, 2, 6], "interpro": [1, 2], "intersect": 14, "introduct": [0, 6], "inv": 12, "invari": [3, 4], "invert": 12, "ipynb": [1, 4], "item": [1, 2, 3, 4, 14], "iter": [3, 4], "iter_num": [3, 4], "its": [3, 4, 12, 14], "itself": 14, "j": 2, "jac": 12, "januari": 1, "jax": [3, 4, 6, 8, 9, 11, 12], "jax_enable_x64": [3, 4, 12], "jerom": 6, "jnp": [3, 4, 12], "join": 2, "journal": 8, "jr": 12, "jupyt": [1, 4, 14], "just": 13, "k": [2, 3, 4], "kalm_chick": 2, "keep": [1, 2], "kei": [1, 2, 12, 14], "keyword": 14, "know": [0, 1, 2, 12], "known": [3, 4], "l": [3, 4, 12, 14], "l2": 14, "l3": 14, "label": [3, 4, 12], "langevin": 9, "languag": 6, "laptop": [8, 10], "last": [3, 4], "lax": [3, 4], "lbfg": [3, 4, 12], "lbfgsinvhessproduct": 12, "learn": [0, 3, 4, 6, 7, 8, 9, 12], "lectur": [3, 4, 6, 8], "legend": 12, "len": [2, 3, 14], "length": [3, 4, 14], "less": 14, "let": [1, 2, 14], "letter": [1, 2, 3, 4], "librari": [3, 4, 12, 13], "lieven": 0, "ligand": 9, "like": [1, 2, 14], "likelihood": [3, 4], "linalg": 12, "line": [1, 2, 3, 4, 14], "linear": [5, 6, 7, 8, 11], "list": [1, 2, 3, 4], "local": [3, 4], "locat": 6, "log": [1, 2, 3, 4], "log2": 2, "log_2": [1, 2], "log_likelihood_data": [3, 4], "log_likelihood_per_sampl": [3, 4], "logist": [3, 7, 8], "logit": 3, "logprob": 3, "logsumexp": [3, 4], "longer": [1, 2], "look": [1, 2], "loss": 12, "loss_fn": [3, 4, 12], "loss_new": 12, "lt": [3, 12, 14], "m": [3, 4], "machin": [0, 3, 4, 6, 9], "mai": [9, 10, 14], "main": [1, 4, 6], "make": [1, 12, 14], "makedir": 1, "mani": [0, 14], "manipul": 14, "map": 14, "materi": 0, "math": [1, 2, 6], "matmul": [3, 12], "matplotlib": [1, 2, 12], "matrix": 12, "max": [4, 12], "max_it": [3, 4, 12], "maxval": 12, "mean": [3, 4, 12, 14], "measur": [1, 2], "member": 14, "mention": 4, "messag": 12, "method": [3, 4, 12, 14], "method_descriptor": 14, "minim": [3, 4, 12], "minval": 12, "miss": 4, "model": 9, "modifi": [3, 4], "modul": 9, "modular": 14, "molecular": [6, 9], "more": [1, 2, 3, 4, 6, 12, 14], "most": [3, 4], "move": 1, "msa": [5, 8], "msa_process": [1, 2], "multi": [3, 4], "multidimension": 13, "multipl": [2, 3, 4, 9, 14], "mypackag": 1, "n": [2, 3, 4], "name": [1, 2, 3, 4, 14], "namedtupl": [3, 4], "ndarrai": [3, 4, 14], "necessari": [1, 2, 4], "necessarili": 14, "need": [0, 1, 3, 4, 10, 12], "neg": [3, 4, 14], "network": 9, "neural": 9, "new": [1, 2], "next": 1, "nfev": 12, "nit": 12, "njev": 12, "nois": 12, "none": [1, 3, 4], "norm": [3, 4, 12], "normal": [9, 12], "note": 4, "notebook": [1, 4, 14], "np": [3, 4, 12, 14], "number": [3, 4], "numer": [3, 4, 12, 13], "numpi": [3, 4, 8, 9, 11, 12, 14], "o": [1, 12], "object": 13, "obtain": [1, 2], "offer": 12, "offic": 6, "onc": [3, 4, 14], "one": [1, 2, 3, 4], "one_hot_encod": 3, "onedr": [1, 4], "ones": [3, 4], "ones_lik": 12, "onli": [3, 4, 10], "open": [1, 2, 3, 4], "openmm": [6, 9], "oper": 14, "opt": [3, 4], "optax": [3, 4], "optim": [3, 4, 12], "option": 12, "order": [3, 4, 14], "organ": 6, "origin": [1, 2], "other": [1, 2, 3, 4, 6], "otu": [3, 4], "our": 12, "output": [3, 4, 14], "own": [12, 14], "p": [3, 4], "p_i": [1, 2], "pace": 9, "packag": [1, 4, 7, 8], "pad": [3, 4], "page": 1, "pair": [3, 4, 12, 14], "param": [3, 4], "paramet": [3, 4, 12], "pars": [1, 2], "part": [1, 2], "path_to_train": [3, 4], "pattern": 6, "pearson": 6, "per": [1, 2], "perform": [3, 4, 11, 12, 13], "perimet": 14, "pf00041": [1, 2], "pf00041_seed": [1, 2], "pfam": [1, 2], "pfam_id": [1, 2], "pgtol": 12, "physic": 6, "piec": 14, "place": 4, "pleas": [1, 4], "plot": [1, 2, 12], "plt": [1, 2, 12], "pm": [1, 4], "po": 2, "point": [3, 4, 12], "poolmanag": [1, 2], "pop": 14, "popular": 13, "posit": [1, 2, 3, 4], "possibl": [3, 4], "power": 10, "practic": 12, "predict": [6, 9, 12], "predict_per_sampl": [3, 4], "prefer": [4, 12], "prerequisit": 6, "present": [6, 12], "previou": [1, 2], "print": [1, 2, 3, 4, 12, 14], "prngkei": 12, "probabilist": 9, "probabl": [3, 4], "problem": 6, "process_msa": [1, 2], "produc": 14, "program": [6, 9], "project": [1, 4, 6, 8, 10, 12], "properli": [3, 4], "protein": [2, 5, 6, 8, 9], "protein_nam": [3, 4], "provid": [1, 2, 3, 4, 12, 13], "put": 14, "pyplot": [1, 2, 12], "pyproject": [1, 4], "python": [1, 6, 7, 8, 9, 11, 13], "q": [3, 4, 12], "qr": 12, "question": [4, 10], "quickstart": 13, "r": [1, 2, 3, 4, 12], "random": [3, 4, 12], "rang": [1, 2, 12], "rare": 12, "rate": 12, "re": 12, "read": [0, 3, 4], "reason": 10, "rec": 14, "recognit": 6, "recommend": [0, 6, 12], "recov": 12, "rectangl": 14, "ref_seq": 2, "refer": [0, 1, 2, 10], "reflect": [1, 2, 14], "region": [1, 2], "regress": [7, 8, 9, 11], "relat": [1, 2], "rememb": [4, 14], "remov": [1, 2, 14], "replac": 2, "replica": 9, "report": 14, "repres": [1, 2, 3, 4], "request": [1, 2], "requir": [1, 6, 12], "research": 6, "reshap": 3, "residu": [3, 4], "respect": [3, 4, 6], "respons": 12, "result": 12, "return": [1, 2, 3, 4, 12, 14], "reus": 14, "reusabl": 14, "revers": 14, "review": [0, 8], "right": [0, 1], "robert": 6, "row": [3, 4], "run": [1, 10, 14], "s1": 14, "s2": 14, "same": [3, 4, 12], "sampl": [1, 2, 3, 4, 9], "san": 10, "save": [1, 2, 4], "scienc": 6, "scientif": 13, "scipi": [3, 4, 12], "score": [3, 4], "sdsc": 10, "second": [1, 2, 3, 4], "secondari": 5, "secondary_structur": [3, 4], "see": [1, 2, 12], "seed": [1, 2], "segment": 3, "select": 1, "self": 14, "sent": 10, "separ": [1, 2], "seq": [2, 3, 4], "seqnam": [1, 2], "sequenc": [2, 3, 4, 9], "set": [3, 4, 12], "shape": [3, 4, 12, 14], "share": [1, 2, 4], "sheet": [3, 4], "sheldon": 0, "should": [1, 2, 3, 4, 12], "show": [1, 2, 10, 12], "significantli": [3, 4], "similar": [1, 2, 13, 14], "simpl": 12, "simpler": [3, 4], "simplest": [3, 4], "simpli": 14, "simplifi": [3, 4], "simul": [6, 9], "singl": [3, 4], "sivagyev": [3, 4], "sivagyevv": [3, 4], "sivagyevvgsssasellsaiehvaeka": [3, 4], "size": [3, 4], "skill": 6, "slice": 14, "slide": [3, 4], "small": 10, "smit": 6, "so": [3, 4, 14], "soft": 4, "solut": 12, "solv": 6, "solve_triangular": 12, "some": [0, 10, 14], "someon": 4, "sort": 14, "space": [1, 2], "spatial": [3, 4], "special": [3, 4], "specif": [3, 4], "specifi": 12, "split": [2, 12], "ss": [3, 4], "stabl": 12, "stack": [3, 4, 12], "standard": 12, "start": [1, 2, 3, 4, 13], "startswith": [2, 3], "state": [3, 4], "statist": 6, "statu": 12, "step": [1, 2, 3, 4, 12], "step_siz": 12, "stephen": 0, "stockholm": [1, 2], "stop": [3, 4, 12], "store": [1, 2], "str": [1, 2, 3, 4, 14], "strand": [3, 4], "strang": 0, "string": [1, 2, 3, 4], "strip": [2, 3], "structur": [1, 2, 5, 6, 9], "student": 6, "style": 12, "subkei": 12, "submiss": [1, 8], "subset": 10, "success": 12, "suitabl": [3, 4], "sum": [3, 14], "sum_": [1, 2], "sum_of_squar": 14, "supercomput": 10, "support": 13, "sure": 4, "symbol": [3, 4], "t": [3, 4, 12, 14], "take": [1, 2, 3, 4], "taken": [1, 2], "target": [3, 4, 12], "task": [3, 4], "team": 8, "temperatur": 9, "tent": 9, "term": [1, 2], "test_predict": 4, "text": [1, 2, 3, 4], "textbook": [0, 6], "th": [1, 2], "than": [1, 2, 3, 4, 14], "thank": [3, 4], "thei": [3, 4, 14], "them": [3, 4], "theori": 6, "therefor": [3, 4], "thermodynam": 6, "theta": [3, 4, 12], "theta_0": 12, "theta_1": 12, "theta_bfg": 12, "theta_expand": 3, "theta_gd": 12, "theta_init": [3, 4, 12], "theta_na": 12, "theta_qr": 12, "theta_tru": 12, "thi": [0, 1, 2, 3, 4, 6, 10, 12], "though": 4, "three": [3, 4], "throughout": 0, "thursdai": 6, "tibshirani": 6, "time": [3, 4, 6, 10, 13], "togeth": 14, "token": [3, 4], "tol": [3, 4, 12], "toml": [1, 4], "tool": [6, 13], "top": 1, "topic": [6, 9], "total": [3, 4], "tpu": 13, "tqdm": [3, 4], "train": 12, "train_i": [3, 4], "train_seq": [3, 4], "train_x": [3, 4], "tree_get": [3, 4], "tree_l2_norm": [3, 4], "tree_util": [3, 4], "trevor": 6, "true": [1, 3, 4, 12, 14], "try": 14, "tuesdai": 6, "tuft": 6, "tupl": [3, 4], "turn": 12, "tutori": [6, 8, 10, 12, 13], "two": [3, 4, 12, 14], "txt": [1, 2, 3, 4], "type": [3, 4], "u": [1, 2], "uint8": 3, "uk": [1, 2], "umbrella": 9, "unbound": 14, "unchang": 14, "under": [1, 4], "underli": 12, "understand": [0, 3, 4, 6], "uniform": 12, "unindex": 14, "union": 14, "unord": 14, "unstabl": 12, "until": [3, 4], "updat": [3, 4, 12], "update_fn": [3, 4], "upload": [1, 4], "urllib3": [1, 2], "us": [0, 1, 2, 3, 4, 6, 10, 12, 13, 14], "user": 10, "usernam": 10, "uv": [1, 4, 8], "v": [2, 3, 4, 14], "valu": [1, 2, 3, 4, 12, 14], "value_and_grad": 12, "value_and_grad_from_st": [3, 4], "value_and_grad_fun": [3, 4], "value_fn": [3, 4], "vandenbergh": 0, "varaibl": 14, "variabl": [3, 4], "variat": [1, 2], "variou": 12, "vector": [3, 4, 12, 13], "venv": 1, "version": [1, 2], "vmap": [3, 4], "vstack": 3, "w": [1, 2, 3, 4], "wai": [3, 4, 14], "want": [6, 10], "we": [1, 2, 3, 4, 10, 12, 14], "week": 8, "weight": [3, 4], "well": 0, "were": [3, 4], "what": [4, 14], "when": [1, 2, 14], "where": [1, 2, 3, 4, 12], "which": [3, 4, 12, 14], "while": 14, "while_loop": [3, 4], "who": 6, "why": [3, 4], "wide": 13, "width": 14, "window": [3, 4], "within": [1, 2], "word": [1, 2], "work": [0, 4, 13], "world": 14, "would": [3, 4], "write": [1, 2, 3, 4, 12], "written": [3, 4], "www": [1, 2], "wwwapi": [1, 2], "x": [3, 4, 12], "xinqiang": 6, "xlabel": [1, 2, 12], "y": [3, 4, 12], "y_pred": [3, 4, 12], "y_pred_fin": [3, 4], "y_pred_init": [3, 4], "y_true": [3, 4], "ye": 4, "ylabel": [1, 2, 12], "ylim": [1, 2], "you": [0, 1, 2, 3, 4, 10, 14], "your": [1, 2, 3, 4, 8, 10, 14], "your_nam": 4, "zero": [3, 4], "zeros_lik": 3}, "titles": ["Linear Algebra", "Processing protein multiple sequence alignments", "Assignment 1: Python Basics", "Predict protein secondary structure", "Predict protein secondary structure", "Homeworks", "Chem 193: (ML <span class=\"math notranslate nohighlight\">\\(\\cup\\)</span> MD) <span class=\"math notranslate nohighlight\">\\(\\cap\\)</span> Biophysics", "Lecture Slides", "Schedule", "Syllabus", "High Performance Computing", "Tutorials", "Linear Regression", "Numpy &amp; JAX", "Python Basics"], "titleterms": {"1": [1, 2, 12, 14], "193": 6, "2": [1, 2, 12, 14], "3": [1, 2, 14], "4": 14, "5": 14, "accuraci": [3, 4], "algebra": 0, "align": 1, "assign": 2, "basic": [2, 14], "biophys": 6, "calcul": [1, 2], "cap": 6, "chem": 6, "class": 14, "collect": 14, "comput": [3, 4, 10], "condit": 14, "control": 14, "cup": 6, "data": [3, 4, 12, 14], "defin": [3, 4], "descent": 12, "dictionari": 14, "entropi": [1, 2], "expans": 10, "file": [1, 2], "fit": 12, "flow": 14, "function": [3, 4, 14], "gener": 12, "gradient": 12, "high": 10, "homework": 5, "instruct": 4, "interpret": 4, "jax": 13, "lectur": 7, "linear": [0, 12], "list": 14, "log": 10, "loop": 14, "loss": [3, 4], "make": [3, 4], "md": 6, "ml": 6, "model": [3, 4, 12], "modul": 14, "msa": [1, 2], "multipl": 1, "numpi": 13, "object": 14, "packag": 14, "perform": 10, "predict": [3, 4], "process": [1, 2, 3, 4], "protein": [1, 3, 4], "python": [2, 14], "read": [1, 2], "regress": [3, 4, 12], "scalar": 14, "schedul": 8, "secondari": [3, 4], "sequenc": 1, "set": 14, "shannon": [1, 2], "slide": 7, "softmax": [3, 4], "statement": 14, "string": 14, "structur": [3, 4], "submiss": 4, "syllabu": 9, "synthet": 12, "test": [3, 4], "train": [3, 4], "tupl": 14, "tutori": 11, "type": 14, "variabl": 14}})