var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "frontmatter-2",
  "level": "1",
  "url": "frontmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "  My Website   copyright  "
},
{
  "id": "frontmatter-3",
  "level": "1",
  "url": "frontmatter-3.html",
  "type": "Acknowledgements",
  "number": "",
  "title": "Acknowledgements",
  "body": " Work on this text was supported by an Open Educational Resource Faculty Grant awarded to the author in 2020 by Northwestern University's Affordable Instructional Resources (AIR) initiative. The OER grants are funded by Northwestern's Office of the Provost and University Libraries. Special thanks are due to Lauren McKeen McDonald (Open Education Librarian) and Chris Diaz (Digital Publishing Librarian) for their constant strategic and technical support.  "
},
{
  "id": "s_sets_functions",
  "level": "1",
  "url": "s_sets_functions.html",
  "type": "Section",
  "number": "0.1",
  "title": "Sets",
  "body": " Sets   We will gradually make our way to definitions of the vector spaces and linear transformations mentioned in this text's title. For now it will suffice to observe that a vector space is a certain kind of set , and a linear transformation is a special type of function . Accordingly we gather here some notions about sets and (in the next section) functions that will come in handy once we meet the two main players of linear algebra.    sets  sets empty sets  sets membership      set membership   Sets   A set is a collection of objects. An object is a member (or element ) of a set if contains . In this case, we write . If is not a member of , we write .    We use curly braces to describe the contents of a set. For example, is the set containing the first three positive integers, and is the set of all positive integers. The defining property of sets is that they are completely determined by their members, and nothing more. In particular, when describing sets as above, it does not matter in what order the elements are listed, nor if they are repeated: , , , and are three descriptions of the same set. This somewhat slippery notion is made perfectly clear by specifying exactly what it means for two sets to be equal, as we do below.   Set equality  sets equality   Sets and are equal , denoted , if they have precisely the same elements: , if for any object , we have if and only if .    Set membership naturally extends to a notion of one set lying within another.   Set inclusion (subsets)  sets subset  sets inclusion    set inclusion    A set is a subset of a set , denoted , if every member of is a member of : , implies for any object . The relation is called set inclusion .      The definitions of set equality and the subset relation make use of two important logical operations: namely, the if and only if (or iff for short) and if-then operations. We describe these notions in more detail in , and we outline techniques for proving if and only if and if-then statements, including statements about set equality and the subset relation, in .    With the fundamental notions of membership, equality, and subset in place, we now introduce means of building new sets from existing ones. The first is a manner of carving out a subset of a given set using a specified property.   Set-builder notation  sets set builder notation   Let be a set, and let be a property that elements of either satisfy or do not satisfy. For an element , let denote the statement that satisfies . The set of all elements of satisfying is denoted .      Set builder notation is parsed from left to right as follows:    is read as the set of      is read as elements of      is read as such that      is read as is true .   Taken altogether we get: The set of elements of such that is true .      Let be the set of nonnegative integers. The subset of even positive integers can be described using set-builder notation as , or alternatively, .    Next we use set builder notation, the set membership relation, and some basic logic to define the union, intersection, and difference of sets.   Union, intersection, difference, and complement  sets union  sets intersection    set union     set complement     set intersection   sets complement  sets difference      set difference    Let and be subsets of a common set .    Set union  The union  of and is defined as . More generally, the union of a collection of subsets of is defined as .    Set intersection  The intersection  of and is defined as . More generally, the intersection of a collection of subsets of is defined as     Set difference  The difference  is defined as .    Set complement  The complement of in is defined as . In contexts where there is clear what the larger set is, we denote the complement of in as .      With the help of these set operations, we can now describe some common sets used in mathematics.   sets empty set     the empty set   real numbers    the real numbers   integers    the integers   rational numbers    the rational numbers   Common mathematical sets   We denote by the set of all real numbers. The integers  and rational numbers  are the subsets of defined as . This yields the following chain of subsets: . The empty set is the set containing no objects, denoted or .       Let , , .  List the elements of the following sets. If there is more than one element write them separated by commas.                                         Let ,  How many elements are in ?  Determine  [Note: Enter your answer as a comma-separated list. Pairs should be denoted with parentheses.]               The number of elements in a Cartesian product is simply for any sets . Thus, the number of elements in is The Cartesian product is defined as the set of all ordered pairs whose first component is a member of and whose second component is a member of . More formally, Thus, is        "
},
{
  "id": "d_sets",
  "level": "2",
  "url": "s_sets_functions.html#d_sets",
  "type": "Definition",
  "number": "0.1.1",
  "title": "Sets.",
  "body": " sets  sets empty sets  sets membership      set membership   Sets   A set is a collection of objects. An object is a member (or element ) of a set if contains . In this case, we write . If is not a member of , we write .   "
},
{
  "id": "d_set_equality",
  "level": "2",
  "url": "s_sets_functions.html#d_set_equality",
  "type": "Definition",
  "number": "0.1.2",
  "title": "Set equality.",
  "body": " Set equality  sets equality   Sets and are equal , denoted , if they have precisely the same elements: , if for any object , we have if and only if .   "
},
{
  "id": "d_set_inclusion",
  "level": "2",
  "url": "s_sets_functions.html#d_set_inclusion",
  "type": "Definition",
  "number": "0.1.3",
  "title": "Set inclusion (subsets).",
  "body": " Set inclusion (subsets)  sets subset  sets inclusion    set inclusion    A set is a subset of a set , denoted , if every member of is a member of : , implies for any object . The relation is called set inclusion .   "
},
{
  "id": "rm_equal_subset_logic",
  "level": "2",
  "url": "s_sets_functions.html#rm_equal_subset_logic",
  "type": "Remark",
  "number": "0.1.4",
  "title": "",
  "body": "  The definitions of set equality and the subset relation make use of two important logical operations: namely, the if and only if (or iff for short) and if-then operations. We describe these notions in more detail in , and we outline techniques for proving if and only if and if-then statements, including statements about set equality and the subset relation, in .   "
},
{
  "id": "d_set_builder_notation",
  "level": "2",
  "url": "s_sets_functions.html#d_set_builder_notation",
  "type": "Definition",
  "number": "0.1.5",
  "title": "Set-builder notation.",
  "body": " Set-builder notation  sets set builder notation   Let be a set, and let be a property that elements of either satisfy or do not satisfy. For an element , let denote the statement that satisfies . The set of all elements of satisfying is denoted .   "
},
{
  "id": "rm_set_builder",
  "level": "2",
  "url": "s_sets_functions.html#rm_set_builder",
  "type": "Remark",
  "number": "0.1.6",
  "title": "",
  "body": "  Set builder notation is parsed from left to right as follows:    is read as the set of      is read as elements of      is read as such that      is read as is true .   Taken altogether we get: The set of elements of such that is true .   "
},
{
  "id": "ex_set_builder",
  "level": "2",
  "url": "s_sets_functions.html#ex_set_builder",
  "type": "Example",
  "number": "0.1.7",
  "title": "",
  "body": "  Let be the set of nonnegative integers. The subset of even positive integers can be described using set-builder notation as , or alternatively, .   "
},
{
  "id": "d_set_operations",
  "level": "2",
  "url": "s_sets_functions.html#d_set_operations",
  "type": "Definition",
  "number": "0.1.8",
  "title": "Union, intersection, difference, and complement.",
  "body": " Union, intersection, difference, and complement  sets union  sets intersection    set union     set complement     set intersection   sets complement  sets difference      set difference    Let and be subsets of a common set .    Set union  The union  of and is defined as . More generally, the union of a collection of subsets of is defined as .    Set intersection  The intersection  of and is defined as . More generally, the intersection of a collection of subsets of is defined as     Set difference  The difference  is defined as .    Set complement  The complement of in is defined as . In contexts where there is clear what the larger set is, we denote the complement of in as .     "
},
{
  "id": "d_common_sets",
  "level": "2",
  "url": "s_sets_functions.html#d_common_sets",
  "type": "Definition",
  "number": "0.1.9",
  "title": "Common mathematical sets.",
  "body": " sets empty set     the empty set   real numbers    the real numbers   integers    the integers   rational numbers    the rational numbers   Common mathematical sets   We denote by the set of all real numbers. The integers  and rational numbers  are the subsets of defined as . This yields the following chain of subsets: . The empty set is the set containing no objects, denoted or .   "
},
{
  "id": "s_sets_functions_ex-1",
  "level": "2",
  "url": "s_sets_functions.html#s_sets_functions_ex-1",
  "type": "Exercise",
  "number": "0.1.1",
  "title": "",
  "body": "  Let , , .  List the elements of the following sets. If there is more than one element write them separated by commas.                                      "
},
{
  "id": "s_sets_functions_ex-2",
  "level": "2",
  "url": "s_sets_functions.html#s_sets_functions_ex-2",
  "type": "Exercise",
  "number": "0.1.2",
  "title": "",
  "body": "  Let ,  How many elements are in ?  Determine  [Note: Enter your answer as a comma-separated list. Pairs should be denoted with parentheses.]               The number of elements in a Cartesian product is simply for any sets . Thus, the number of elements in is The Cartesian product is defined as the set of all ordered pairs whose first component is a member of and whose second component is a member of . More formally, Thus, is      "
},
{
  "id": "s_functions",
  "level": "1",
  "url": "s_functions.html",
  "type": "Section",
  "number": "0.2",
  "title": "Functions",
  "body": " Functions   Functions  function    a function from to    Let and be two sets. A function from to , denoted , is a rule which, given any input  , returns an output  . In this case we write and call the image of under , or the value of at  . Similarly, we say  maps (or sends ) the input to the output .  The set is called the domain of ; the set is called the codomain of .  When we wish to indicate what rule defines the function, we use the elaborated notation . This is read as The function with domain and codomain maps an input to the output .      Consider the function . This function has domain and codomain equal to and maps an integer to its square.     Arithmetic operations as functions   Our familiar arithmetic operations can be expressed as functions whose inputs are pairs of numbers: addition is the function and multiplication is the function       Invoking the notion of a rule in the definition of a function is admittedly somewhat vague. A more precise definition can be given using the Cartesian product. Namely, given sets and , we define a function to be a subset satisfying the following property: for all there is a unique element . The uniqueness of the pair then allows us to define the value of at as , denoted .    As with sets and tuples, we are obliged to specify what we mean for two functions to be equal. The definition below makes clear how the the domain and codomain, as well as the rule that takes inputs to outputs, are all essential ingredients of a function.   Function equality  function equality   Functions and are equal if   they have the same domain and codomain , and    for all , we have .        Image of a set  function image of a set  function image    image of the set under     image of a function    Given a function and a subset , the image of under , denoted , is defined as . In other words, is the set of all outputs , where .  The image of , denoted , is the set of all outputs of : , .     Injective, surjective, bijective  invertible function  bijective function  injective function  surjective function  one-to-one function  onto function  one-to-one correspondence   Let be a function.   The function is injective (or one-to-one ) if for all , if , then : equivalently, if , then .    The function is surjective (or onto ) if for all , there is an such that : equivalently, .    The function is bijective (or a one-to-one correspondence ) if it is injective and surjective.        Role of domain and codomain in injectivity and surjectivity   Consider the following three functions . Although all three functions are defined using the same rule ( ), they are not equal thanks to their differing domains and\/or codomains. The choice of domain and codomain in these examples also plays a crucial role in determining whether the function is injective and\/or surjective. The function is neither injective ( ) nor surjective ( ); the function is injective but not surjective; the function is both injective and surjective, hence bijective.     Function composition  function composition    the composition of and    Suppose and are functions satisfying . The composition of and is the function defined as , for all .     function invertible  function inverse  function identity  Identity and inverse functions   For any set the identity function on is the function defined as for all .  A function is invertible if there is a function satisfying and : , . The function in this case is called the inverse of , denoted .    Invertible is equivalent to bijective   A function is invertible if and only if it is bijective.     The proof of this theorem is left as an example of proving if and only if statements. See .      Let . Find each set.                 is not one-to-one, you can not simply plug the endpoints of the interval into the function to get the endpoints of the answer. Instead, try graphing the function and shading on the -axis the input set. Then use the graph to see which -values you get out when you put those 's in. For instance, notice that . Because , you should have . Do you?        For each of the following functions, state whether they are one-to-one, onto, both or neither. Use the following key:                                Consider the functions , , , , , and .  Which of these functions are inverses of each other?    and    and    and    and    and    and    and    and    No pairs of these functions are inverses of each other.     SOLUTION One way we can check which functions are inverses is to make sure they satisfy the identities and . This will show that and and and are inverses of each other, while the other pairs of functions are not. Let's consider and . The composition Also, Thus these are inverses of one another. We can similarly show that and are inverses of each other. However, the remaining pairs are not inverses. For example, if we consider and , we have Thus these functions are not inverses of each other.        "
},
{
  "id": "d_function",
  "level": "2",
  "url": "s_functions.html#d_function",
  "type": "Definition",
  "number": "0.2.1",
  "title": "Functions.",
  "body": " Functions  function    a function from to    Let and be two sets. A function from to , denoted , is a rule which, given any input  , returns an output  . In this case we write and call the image of under , or the value of at  . Similarly, we say  maps (or sends ) the input to the output .  The set is called the domain of ; the set is called the codomain of .  When we wish to indicate what rule defines the function, we use the elaborated notation . This is read as The function with domain and codomain maps an input to the output .   "
},
{
  "id": "s_functions-3",
  "level": "2",
  "url": "s_functions.html#s_functions-3",
  "type": "Example",
  "number": "0.2.2",
  "title": "",
  "body": "  Consider the function . This function has domain and codomain equal to and maps an integer to its square.   "
},
{
  "id": "s_functions-4",
  "level": "2",
  "url": "s_functions.html#s_functions-4",
  "type": "Example",
  "number": "0.2.3",
  "title": "Arithmetic operations as functions.",
  "body": " Arithmetic operations as functions   Our familiar arithmetic operations can be expressed as functions whose inputs are pairs of numbers: addition is the function and multiplication is the function    "
},
{
  "id": "rm_function_as_relation",
  "level": "2",
  "url": "s_functions.html#rm_function_as_relation",
  "type": "Remark",
  "number": "0.2.4",
  "title": "",
  "body": "  Invoking the notion of a rule in the definition of a function is admittedly somewhat vague. A more precise definition can be given using the Cartesian product. Namely, given sets and , we define a function to be a subset satisfying the following property: for all there is a unique element . The uniqueness of the pair then allows us to define the value of at as , denoted .   "
},
{
  "id": "d_function_equality",
  "level": "2",
  "url": "s_functions.html#d_function_equality",
  "type": "Definition",
  "number": "0.2.5",
  "title": "Function equality.",
  "body": " Function equality  function equality   Functions and are equal if   they have the same domain and codomain , and    for all , we have .      "
},
{
  "id": "d_image",
  "level": "2",
  "url": "s_functions.html#d_image",
  "type": "Definition",
  "number": "0.2.6",
  "title": "Image of a set.",
  "body": " Image of a set  function image of a set  function image    image of the set under     image of a function    Given a function and a subset , the image of under , denoted , is defined as . In other words, is the set of all outputs , where .  The image of , denoted , is the set of all outputs of : , .   "
},
{
  "id": "d_injective_surjective_bijective",
  "level": "2",
  "url": "s_functions.html#d_injective_surjective_bijective",
  "type": "Definition",
  "number": "0.2.7",
  "title": "Injective, surjective, bijective.",
  "body": " Injective, surjective, bijective  invertible function  bijective function  injective function  surjective function  one-to-one function  onto function  one-to-one correspondence   Let be a function.   The function is injective (or one-to-one ) if for all , if , then : equivalently, if , then .    The function is surjective (or onto ) if for all , there is an such that : equivalently, .    The function is bijective (or a one-to-one correspondence ) if it is injective and surjective.      "
},
{
  "id": "s_functions-10",
  "level": "2",
  "url": "s_functions.html#s_functions-10",
  "type": "Example",
  "number": "0.2.8",
  "title": "Role of domain and codomain in injectivity and surjectivity.",
  "body": " Role of domain and codomain in injectivity and surjectivity   Consider the following three functions . Although all three functions are defined using the same rule ( ), they are not equal thanks to their differing domains and\/or codomains. The choice of domain and codomain in these examples also plays a crucial role in determining whether the function is injective and\/or surjective. The function is neither injective ( ) nor surjective ( ); the function is injective but not surjective; the function is both injective and surjective, hence bijective.   "
},
{
  "id": "d_function_composition",
  "level": "2",
  "url": "s_functions.html#d_function_composition",
  "type": "Definition",
  "number": "0.2.9",
  "title": "Function composition.",
  "body": " Function composition  function composition    the composition of and    Suppose and are functions satisfying . The composition of and is the function defined as , for all .   "
},
{
  "id": "d_invertible_function",
  "level": "2",
  "url": "s_functions.html#d_invertible_function",
  "type": "Definition",
  "number": "0.2.10",
  "title": "Identity and inverse functions.",
  "body": " function invertible  function inverse  function identity  Identity and inverse functions   For any set the identity function on is the function defined as for all .  A function is invertible if there is a function satisfying and : , . The function in this case is called the inverse of , denoted .  "
},
{
  "id": "th_invertible_bijective",
  "level": "2",
  "url": "s_functions.html#th_invertible_bijective",
  "type": "Theorem",
  "number": "0.2.11",
  "title": "Invertible is equivalent to bijective.",
  "body": " Invertible is equivalent to bijective   A function is invertible if and only if it is bijective.   "
},
{
  "id": "s_functions-14",
  "level": "2",
  "url": "s_functions.html#s_functions-14",
  "type": "Proof",
  "number": "0.2.1",
  "title": "",
  "body": " The proof of this theorem is left as an example of proving if and only if statements. See .  "
},
{
  "id": "s_functions_ex-1",
  "level": "2",
  "url": "s_functions.html#s_functions_ex-1",
  "type": "Exercise",
  "number": "0.2.1",
  "title": "",
  "body": "  Let . Find each set.                 is not one-to-one, you can not simply plug the endpoints of the interval into the function to get the endpoints of the answer. Instead, try graphing the function and shading on the -axis the input set. Then use the graph to see which -values you get out when you put those 's in. For instance, notice that . Because , you should have . Do you?     "
},
{
  "id": "s_functions_ex-2",
  "level": "2",
  "url": "s_functions.html#s_functions_ex-2",
  "type": "Exercise",
  "number": "0.2.2",
  "title": "",
  "body": "  For each of the following functions, state whether they are one-to-one, onto, both or neither. Use the following key:                             "
},
{
  "id": "s_functions_ex-3",
  "level": "2",
  "url": "s_functions.html#s_functions_ex-3",
  "type": "Exercise",
  "number": "0.2.3",
  "title": "",
  "body": "  Consider the functions , , , , , and .  Which of these functions are inverses of each other?    and    and    and    and    and    and    and    and    No pairs of these functions are inverses of each other.     SOLUTION One way we can check which functions are inverses is to make sure they satisfy the identities and . This will show that and and and are inverses of each other, while the other pairs of functions are not. Let's consider and . The composition Also, Thus these are inverses of one another. We can similarly show that and are inverses of each other. However, the remaining pairs are not inverses. For example, if we consider and , we have Thus these functions are not inverses of each other.     "
},
{
  "id": "s_tuples",
  "level": "1",
  "url": "s_tuples.html",
  "type": "Section",
  "number": "0.3",
  "title": "Tuples and Cartesian products",
  "body": " Tuples and Cartesian products   We now introduce the notion of a tuple , which is a formal description of an ordered collection of objects.    tuple finite    -tuple   -tuple   Let be a set, and fix a positive integer . An -tuple (or sequence of length ) of elements of is an ordered sequence where for all .  We define two -tuples , and to be equal, denoted , if for all .  We call the length of the tuple , and for each we call its -th entry or coordinate .      We have more suggestive names for -tuples when is small: a 2-tuple is called a pair, a 3-tuple is called a triple, a 4-tuple is called a quadruple, . We will use the generic term tuple to designate a -tuple of unspecified length.      Observe how tuples capture the notion of an ordered collection of objects. For example, whereas the sets and are equal to one another, the 4-tuples and are not.  What about the tuples and ? Are these equal? Technically our definition of equality only applies to tuples living in the same fixed Cartesian product. In particular, for the question of equality to make sense, the tuples must have the same length. As such we will officially avoid writing things like , although unofficially we consider these two objects as completely different. You should think of and as creatures living on two different planets in the universe of tuples.     Cartesian product finite      Cartesian product   Cartesian product (finite)   Let be subsets of a common set . The (Cartesian) product of , denoted or , is the set . In other words is the set of all -tuples of whose -th coordinate lies in for all .  Given a set , its -ary Cartesian product  is defined as .    The notion of Cartesian product can be generalized to an infinite list of sets , and indeed to any collection indexed by a set . This is accomplished by looking at tuples in a slightly different manner: namely, we can describe a tuple as an assignment to each distinct element an element that we call the coordinate of . In other words, a tuple is just a function that assigns to each in our index set  an element . This notion generalize easily by replacing the finite index set with an arbitrary set (finite or infinite).   tuple arbitrary    -tuple   I-tuple   Let be a set. Given a set , an -tuple of elements of is a function . Given an -tuple and element we will often denote the value as , and denote itself as . In analogy to finite tuples, we call the -th entry or coordinate of .     Cartesian product arbitrary    Cartesian product of the sets   Cartesian product (arbitrary)   Let be a set, and let be a collection of subsets indexed by the set . The Cartesian product  of this collection is defined as . In other words, the Cartesian product is the set of all -tuples of elements of whose -th coordinate is an element of for all .  In the special case where for all , we denote as .    "
},
{
  "id": "d_tuple",
  "level": "2",
  "url": "s_tuples.html#d_tuple",
  "type": "Definition",
  "number": "0.3.1",
  "title": "<span class=\"process-math\">\\(n\\)<\/span>-tuple.",
  "body": " tuple finite    -tuple   -tuple   Let be a set, and fix a positive integer . An -tuple (or sequence of length ) of elements of is an ordered sequence where for all .  We define two -tuples , and to be equal, denoted , if for all .  We call the length of the tuple , and for each we call its -th entry or coordinate .   "
},
{
  "id": "rm_pairs_triples",
  "level": "2",
  "url": "s_tuples.html#rm_pairs_triples",
  "type": "Remark",
  "number": "0.3.2",
  "title": "",
  "body": "  We have more suggestive names for -tuples when is small: a 2-tuple is called a pair, a 3-tuple is called a triple, a 4-tuple is called a quadruple, . We will use the generic term tuple to designate a -tuple of unspecified length.   "
},
{
  "id": "rm_tuple_ordered",
  "level": "2",
  "url": "s_tuples.html#rm_tuple_ordered",
  "type": "Remark",
  "number": "0.3.3",
  "title": "",
  "body": "  Observe how tuples capture the notion of an ordered collection of objects. For example, whereas the sets and are equal to one another, the 4-tuples and are not.  What about the tuples and ? Are these equal? Technically our definition of equality only applies to tuples living in the same fixed Cartesian product. In particular, for the question of equality to make sense, the tuples must have the same length. As such we will officially avoid writing things like , although unofficially we consider these two objects as completely different. You should think of and as creatures living on two different planets in the universe of tuples.   "
},
{
  "id": "d_cartesian_product",
  "level": "2",
  "url": "s_tuples.html#d_cartesian_product",
  "type": "Definition",
  "number": "0.3.4",
  "title": "Cartesian product (finite).",
  "body": " Cartesian product finite      Cartesian product   Cartesian product (finite)   Let be subsets of a common set . The (Cartesian) product of , denoted or , is the set . In other words is the set of all -tuples of whose -th coordinate lies in for all .  Given a set , its -ary Cartesian product  is defined as .   "
},
{
  "id": "d_Ituple",
  "level": "2",
  "url": "s_tuples.html#d_Ituple",
  "type": "Definition",
  "number": "0.3.5",
  "title": "I-tuple.",
  "body": " tuple arbitrary    -tuple   I-tuple   Let be a set. Given a set , an -tuple of elements of is a function . Given an -tuple and element we will often denote the value as , and denote itself as . In analogy to finite tuples, we call the -th entry or coordinate of .   "
},
{
  "id": "d_cartesian_product_arbitrary",
  "level": "2",
  "url": "s_tuples.html#d_cartesian_product_arbitrary",
  "type": "Definition",
  "number": "0.3.6",
  "title": "Cartesian product (arbitrary).",
  "body": " Cartesian product arbitrary    Cartesian product of the sets   Cartesian product (arbitrary)   Let be a set, and let be a collection of subsets indexed by the set . The Cartesian product  of this collection is defined as . In other words, the Cartesian product is the set of all -tuples of elements of whose -th coordinate is an element of for all .  In the special case where for all , we denote as .   "
},
{
  "id": "s_logic",
  "level": "1",
  "url": "s_logic.html",
  "type": "Section",
  "number": "0.4",
  "title": "Logic",
  "body": " Logic   When dealing with mathematical statements and arguments, we must pay close attention to logical structure. This section introduces both logical connectors and quantifiers, and carefully describes how to determine the truth values of propositions built from these operations.    Propositional logic  A proposition is a sentence that is either true or false. We build compound propositions from component propositions using logical operators (or logical connectors ); the truth value of the compound proposition is defined as a function of the truth values of the component propositions.   Logical operators      Negation  Given a proposition , the negation of is the proposition Not , denoted in logical notation, the truth value of which is defined as follows: is true exactly when is false.    Conjunction (logical and)  Given propositions and , their conjuction is the proposition and , denoted in logical notation, the truth value of which is defined as follows: is true when both and are true, and false otherwise.    Disjunction (logical or)  Given propositions and , their disjunction is the proposition or , denoted in logical notation, the truth value of which is defined as follows: is true when at least one of and is true, and false otherwise.    Logical implication (if-then)  Given propositions and , the proposition If , then , denoted in logical notation, is called an implication , and its truth value is defined as follows: is false when is true and is false, and true otherwise.    Logical equivalence (if and only if)  Given propositions and , the proposition if and only if , denoted in logical notation, is called an equivalence , and its truth value is defined as follows: is true when and have the same truth value, and false otherwise. We say and are logically equivalent when is true.         A truth table of a compound proposition is a concise way of displaying how the truth value of depends on the truth values of its component propositions. It contains one row for each possible truth assignment of the component propositions. As illustration, we give the truth tables for the logical operators defined above:       Use a truth table to find all truth value assignments of and making the compound proposition false.    We construct a truth table with columns for , , , , and : . We conclude that is false exactly when is false and is true. (It follows that is equivalent to . )      Our definitions of the logical operators above are chosen to agree with their usage in a very particular type of discourse: namely, mathematical discourse. They do not always agree with their use in natural language: hence the modifier logical in their titles.  For example, disjunctions in natural language of the form or are often understood to be true when is true or is true, but not both . This notion of disjunction is called the exclusive or in logic, in contrast to the standard logical or.  Similarly, according to our definition, the implication If the President of the US is a dog, then the Vice President of the US is a cat is true, since the proposition The President of the US is a dog is false. (In logic we say the implication is vacuously true in this case.) However, working outside of our logical definitions of truth value, we may have been inclined to treat this implication as false, since both The President of the US is a dog and The Vice President of the US is a cat are false.      Predicate logic  Propositions like All humans are mortal and Every positive real number has a square-root are modeled in logic in the form For all , and For all , there exists an such that , where stands for the phrase is mortal and stands for the phrase is a square-root of . Observe that and on their own are not propositions; there is no truth value to is mortal or is a square-root of . Instead, we think of and as functions which return propositions when evaluated at a specific choice for , or for and . For example, evaluating at yields the proposition Aaron Greicius is mortal , which happens to be true at the time of writing. Similarly evaluating at yields the proposition is a square-root of 2 , which happens to be false. In logic and are called propositional functions (also called predicates ): functions whose outputs are propositions.  The propositions For all , and For all , there exists an such that are obtained from and by bounding them with a series of quantifiers ( , for all , there exists an ). The definition below allows us to assign truth values to such propositions.   Logical quantifiers   Let be a set, and let be a propositional function that assigns to all elements the proposition . The set is called the domain of discourse of .    Universal quantifier  The proposition For all in , , denoted in logical notation, is called a universal quantification , and its truth value is defined as follows: is true if for all elements of , the proposition is true; it is false if there is some such that is false.    Existential quantifier  The proposition There exists an in such that , denoted in logical notation, is called an existential quantification , and its truth value is defined as follows: is true if there is some element of for which the proposition is true; it is false if is false for all .       Truth depends on domain of discourse   Just as a function is not properly defined before its domain is specified, we do not have a well-defined propositional function, nor well-defined truth values of propositions built from this propositional function, until its domain of discourse is given.  For example, let be x>0 . If we declare , then the proposition is true, since by definition every is positive. On the other hand, if we declare , the proposition is false since not all elements of are positive: indeed, is negative, making false.  Because of the important role played by the domain of discourse , we sometimes include it in our quantifier expressions: , , . Using this convention allows us to see more immediately that is true and is false.     Modeling Every positive number has a square-root   Model the sentence Every positive real number has a square-root in the form , where is a propositional function with domain of discourse . Determine the truth value of using .    Fix our domain of discourse to be . For any , let be the proposition that is a square-root of . Define to be the propositional function . Thus for any , is the proposition that if is positive, then has a square-root. It follows that is the proposition that for all real numbers , if is positive, then has a square-root. This is clearly equivalent to the proposition that every positive real number has a square-root, as desired.  Lastly, we use to show is true. Take any . The real number is either positive or not positive. If is not positive, then is false and hence , which is the implication , is true vacuously. If is positive, then is true, and is true, since has a square-root in this case: namely, . But if is true and is true, then the implication is true. We have proved is true for all . Thus is true.     Order of quantifiers matters   As illustrates, we can take a propositional function in two variables and quantify one of the two variables to obtain a propositional function in one variable: , or . Proceeding in this manner we engender propositions involving sequences of quantifiers. Mark well that the order of the quantifiers in such sequences is important!  For example, letting be is a square-root of with domain of discourse . The proposition says that every positive real number has a positive square-root (true); the proposition says that there is a positive real number that is the square-root of all real numbers (false).  In general to unpack a sequence of quantifiers we start from the leftmost quantifier and proceed to the right.     Negating quantifiers   Let be a propositional function with domain of discourse . According to a universal quantification is false if it is not the case that is true for all for all ; that is, if there is some such that is false. Letting be the propositional function defined as for all , we see that is false if and only if is true. This proves the equivalence . Similarly, we have . These equivalences can be understood as rules of negating quantifier statements. They can be summarized as follow: swap quantifiers and negate the predicate.     The example below taken from calculus nicely illustrates how to negate a proposition that involves a sequence of quantifiers.   The limit does not exist   Let be a function with domain , and let be a point of this domain. By definition, the proposition that exists is equivalent to the following proposition: . (We made a number of shortcuts in our logical notation above (  , ) in order to simplify the expression somewhat; the intended meaning should still be clear. )  Use the negation rules described in to derive a similar proposition equivalent to the statement that do not exist.    Let be the proposition in . Using the negation rules in series, we derive the chain of equivalences below (see ). We've added parentheses to emphasize what is being negated at each step. Note how a quantifiers are swapped each time we pass the negation to the right. . (The last link in our chain uses the fact that is equivalent to , as a truth table easily shows.) Translating back into English, we conclude that the limit not existing ( ) is equivalent to the following: for every there is an such that for all there exists an satisfying and . Quite a mouthful!        Assign truth values to the propositions and so that the given proposition is false. Use T for true and F for false.   Answer: P: Q: R:    F    No correct answer specified    F         Determine the truth value of the following statements if the universe of discourse is the set of real numbers.                             Let be the statement \" has a cat\", let be the statement \" has a dog\" and let be the statement \" has a ferret\". Express each of the following statements in terms of , , and , quantifiers, and logical connectives. Let the universe of discourse consist of all students in your class. Put the appropriate letter next to the corresponding symbolic form.                   a) A student in your class has a cat, a dog, and a ferret.  b) All students in your class have a cat, a dog, or a ferret.  c) Some student in your class has a cat and a ferret but not a dog.  d) No student in this class has a cat, a dog, and a ferret.  e) For each of the three animals, cats, dogs, and ferrets, there is a student in your class who has one of these animals.         Let P(x) be the statement \"x is a duck\", let Q(x) be the statement \"x is one of my poultry\", let R(x) be the statement \"x is an officer\", and let S(x) be the statement \"x is willing to waltz\". Express each of the following statements in terms of P(x), Q(x), R(x) and S(x), quantifiers, and logical connectives. Let the universe of discourse consist of all living creatures. Put the appropriate letter next to the corresponding symbolic form.                   a) Some ducks are not willing to waltz.  b) No ducks are willing to waltz.  c) No officers ever decline to waltz.  d) All my poultry are ducks.  e) My poultry are not officers.         Determine whether the given proposition is true or false, for the universe of all real numbers. Use T for true and F for false.   Answer:   Answer:   Answer:   Answer:   Answer:    T    F    T    F    T         Suppose is an indexed family of sets. For each statement below, write the letter of the equivalent symbolic form.    for every       for some                      "
},
{
  "id": "d_logical_ops",
  "level": "2",
  "url": "s_logic.html#d_logical_ops",
  "type": "Definition",
  "number": "0.4.1",
  "title": "Logical operators.",
  "body": " Logical operators      Negation  Given a proposition , the negation of is the proposition Not , denoted in logical notation, the truth value of which is defined as follows: is true exactly when is false.    Conjunction (logical and)  Given propositions and , their conjuction is the proposition and , denoted in logical notation, the truth value of which is defined as follows: is true when both and are true, and false otherwise.    Disjunction (logical or)  Given propositions and , their disjunction is the proposition or , denoted in logical notation, the truth value of which is defined as follows: is true when at least one of and is true, and false otherwise.    Logical implication (if-then)  Given propositions and , the proposition If , then , denoted in logical notation, is called an implication , and its truth value is defined as follows: is false when is true and is false, and true otherwise.    Logical equivalence (if and only if)  Given propositions and , the proposition if and only if , denoted in logical notation, is called an equivalence , and its truth value is defined as follows: is true when and have the same truth value, and false otherwise. We say and are logically equivalent when is true.      "
},
{
  "id": "rm_truth_tables",
  "level": "2",
  "url": "s_logic.html#rm_truth_tables",
  "type": "Remark",
  "number": "0.4.2",
  "title": "",
  "body": "  A truth table of a compound proposition is a concise way of displaying how the truth value of depends on the truth values of its component propositions. It contains one row for each possible truth assignment of the component propositions. As illustration, we give the truth tables for the logical operators defined above:    "
},
{
  "id": "ss_propositional_calculus-5",
  "level": "2",
  "url": "s_logic.html#ss_propositional_calculus-5",
  "type": "Example",
  "number": "0.4.3",
  "title": "",
  "body": "  Use a truth table to find all truth value assignments of and making the compound proposition false.    We construct a truth table with columns for , , , , and : . We conclude that is false exactly when is false and is true. (It follows that is equivalent to . )   "
},
{
  "id": "rm_logic_vs_vernacular",
  "level": "2",
  "url": "s_logic.html#rm_logic_vs_vernacular",
  "type": "Remark",
  "number": "0.4.4",
  "title": "",
  "body": "  Our definitions of the logical operators above are chosen to agree with their usage in a very particular type of discourse: namely, mathematical discourse. They do not always agree with their use in natural language: hence the modifier logical in their titles.  For example, disjunctions in natural language of the form or are often understood to be true when is true or is true, but not both . This notion of disjunction is called the exclusive or in logic, in contrast to the standard logical or.  Similarly, according to our definition, the implication If the President of the US is a dog, then the Vice President of the US is a cat is true, since the proposition The President of the US is a dog is false. (In logic we say the implication is vacuously true in this case.) However, working outside of our logical definitions of truth value, we may have been inclined to treat this implication as false, since both The President of the US is a dog and The Vice President of the US is a cat are false.   "
},
{
  "id": "d_quantifiers",
  "level": "2",
  "url": "s_logic.html#d_quantifiers",
  "type": "Definition",
  "number": "0.4.5",
  "title": "Logical quantifiers.",
  "body": " Logical quantifiers   Let be a set, and let be a propositional function that assigns to all elements the proposition . The set is called the domain of discourse of .    Universal quantifier  The proposition For all in , , denoted in logical notation, is called a universal quantification , and its truth value is defined as follows: is true if for all elements of , the proposition is true; it is false if there is some such that is false.    Existential quantifier  The proposition There exists an in such that , denoted in logical notation, is called an existential quantification , and its truth value is defined as follows: is true if there is some element of for which the proposition is true; it is false if is false for all .     "
},
{
  "id": "rm_domain_discourse",
  "level": "2",
  "url": "s_logic.html#rm_domain_discourse",
  "type": "Remark",
  "number": "0.4.6",
  "title": "Truth depends on domain of discourse.",
  "body": " Truth depends on domain of discourse   Just as a function is not properly defined before its domain is specified, we do not have a well-defined propositional function, nor well-defined truth values of propositions built from this propositional function, until its domain of discourse is given.  For example, let be x>0 . If we declare , then the proposition is true, since by definition every is positive. On the other hand, if we declare , the proposition is false since not all elements of are positive: indeed, is negative, making false.  Because of the important role played by the domain of discourse , we sometimes include it in our quantifier expressions: , , . Using this convention allows us to see more immediately that is true and is false.   "
},
{
  "id": "ex_model_quant",
  "level": "2",
  "url": "s_logic.html#ex_model_quant",
  "type": "Example",
  "number": "0.4.7",
  "title": "Modeling “Every positive number has a square-root”.",
  "body": " Modeling Every positive number has a square-root   Model the sentence Every positive real number has a square-root in the form , where is a propositional function with domain of discourse . Determine the truth value of using .    Fix our domain of discourse to be . For any , let be the proposition that is a square-root of . Define to be the propositional function . Thus for any , is the proposition that if is positive, then has a square-root. It follows that is the proposition that for all real numbers , if is positive, then has a square-root. This is clearly equivalent to the proposition that every positive real number has a square-root, as desired.  Lastly, we use to show is true. Take any . The real number is either positive or not positive. If is not positive, then is false and hence , which is the implication , is true vacuously. If is positive, then is true, and is true, since has a square-root in this case: namely, . But if is true and is true, then the implication is true. We have proved is true for all . Thus is true.   "
},
{
  "id": "warning_order_quantifiers",
  "level": "2",
  "url": "s_logic.html#warning_order_quantifiers",
  "type": "Warning",
  "number": "0.4.8",
  "title": "Order of quantifiers matters.",
  "body": " Order of quantifiers matters   As illustrates, we can take a propositional function in two variables and quantify one of the two variables to obtain a propositional function in one variable: , or . Proceeding in this manner we engender propositions involving sequences of quantifiers. Mark well that the order of the quantifiers in such sequences is important!  For example, letting be is a square-root of with domain of discourse . The proposition says that every positive real number has a positive square-root (true); the proposition says that there is a positive real number that is the square-root of all real numbers (false).  In general to unpack a sequence of quantifiers we start from the leftmost quantifier and proceed to the right.   "
},
{
  "id": "rm_negating_quantifiers",
  "level": "2",
  "url": "s_logic.html#rm_negating_quantifiers",
  "type": "Remark",
  "number": "0.4.9",
  "title": "Negating quantifiers.",
  "body": " Negating quantifiers   Let be a propositional function with domain of discourse . According to a universal quantification is false if it is not the case that is true for all for all ; that is, if there is some such that is false. Letting be the propositional function defined as for all , we see that is false if and only if is true. This proves the equivalence . Similarly, we have . These equivalences can be understood as rules of negating quantifier statements. They can be summarized as follow: swap quantifiers and negate the predicate.    "
},
{
  "id": "ex_limit_doesnt_exist",
  "level": "2",
  "url": "s_logic.html#ex_limit_doesnt_exist",
  "type": "Example",
  "number": "0.4.10",
  "title": "The limit does not exist.",
  "body": " The limit does not exist   Let be a function with domain , and let be a point of this domain. By definition, the proposition that exists is equivalent to the following proposition: . (We made a number of shortcuts in our logical notation above (  , ) in order to simplify the expression somewhat; the intended meaning should still be clear. )  Use the negation rules described in to derive a similar proposition equivalent to the statement that do not exist.    Let be the proposition in . Using the negation rules in series, we derive the chain of equivalences below (see ). We've added parentheses to emphasize what is being negated at each step. Note how a quantifiers are swapped each time we pass the negation to the right. . (The last link in our chain uses the fact that is equivalent to , as a truth table easily shows.) Translating back into English, we conclude that the limit not existing ( ) is equivalent to the following: for every there is an such that for all there exists an satisfying and . Quite a mouthful!   "
},
{
  "id": "s_logic_ex-1",
  "level": "2",
  "url": "s_logic.html#s_logic_ex-1",
  "type": "Exercise",
  "number": "0.4.3.1",
  "title": "",
  "body": "  Assign truth values to the propositions and so that the given proposition is false. Use T for true and F for false.   Answer: P: Q: R:    F    No correct answer specified    F      "
},
{
  "id": "s_logic_ex-2",
  "level": "2",
  "url": "s_logic.html#s_logic_ex-2",
  "type": "Exercise",
  "number": "0.4.3.2",
  "title": "",
  "body": "  Determine the truth value of the following statements if the universe of discourse is the set of real numbers.                          "
},
{
  "id": "s_logic_ex-3",
  "level": "2",
  "url": "s_logic.html#s_logic_ex-3",
  "type": "Exercise",
  "number": "0.4.3.3",
  "title": "",
  "body": "  Let be the statement \" has a cat\", let be the statement \" has a dog\" and let be the statement \" has a ferret\". Express each of the following statements in terms of , , and , quantifiers, and logical connectives. Let the universe of discourse consist of all students in your class. Put the appropriate letter next to the corresponding symbolic form.                   a) A student in your class has a cat, a dog, and a ferret.  b) All students in your class have a cat, a dog, or a ferret.  c) Some student in your class has a cat and a ferret but not a dog.  d) No student in this class has a cat, a dog, and a ferret.  e) For each of the three animals, cats, dogs, and ferrets, there is a student in your class who has one of these animals.      "
},
{
  "id": "s_logic_ex-4",
  "level": "2",
  "url": "s_logic.html#s_logic_ex-4",
  "type": "Exercise",
  "number": "0.4.3.4",
  "title": "",
  "body": "  Let P(x) be the statement \"x is a duck\", let Q(x) be the statement \"x is one of my poultry\", let R(x) be the statement \"x is an officer\", and let S(x) be the statement \"x is willing to waltz\". Express each of the following statements in terms of P(x), Q(x), R(x) and S(x), quantifiers, and logical connectives. Let the universe of discourse consist of all living creatures. Put the appropriate letter next to the corresponding symbolic form.                   a) Some ducks are not willing to waltz.  b) No ducks are willing to waltz.  c) No officers ever decline to waltz.  d) All my poultry are ducks.  e) My poultry are not officers.      "
},
{
  "id": "s_logic_ex-5",
  "level": "2",
  "url": "s_logic.html#s_logic_ex-5",
  "type": "Exercise",
  "number": "0.4.3.5",
  "title": "",
  "body": "  Determine whether the given proposition is true or false, for the universe of all real numbers. Use T for true and F for false.   Answer:   Answer:   Answer:   Answer:   Answer:    T    F    T    F    T      "
},
{
  "id": "s_logic_ex-6",
  "level": "2",
  "url": "s_logic.html#s_logic_ex-6",
  "type": "Exercise",
  "number": "0.4.3.6",
  "title": "",
  "body": "  Suppose is an indexed family of sets. For each statement below, write the letter of the equivalent symbolic form.    for every       for some                   "
},
{
  "id": "s_proof_technique",
  "level": "1",
  "url": "s_proof_technique.html",
  "type": "Section",
  "number": "0.5",
  "title": "Proof techniques",
  "body": " Proof techniques  Proof writing is an art, a technical skill you will hone and refine throughout your career; and like any art, proof writing has many tricks of the trade. We gather a few here in the form of a collection of general proof techniques. Part of mastering these techniques involves understanding the circumstances where they can be of use. When selecting a technique, we are guided in part by the logical structure and particular mathematical content of the proposition under consideration. The proof techniques below are organized under this guiding principle.   Logical structure   Implication  By the only time an implication is false is when is true and is false. Accordingly, the direct approach to proving an implication is to assume is true, and use this assumption to prove is true.  A common indirect approach used to prove an implication is to prove its contrapositive  , which is logically equivalent to the original implication. In this case we assume is not true, and show is not true. (Exercise: use a truth table to show the contrapositive is logically equivalent to the original implication.)    The converse of an implication is the implication ; the inverse of is the implication . Neither the converse nor the inverse is equivalent to the original implication, and thus neither of these can be used to give an indirect proof of . (Exercise: use a truth table to show that neither the converse nor the inverse implication is logically equivalent to the original implication. )      Disjunction  Again, using , to directly show a disjunction is true, we need only show one the two component propositions is true.  Alternatively, we can prove either of the implications or , both of which are logically equivalent to . (Exercise: use a truth table to show these three propositions are indeed equivalent!)    Equivalence  The equivalence is logically equivalent to the conjunction . Accordingly, the standard way of proving is to prove the two implications and separately. (Exercise: use a truth table to show these propositions are indeed equivalent!)    Chains of implications\/equivalences  The relation implies is transitive: , if and , then . Similarly, the relation is equivalent to is transitive. This allows us to prove an implication or equivalence via a chain of implications or chain of equivalences . When writing up a proof using this technique, use a vertically aligned format like the example below, treating one implication or equivalence per line, and adding a brief justification to the right: . It is also possible to build an argument as a hybrid chain of equivalences and implications. In this case the chain is only as strong as its weakest link. For example, a chain of the form only shows that . Indeed, we will have if and only if the intervening implication is in fact an equivalence ( , the arrow goes both ways).    It is often tempting, for the sake of space, to try and prove an equivalence via a chain of equivalences, as opposed to showing and separately. When proceeding in this manner, make doubly sure that each is indeed an equivalence: , that the implication arrow really goes both ways at each step. Even if each step in your chain truly is an equivalence, you should consider whether this will be obvious to your reader.    The example below provides the proof that a function is invertible if and only if it is bijective ( ). The proof nicely illustrates some of the different techniques used for proving implications and equivalences. Additionally, it is a nice example of how to separate out cases of the argument into clearly distinguished steps.   Proof: invertible is equivalent to bijective   Let be a function. Prove: is invertible if and only if is bijective.    Let be the proposition that is invertible, and let be the proposition that is bijective. We prove the equivalence by proving the two implications and .   Proof of  We must show that if is invertible, then is bijective. Assume is invertible. Then has an inverse . We show separately that is injective and surjective, hence bijective.   is injective  We show via a chain of implications: .    is surjective  Let be an element of . We must show that there is an such that . Letting , we have .     Proof of  We must show that if is bijective, then is invertible. Assume is bijective. First we define a function as follows: for all , let be the unique element such that . Note that our definition of uses both that is surjective (there is some element such that )) and injective (there is exactly one element such that ).  We now prove that is the inverse of , showing and separately.    Take any and let . By definition of , we have and hence . This proves .     Take any . By definition of , is the unique such that . Thus . This proves .        Proof by contradiction  The technique of proof by contradiction (or reductio ad absurdum ) proves a proposition by (a) assuming the negation is true, and then (b) using this assumption to derive a proposition known to be false. The choice of falsehood is completely up to the person providing the proof. However, in order for the proof to be convincing, it should be clear, either logically or because of theory assumed to be known, that is indeed false.   Proof by contradiction   Prove by contradiction that has no multiplicative inverse in the reals: , there is no such that .    We prove the claim by contradiction. Assume there is an such that . Since for any (a property of multiplication by 0), we have : a contradiction since . We conclude that there is no such that .      Proof by contradiction resembles, but is not quite the same thing as proving an implication via its contrapositive. Letting denote an arbitrary falsehood (the described above) what we do in a proof by contradiction is show that the implication is true. Since is false, and the implication is true, must be false: equivalently, must be true.       Equalities   Equality is not as simple as it may seem. In general an equality is a mathematical statement of the form . Here LHS and RHS stand for left- and right-hand side, respectively. What exactly such an equality means depends very much on what kind of mathematical objects the two sides of the equation are: , numbers, sets, functions, etc. Below we discuss equality for objects of a particular type in detail. (See and .) In all settings, the notion of equality will be transitive : , if and , then . We use transitivity implicitly when proving an equality via a chain of equalities as described below.    Chain of equalities Often to prove an equality as in we proceed in a sequence of intervening bite-size equalities, each of which is easy for the reader to digest. As with chains of implications\/equivalences, we present such an argument in a vertically aligned format, with brief justifications to the right: .  Never attempt to prove an equality by starting off with the equality you wish to prove, and then deduce a series of further equalities ending in some inanity: , . What this suggests is that you are in fact proving an implication: namely, if the desired equality is true, then  . Clearly this is not what we set out to prove! This type of fallacious argument is called begging the question ( petitio princippii in Latin), as we assume that which was to be proven.      Basic set properties   Set inclusion  Let and be sets. By , to prove we must show that for all elements we have . This requires proving the implication above for a general element , and we may use any of the techniques described in and to do so.    Set equality  Let and be sets. To prove directly using we must show that for all elements we have . To prove this universal equivalence, we must give an argument for the equivalence that holds for a general element .  Alternatively, you can prove by proving the two set inclusions and separately. This is equivalent to proving the two implications and separately.     Basic function properties   Function equality  According to , in order to show functions and are equal we must   show that and have the same domain and codomain , and    show that for all .   The universal quantifier for all of item (ii) gives this subtask the feel of proving an identity : we must show that equality holds for all  . By the same token, to show (ii) does not hold, it suffices to show that for some .    Injective, surjective, bijective  Let be a function.   Injectivity  To show is injective, we must show that the implication holds for all . Frequently it will be convenient to prove the (universal) contrapositive: for all .  Similarly, to show is not injective, we simply have to find satisfying and .    Surjectivity  To prove is surjective, we must prove the universal quantification: . To prove is not surjective, we must prove the negation of this proposition ( ): , there exists a for which there is no with .    Bijectivity  To show is bijective directly using , we must show that is injective and surjective. This is equivalent to showing that for there exists a unique element such that .  Alternatively, using we can show that is bijective by providing an inverse function .      mathematical induction  Mathematical induction    Mathematical induction is a technique for proving universal quantifications of the form , where is a fixed starting integer, called the base , and is a predicate defined on the integers. If the setting makes clear that ranges over integers, we write such propositions using logical notation as .    mathematical induction weak induction  Proof by induction  Suppose is a predicate of integers. To prove the proposition by induction (sometimes called weak induction ), we proceed in two steps.   Base step  Show that is true.    Induction step  Prove the universal implication . In practice, if proving the implication directly, this means we assume is true (the induction hypothesis ), and use this assumption to show is true.    Step 0 of induction   When meeting a proposition in the wild that we wish to prove by induction, you should first take care to model the proposition in the form . Make explicit the predicate in question, as well as the base case . We illustrate this preparatory Step 0 in the examples below.     Weak induction   Prove the identity for all . Recall: .    We prove the proposition by induction.   Step 0: preparation  The proposition is modeled logically as , where is the proposition that .    Base step:  The proposition is the statement that , which is clearly true.    Induction step  We must show the universal implication . Let , and assume is true: , The proposition states that . We prove this, assuming , via a chain of equalities: , as desired.   Having completed our base and induction steps, our proof is now finished.    So why does proof by induction work? In other words, why is it a valid proof technique? Imagine our propositions as forming an infinite ladder that we wish to ascend. Cautious climbers that we are, we only will step on a rung if we know the corresponding proposition is true. Knowing is true (the base step) allows us to step onto the first rung. The universal implication (induction step) gives us a rule that says if rung is secure (i.e., true), then so is rung . Since this rule holds for all rungs (i.e., for all ), we can safely ascend the entire ladder!  Mathematical induction as ladder of propositions  Mathematical induction as ladder of propositions          mathematical induction strong induction  Proof by strong induction  Suppose is a predicate of integers. To prove the proposition by strong induction , we proceed in two steps.   Base step:  Show that is true.    Strong induction step  Prove the universal implication . This technique is called strong induction, as now the induction hypothesis is much stronger: to prove this implication directly we assume is true for all (not just as in weak induction), and use this assumption to show is true.   In fact, strong induction is, logically speaking, no stronger than weak induction. Both techniques apply to propositions of the form , and you are free to choose which form of induction to use each time. We typically use strong induction out of convenience, when the nature of the predicate is such that we can prove most elegantly by assuming , as opposed to just . The following example is characteristic in this regard.   Strong induction   Prove that every integer can be written as a product of primes.    We prove the statement by induction.   Step 0: preparation  The proposition is modeled logically as , where is the proposition that is a product of primes.    Base step:  The proposition asserts that is a product of primes. This is true since is itself prime, hence a product of one prime number.    Strong induction step  We must show the universal implication . Let , and assume is true for all : , for all such we assume can be written as a product of primes. We use this assumption to prove : , that is a product of primes. We proceed in two cases, depending on whether is itself prime.   Case 1: is prime  If is prime, then it is trivially a product of one prime number, just as with the base case.    Case2 : is not prime  If is not prime, then we can factor nontrivially as . Here nontrivially means that we have . Using the strong induction hypothesis, we may assume that and are both products of primes: , we have , where and are prime for all and . It follows that , and hence that is also a product of primes, as desired.    Having completed the base and induction steps, our proof by induction is now finished.      "
},
{
  "id": "sss_implication-4",
  "level": "2",
  "url": "s_proof_technique.html#sss_implication-4",
  "type": "Warning",
  "number": "0.5.1",
  "title": "",
  "body": "  The converse of an implication is the implication ; the inverse of is the implication . Neither the converse nor the inverse is equivalent to the original implication, and thus neither of these can be used to give an indirect proof of . (Exercise: use a truth table to show that neither the converse nor the inverse implication is logically equivalent to the original implication. )   "
},
{
  "id": "sss_logical_chains-3",
  "level": "2",
  "url": "s_proof_technique.html#sss_logical_chains-3",
  "type": "Warning",
  "number": "0.5.2",
  "title": "",
  "body": "  It is often tempting, for the sake of space, to try and prove an equivalence via a chain of equivalences, as opposed to showing and separately. When proceeding in this manner, make doubly sure that each is indeed an equivalence: , that the implication arrow really goes both ways at each step. Even if each step in your chain truly is an equivalence, you should consider whether this will be obvious to your reader.   "
},
{
  "id": "ex_invertible_bijective",
  "level": "2",
  "url": "s_proof_technique.html#ex_invertible_bijective",
  "type": "Example",
  "number": "0.5.3",
  "title": "Proof: invertible is equivalent to bijective.",
  "body": " Proof: invertible is equivalent to bijective   Let be a function. Prove: is invertible if and only if is bijective.    Let be the proposition that is invertible, and let be the proposition that is bijective. We prove the equivalence by proving the two implications and .   Proof of  We must show that if is invertible, then is bijective. Assume is invertible. Then has an inverse . We show separately that is injective and surjective, hence bijective.   is injective  We show via a chain of implications: .    is surjective  Let be an element of . We must show that there is an such that . Letting , we have .     Proof of  We must show that if is bijective, then is invertible. Assume is bijective. First we define a function as follows: for all , let be the unique element such that . Note that our definition of uses both that is surjective (there is some element such that )) and injective (there is exactly one element such that ).  We now prove that is the inverse of , showing and separately.    Take any and let . By definition of , we have and hence . This proves .     Take any . By definition of , is the unique such that . Thus . This proves .     "
},
{
  "id": "ex_proof_by_contradiction",
  "level": "2",
  "url": "s_proof_technique.html#ex_proof_by_contradiction",
  "type": "Example",
  "number": "0.5.4",
  "title": "Proof by contradiction.",
  "body": " Proof by contradiction   Prove by contradiction that has no multiplicative inverse in the reals: , there is no such that .    We prove the claim by contradiction. Assume there is an such that . Since for any (a property of multiplication by 0), we have : a contradiction since . We conclude that there is no such that .   "
},
{
  "id": "rm_proof_by_contradiction",
  "level": "2",
  "url": "s_proof_technique.html#rm_proof_by_contradiction",
  "type": "Remark",
  "number": "0.5.5",
  "title": "",
  "body": "  Proof by contradiction resembles, but is not quite the same thing as proving an implication via its contrapositive. Letting denote an arbitrary falsehood (the described above) what we do in a proof by contradiction is show that the implication is true. Since is false, and the implication is true, must be false: equivalently, must be true.   "
},
{
  "id": "sss_chain_equalities-4",
  "level": "2",
  "url": "s_proof_technique.html#sss_chain_equalities-4",
  "type": "Warning",
  "number": "0.5.6",
  "title": "",
  "body": " Never attempt to prove an equality by starting off with the equality you wish to prove, and then deduce a series of further equalities ending in some inanity: , . What this suggests is that you are in fact proving an implication: namely, if the desired equality is true, then  . Clearly this is not what we set out to prove! This type of fallacious argument is called begging the question ( petitio princippii in Latin), as we assume that which was to be proven.  "
},
{
  "id": "ss_mathematical_induction-3-1",
  "level": "2",
  "url": "s_proof_technique.html#ss_mathematical_induction-3-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "base "
},
{
  "id": "sss_weak_induction-3",
  "level": "2",
  "url": "s_proof_technique.html#sss_weak_induction-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "induction weak induction "
},
{
  "id": "sss_weak_induction-5-2",
  "level": "2",
  "url": "s_proof_technique.html#sss_weak_induction-5-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "induction hypothesis "
},
{
  "id": "rm_induction",
  "level": "2",
  "url": "s_proof_technique.html#rm_induction",
  "type": "Remark",
  "number": "0.5.7",
  "title": "“Step 0” of induction.",
  "body": " Step 0 of induction   When meeting a proposition in the wild that we wish to prove by induction, you should first take care to model the proposition in the form . Make explicit the predicate in question, as well as the base case . We illustrate this preparatory Step 0 in the examples below.   "
},
{
  "id": "eg_weak_induction",
  "level": "2",
  "url": "s_proof_technique.html#eg_weak_induction",
  "type": "Example",
  "number": "0.5.8",
  "title": "Weak induction.",
  "body": " Weak induction   Prove the identity for all . Recall: .    We prove the proposition by induction.   Step 0: preparation  The proposition is modeled logically as , where is the proposition that .    Base step:  The proposition is the statement that , which is clearly true.    Induction step  We must show the universal implication . Let , and assume is true: , The proposition states that . We prove this, assuming , via a chain of equalities: , as desired.   Having completed our base and induction steps, our proof is now finished.   "
},
{
  "id": "fig_proof_induction",
  "level": "2",
  "url": "s_proof_technique.html#fig_proof_induction",
  "type": "Figure",
  "number": "0.5.9",
  "title": "Mathematical induction as ladder of propositions",
  "body": " Mathematical induction as ladder of propositions  Mathematical induction as ladder of propositions     "
},
{
  "id": "sss_strong_induction-3",
  "level": "2",
  "url": "s_proof_technique.html#sss_strong_induction-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "strong induction "
},
{
  "id": "eg_strong_induction",
  "level": "2",
  "url": "s_proof_technique.html#eg_strong_induction",
  "type": "Example",
  "number": "0.5.10",
  "title": "Strong induction.",
  "body": " Strong induction   Prove that every integer can be written as a product of primes.    We prove the statement by induction.   Step 0: preparation  The proposition is modeled logically as , where is the proposition that is a product of primes.    Base step:  The proposition asserts that is a product of primes. This is true since is itself prime, hence a product of one prime number.    Strong induction step  We must show the universal implication . Let , and assume is true for all : , for all such we assume can be written as a product of primes. We use this assumption to prove : , that is a product of primes. We proceed in two cases, depending on whether is itself prime.   Case 1: is prime  If is prime, then it is trivially a product of one prime number, just as with the base case.    Case2 : is not prime  If is not prime, then we can factor nontrivially as . Here nontrivially means that we have . Using the strong induction hypothesis, we may assume that and are both products of primes: , we have , where and are prime for all and . It follows that , and hence that is also a product of primes, as desired.    Having completed the base and induction steps, our proof by induction is now finished.   "
},
{
  "id": "s_complex_numbers",
  "level": "1",
  "url": "s_complex_numbers.html",
  "type": "Section",
  "number": "0.6",
  "title": "Complex numbers",
  "body": " Complex numbers  In this section we begin with a brief treatment of the complex numbers . As mentioned below, you should think of the complex numbers as an additional link in our chain of number systems . One major advantage of working with is that any polynomial factors as a product of linear terms over ( ). This fact, along with a review of basic definitions and properties of polynomials, will be taken up in . This section is meant mainly as a reference, and as such all theorems will be stated without proof.   Definition of   The complex numbers constitute a number system built by taking the set of all pairs of real numbers and defining operations on these pairs that we call complex addition and complex multiplication .    complex numbers  complex numbers real part  complex numbers imaginary part    the complex numbers     real part of complex number     imaginary part of complex number   Complex numbers    complex numbers    The set of complex numbers is defined as the set of all pairs of real numbers: , . Given a complex number , its first entry is called the real part of , denoted , and its second entry is called the imaginary part of , denoted .     Henceforth we will primarily denote a complex number as . Since and , you can think of the notation as a decomposition of as a sum of its real and imaginary components. In what follows we give actual arithmetic meaning to the symbols and used in this notation, but first and foremost should simply be thought of as an alternative manner of denoting the pair .  Additionally we will adopt the following notational conventions: , , , , and .    Complex equality   When moving to the notation do not lose sight of the essential nature of complex numbers as pairs of real numbers. This is important, for example, for understanding what it means for complex numbers and to be equal. According to the general definition of equality for tuples ( ), we have .     complex numbers addition  complex numbers multiplication  Complex addition and multiplication   We define addition and multiplication operations on as follows. Let and , where .    Complex addition  The sum  is the complex number defined as .    Complex multiplication  The product  is the complex number defined as .        Let and . We have     Our first theorem indicates that complex addition and multiplication behave in much the same way as real addition and multiplication. A number system that satisfies the properties of is called a field . You should think of the field properties as guaranteeing that we can perform arithmetic in the complex numbers (or any fied) essentially as we do with real numbers.   Basic properties of complex arithmetic     Commutativity  For all we have .    Associativity  For all we have .    Distributivity  For all we have .    Additive identity  The complex number satisfies for all . We call the additive identity of .    Additive inverse  For all the element satisfies . We call the additive inverse of .    Multiplicative identity  The complex number satisfies for all . We call the multiplicative identity of .    Multiplicative inverse  For all nonzero complex numbers ( , of ), the complex number satisfies . The complex number , also denoted , is called the multiplicative inverse of .        Let . According to , the multiplicative inverse of is . Let's check that : .     Complex numbers as extension of the reals   From now on we identify the real numbers as the set of complex numbers of the form , where : equivalently, the set of complex numbers satisfying . Under this identification can be thought of as a subset of , and we may add one more link to the chain of subsets given in : . Furthermore, it is easy to verify that the various operations on agree with their real counterparts when restricting to : , . This allows us to think of the complex numbers as a larger number system containing the reals, whose arithmetic operations are extensions of real number operations.      Absolute value and complex conjugation   We end our introduction to the complex numbers with two further operations: the absolute value and complex conjugation . is an indication of their usefulness, and articulates how they interact with the other operations on .    complex numbers modulus  complex numbers absolute value  complex numbers conjugation  Absolute value and complex conjugation   Let be a complex number. The absolute value (or modulus ) of , denoted , is defined as . The complex conjugate of , denoted , is defined as .     Properties of conjugation and modulus   The following properties hold for all .    .    .     .     .     (if ).     .        Let . Observe that and , as claimed in .        Rewrite the following expression into the form of a+b :         By definition, , so we have .  To get rid of in the denominator, we use the difference of squares formula:   The full solution is:          Let . Calculate the following:  (a)     ,  (b)     ,  (c)     .                                       Evaluate the following expressions and write them in the form .   .   .   .   .   .                                  Calculate:  (a)  ,  (b)  ,  (c)  ,  (d)  .                            "
},
{
  "id": "d_complex_numbers",
  "level": "2",
  "url": "s_complex_numbers.html#d_complex_numbers",
  "type": "Definition",
  "number": "0.6.1",
  "title": "Complex numbers.",
  "body": " complex numbers  complex numbers real part  complex numbers imaginary part    the complex numbers     real part of complex number     imaginary part of complex number   Complex numbers    complex numbers    The set of complex numbers is defined as the set of all pairs of real numbers: , . Given a complex number , its first entry is called the real part of , denoted , and its second entry is called the imaginary part of , denoted .   "
},
{
  "id": "ss_complex_definition-4",
  "level": "2",
  "url": "s_complex_numbers.html#ss_complex_definition-4",
  "type": "Notation",
  "number": "0.6.2",
  "title": "",
  "body": " Henceforth we will primarily denote a complex number as . Since and , you can think of the notation as a decomposition of as a sum of its real and imaginary components. In what follows we give actual arithmetic meaning to the symbols and used in this notation, but first and foremost should simply be thought of as an alternative manner of denoting the pair .  Additionally we will adopt the following notational conventions: , , , , and .  "
},
{
  "id": "rm_complex_equality",
  "level": "2",
  "url": "s_complex_numbers.html#rm_complex_equality",
  "type": "Remark",
  "number": "0.6.3",
  "title": "Complex equality.",
  "body": " Complex equality   When moving to the notation do not lose sight of the essential nature of complex numbers as pairs of real numbers. This is important, for example, for understanding what it means for complex numbers and to be equal. According to the general definition of equality for tuples ( ), we have .   "
},
{
  "id": "d_complex_arithmetic",
  "level": "2",
  "url": "s_complex_numbers.html#d_complex_arithmetic",
  "type": "Definition",
  "number": "0.6.4",
  "title": "Complex addition and multiplication.",
  "body": " complex numbers addition  complex numbers multiplication  Complex addition and multiplication   We define addition and multiplication operations on as follows. Let and , where .    Complex addition  The sum  is the complex number defined as .    Complex multiplication  The product  is the complex number defined as .     "
},
{
  "id": "eg_complex_add_mult",
  "level": "2",
  "url": "s_complex_numbers.html#eg_complex_add_mult",
  "type": "Example",
  "number": "0.6.5",
  "title": "",
  "body": "  Let and . We have    "
},
{
  "id": "th_complex_arithmetic_basic",
  "level": "2",
  "url": "s_complex_numbers.html#th_complex_arithmetic_basic",
  "type": "Theorem",
  "number": "0.6.6",
  "title": "Basic properties of complex arithmetic.",
  "body": " Basic properties of complex arithmetic     Commutativity  For all we have .    Associativity  For all we have .    Distributivity  For all we have .    Additive identity  The complex number satisfies for all . We call the additive identity of .    Additive inverse  For all the element satisfies . We call the additive inverse of .    Multiplicative identity  The complex number satisfies for all . We call the multiplicative identity of .    Multiplicative inverse  For all nonzero complex numbers ( , of ), the complex number satisfies . The complex number , also denoted , is called the multiplicative inverse of .     "
},
{
  "id": "ss_complex_definition-10",
  "level": "2",
  "url": "s_complex_numbers.html#ss_complex_definition-10",
  "type": "Example",
  "number": "0.6.7",
  "title": "",
  "body": "  Let . According to , the multiplicative inverse of is . Let's check that : .   "
},
{
  "id": "rm_complex_reals",
  "level": "2",
  "url": "s_complex_numbers.html#rm_complex_reals",
  "type": "Remark",
  "number": "0.6.8",
  "title": "Complex numbers as extension of the reals.",
  "body": " Complex numbers as extension of the reals   From now on we identify the real numbers as the set of complex numbers of the form , where : equivalently, the set of complex numbers satisfying . Under this identification can be thought of as a subset of , and we may add one more link to the chain of subsets given in : . Furthermore, it is easy to verify that the various operations on agree with their real counterparts when restricting to : , . This allows us to think of the complex numbers as a larger number system containing the reals, whose arithmetic operations are extensions of real number operations.   "
},
{
  "id": "d_complex_absolute_conjugation",
  "level": "2",
  "url": "s_complex_numbers.html#d_complex_absolute_conjugation",
  "type": "Definition",
  "number": "0.6.9",
  "title": "Absolute value and complex conjugation.",
  "body": " complex numbers modulus  complex numbers absolute value  complex numbers conjugation  Absolute value and complex conjugation   Let be a complex number. The absolute value (or modulus ) of , denoted , is defined as . The complex conjugate of , denoted , is defined as .   "
},
{
  "id": "th_complex_conjugation_modulus",
  "level": "2",
  "url": "s_complex_numbers.html#th_complex_conjugation_modulus",
  "type": "Theorem",
  "number": "0.6.10",
  "title": "Properties of conjugation and modulus.",
  "body": " Properties of conjugation and modulus   The following properties hold for all .    .    .     .     .     (if ).     .     "
},
{
  "id": "ss_complex_conjugation-5",
  "level": "2",
  "url": "s_complex_numbers.html#ss_complex_conjugation-5",
  "type": "Example",
  "number": "0.6.11",
  "title": "",
  "body": "  Let . Observe that and , as claimed in .   "
},
{
  "id": "s_complex_numbers_ex-1",
  "level": "2",
  "url": "s_complex_numbers.html#s_complex_numbers_ex-1",
  "type": "Exercise",
  "number": "0.6.3.1",
  "title": "",
  "body": "  Rewrite the following expression into the form of a+b :         By definition, , so we have .  To get rid of in the denominator, we use the difference of squares formula:   The full solution is:       "
},
{
  "id": "s_complex_numbers_ex-2",
  "level": "2",
  "url": "s_complex_numbers.html#s_complex_numbers_ex-2",
  "type": "Exercise",
  "number": "0.6.3.2",
  "title": "",
  "body": "  Let . Calculate the following:  (a)     ,  (b)     ,  (c)     .                                    "
},
{
  "id": "s_complex_numbers_ex-3",
  "level": "2",
  "url": "s_complex_numbers.html#s_complex_numbers_ex-3",
  "type": "Exercise",
  "number": "0.6.3.3",
  "title": "",
  "body": "  Evaluate the following expressions and write them in the form .   .   .   .   .   .                               "
},
{
  "id": "s_complex_numbers_ex-4",
  "level": "2",
  "url": "s_complex_numbers.html#s_complex_numbers_ex-4",
  "type": "Exercise",
  "number": "0.6.3.4",
  "title": "",
  "body": "  Calculate:  (a)  ,  (b)  ,  (c)  ,  (d)  .                          "
},
{
  "id": "s_polynomials",
  "level": "1",
  "url": "s_polynomials.html",
  "type": "Section",
  "number": "0.7",
  "title": "Polynomials",
  "body": " Polynomials  Polynomials will play an important role in our treatment of linear algebra both in terms of building examples of vector spaces ( ) and as tools for studying linear operators ( ). We gather here some basic definitions and properties of polynomials. Although we will primarily be concerned with polynomials with real coefficients in this course, it is convenient to develop the theory over the complex numbers. As with , all theorems will be stated without proof.   Basic definitions   Polynomials  polynomial expression  polynomial degree  polynomial coefficient  polynomial leading coefficient  polynomial leading term  polynomial constant term   Assume a polynomial on is a function of the form , where for all , and there is a positive integer such that for all . Equivalently, is a function of the form , where for all .  We call the -th term of , and the -th coefficient ; is called the constant term of . Furthermore, if in the expression we have , then is called the leading term of , and its leading coefficient . Lastly, a root of is a an element such that .     Polynomials as finite power series  As we see in the expression we have essentially defined a polynomial to be a function with a finite power series representation. This may seem somewhat overkill in terms of the level of abstraction, but makes for simpler exposition in the discussion below. In any case you are always welcome to revert to the more familiar characterization in .    Basic properties of polynomials   Assume .   If and are polynomials on , then so are , , and for any .    If is a polynomial on and is a root of , then there is a polynomial on such that .    If is a nonzero polynomial on , then has at most distinct roots.       An important consequence of statement ( ) of is that the coefficients of a polynomial are uniquely determined by , as long as the domain is infinite . This furnishes us with a useful criterion for polynomial equality based on comparing coefficients.   Polynomial equality via coefficients   Assume is an infinite subset of . Let and be polynomials on of the form .   We have if and only if for all .    In particular, is the zero function on if and only if for all .         Degree of a polynomial   It follows from that if is an infinite subset of and is a nonzero polynomial on , then has a unique expression of the form , where . The integer appearing in this expression is an important invariant of called its degree .    polynomial degree  Degree of a polynomial    degree of polynomial    Assume is an infinite subset of and let be a nonzero polynomial on of the form with . The integer in this expression is called the degree of , denoted .  We call the polynomial  linear if , quadratic if , and cubic if .    Defining the degree of the zero function to be may seem a little peculiar. Do not be disturbed! You can think of this as a convention that allows for clean statements of theorems like the following.   Basic properties of degree   Assume is an infinite subset of . Let and be polynomials on .     .     .        Factoring polynomials   Statement (2) of makes a connection between roots of a polynomial and factorization; and the expression can be thought of as a first step in writing the polynomial as a product of linear polynomials. The existence of roots depends on the given domain of the function. Indeed, there are plenty of polynomials that have no roots whatsoever: for example, from the quadratic formula we know that any quadratic polynomial satisfying has no real roots. According to the fundamental theorem of algebra , the situation over is vastly different: not only does every polymonial have a root in , we can factor it completely as a product of linear polynomials. This is one of the main incentives for introducing the complex numbers as a number system.    Fundamental theorem of algebra   Any polynomial , thought of as a function from to itself, can be factored into linear terms as , where the are (not necessarily distinct) complex numbers.        Find a degree 3 polynomial whose coefficient of equal to 1. The zeros of this polynomial are , , and . Simplify your answer so that it has only real numbers as coefficients.  Your answer is .              The polynomial has as a root. Give all of the roots of in a comma-separated list, including the given one.  Roots:             "
},
{
  "id": "d_polynomials",
  "level": "2",
  "url": "s_polynomials.html#d_polynomials",
  "type": "Definition",
  "number": "0.7.1",
  "title": "Polynomials.",
  "body": " Polynomials  polynomial expression  polynomial degree  polynomial coefficient  polynomial leading coefficient  polynomial leading term  polynomial constant term   Assume a polynomial on is a function of the form , where for all , and there is a positive integer such that for all . Equivalently, is a function of the form , where for all .  We call the -th term of , and the -th coefficient ; is called the constant term of . Furthermore, if in the expression we have , then is called the leading term of , and its leading coefficient . Lastly, a root of is a an element such that .   "
},
{
  "id": "rm_polynomials_powerseries",
  "level": "2",
  "url": "s_polynomials.html#rm_polynomials_powerseries",
  "type": "Remark",
  "number": "0.7.2",
  "title": "Polynomials as finite power series.",
  "body": " Polynomials as finite power series  As we see in the expression we have essentially defined a polynomial to be a function with a finite power series representation. This may seem somewhat overkill in terms of the level of abstraction, but makes for simpler exposition in the discussion below. In any case you are always welcome to revert to the more familiar characterization in .  "
},
{
  "id": "th_poly_basic",
  "level": "2",
  "url": "s_polynomials.html#th_poly_basic",
  "type": "Theorem",
  "number": "0.7.3",
  "title": "Basic properties of polynomials.",
  "body": " Basic properties of polynomials   Assume .   If and are polynomials on , then so are , , and for any .    If is a polynomial on and is a root of , then there is a polynomial on such that .    If is a nonzero polynomial on , then has at most distinct roots.      "
},
{
  "id": "cor_poly_equality",
  "level": "2",
  "url": "s_polynomials.html#cor_poly_equality",
  "type": "Corollary",
  "number": "0.7.4",
  "title": "Polynomial equality via coefficients.",
  "body": " Polynomial equality via coefficients   Assume is an infinite subset of . Let and be polynomials on of the form .   We have if and only if for all .    In particular, is the zero function on if and only if for all .      "
},
{
  "id": "d_poly_degree",
  "level": "2",
  "url": "s_polynomials.html#d_poly_degree",
  "type": "Definition",
  "number": "0.7.5",
  "title": "Degree of a polynomial.",
  "body": " polynomial degree  Degree of a polynomial    degree of polynomial    Assume is an infinite subset of and let be a nonzero polynomial on of the form with . The integer in this expression is called the degree of , denoted .  We call the polynomial  linear if , quadratic if , and cubic if .   "
},
{
  "id": "th_poly_degree",
  "level": "2",
  "url": "s_polynomials.html#th_poly_degree",
  "type": "Theorem",
  "number": "0.7.6",
  "title": "Basic properties of degree.",
  "body": " Basic properties of degree   Assume is an infinite subset of . Let and be polynomials on .     .     .     "
},
{
  "id": "th_fund_alg",
  "level": "2",
  "url": "s_polynomials.html#th_fund_alg",
  "type": "Theorem",
  "number": "0.7.7",
  "title": "Fundamental theorem of algebra.",
  "body": " Fundamental theorem of algebra   Any polynomial , thought of as a function from to itself, can be factored into linear terms as , where the are (not necessarily distinct) complex numbers.   "
},
{
  "id": "s_polynomials_ex-1",
  "level": "2",
  "url": "s_polynomials.html#s_polynomials_ex-1",
  "type": "Exercise",
  "number": "0.7.4.1",
  "title": "",
  "body": "  Find a degree 3 polynomial whose coefficient of equal to 1. The zeros of this polynomial are , , and . Simplify your answer so that it has only real numbers as coefficients.  Your answer is .           "
},
{
  "id": "s_polynomials_ex-2",
  "level": "2",
  "url": "s_polynomials.html#s_polynomials_ex-2",
  "type": "Exercise",
  "number": "0.7.4.2",
  "title": "",
  "body": "  The polynomial has as a root. Give all of the roots of in a comma-separated list, including the given one.  Roots:           "
},
{
  "id": "s_systems",
  "level": "1",
  "url": "s_systems.html",
  "type": "Section",
  "number": "1.1",
  "title": "Systems of linear equations",
  "body": " Systems of linear equations   Computing and studying solutions to equations, and systems of equations , unquestionably plays an important role in mathematics; though we hasten to add that this is not all that mathematicians do! In this chapter we will develop an essentially complete theory of a particularly simple family of mathematical equations: namely, linear equations . This will serve as a somewhat indirect introduction to our study of linear algebra, as lurking below our parametric descriptions of solutions to linear systems lie vector space notions like subspace, span, and linear independence. Furthermore, we will introduce one of the most important computational tools of linear algebra: Gaussian elimination .    Systems of linear equations   Linear equations  linear equation   A linear expression in the unknowns (or variables) is an expression of the form , where are fixed real numbers.  A linear equation in the unknowns is an equation that can be simplified, using only addition and subtraction, to an equation of the form which we call its standard form . An equation in the unknowns is nonlinear if it cannot be simplified to the form using only addition and subtraction.  Given a linear equation with standard form , the equation is called homogeneous if , and nonhomogeneous if .     Linear and nonlinear equations      Consider . This is a linear equation in the unknowns . Its standard form is . Since the right-hand side is nonzero, we see that the equation is nonhomogeneous.    The equation is a nonlinear equation in the unknowns and .    The equation is nonlinear. Interestingly, however, the set of solutions to this equation is equal to the set of solutions to the linear equation . This illustrates that is concerned strictly with the form of an equation, and not with the solutions to that equation.       We next provide a precise definition of a solution of a linear equation. This definition will involve -tuples of real numbers. Tuples are treated in more detail in . In short, as defined in , an -tuple is an ordered sequence of elements. The defining property of tuples is that they are ordered objects, as opposed to unordered. This is captured by the notion of equality between tuples: we have if and only if for all .   Solutions to linear equations   A solution to a linear equation  is an -tuple of real numbers for which the variable assignment makes the equation true: , the tuple satisfies . We say  solves the equation in this case.    Given a linear equation , we will be interested in finding and describing the set of all of its solutions. These solutions define a subset of the set of all -tuples of real numbers, which is denoted .   Real -tuples    set of real -tuples    Let be a positive integer. The set of all real -tuples is denoted : , .    As you may recall, a (nontrivial) linear equation in two unknowns defines a line in , and a (nontrivial) equation in three unknowns defines a plane in . These types of subsets (of and , respectively) have distinctive geometric properties that we will elucidate in coming sections. Generalizing this notion to an arbitrary number of unknowns leads to the notion of a hyperplane .   Hyperplane   A linear equation is nontrivial if for some . Given a nontrivial equation , the set of solutions is called a hyperplane in . We have the two following special cases, corresponding to and :   A hyperplane in is the set of solutions to a nontrivial equation , and is called a line .    A hyperplane in is the set of solutions to a nontrivial equation , and is called a plane .        Visualizing lines in  Let be a line: , is the solution to some nontrivial linear equation . Since the equation is nontrivial, we have or . If , we may put the equation in the form , in which case we recognize as the slope of and as the -intercept. If , then , and the equation can be solved as , which we recognize as the vertical line passing through the point .  It is easy to see that the equation defining is homogenous if and only if is a point on : , is defined by a homogeneous equation if and only if it passes through the origin.   Lines in   Lines in R2       Visualizing planes in  Let be a plane defined by the nontrivial equation . Later in the course we will describe an alternative approach to visualizing in terms of its normal vector  . For now we recall a more elementary approach. Namely, simply find by insepction three non-colinear points satisfying , sketch the triangle in they define, and then envision as the plane in containing this triangle. In practice we can find three such points by picking arbitrary values for two of the three variables, and solving for the third variable using .  For example, if is the plane with equation , we see easily that lie on , allowing us to produce the graph in .  As with lines, it is easy to see that the equation defining is homogeneous if and only if passes through the origin .   Using Sage to visualize via normal vector  Visualizing         Systems of linear equations  linear system   A system of linear equations (or linear system ) is a set of linear equations.  A homogeneous linear system is a set of homogeneous linear equations.    When displaying a system of equations in the unknowns , we typically write each equation in standard form and align the corresponding terms of each equation into columns: A homogeneous system is thus typically written as:    You will want to get comfortable with the double-indexing used to display linear systems as quickly as possible. Here is a good way to orient yourself:   The appearing in and indicates the -th row in our displayed system, or equivalently, the -th equation.    The appearing in indicates the -th column in our displayed system, which is associated to the -th variable, for .       Solutions to linear systems  solutions to linear systems   A solution to a linear equation  is an -tuple of real numbers for which the variable assignment makes the equation true. We say  solves the equation in this case.  A solution to a system of linear equations  is an -tuple that is a solution to each of the system's equations. We say  solves the system in this case.    Given a linear system we will seek to find the set of all solutions to the system. As we will soon see, this set of solutions will take one of three qualitative forms:   The solution set is empty; i.e., there are no solutions. We say the system is inconsistent in this case. Otherwise a system is called consistent .    The solution set contains a single element; i.e., there is exactly one solution.    The solution set contains infinitely many elements; i.e., there are infinitely solutions.      Solutions to elementary systems   For each system, compute the set of solutions.                 The first equation implies . Substituting for in the second equation, we would then have , a contradiction. Thus there are no solutions: i.e., is the empty set, denoted or .    The first equation implies . Making this substitution in the second equation yields , or . Thus is the unique solution, and .    The second equation is just twice the first. It follows that both equations have the exact same set of solutions, and so we need only find all solutions to . Note that we can set for any real number . Solving for in terms of we get for any , and thus , an infinite set!        Solutions to elementary systems (again)   For each system in , use a geometric argument to determine how many solutions there are.    We proceed geometrically by observing that each equation in a given system defines a line, that a pair is a solution to the given equation if and only if it is a point on the corresponding line, and thus that a pair is a solution to both equations if and only if it is a point lying on both lines. Thus, geometrically speaking, the set of solutions to a given system is equal to the intersection of the two corresponding lines.   In this case the two lines and are parallel (and not equal to one another). It follows that their intersection is empty. We conclude that there are no solutions to the system.    In this case the two lines and are nonparallel. It follows that they intersect in a single point. We conclude that the system has a unique solution.    In this case the two equations and define the same line , and thus that their intersection is also equal to . The set of solutions to the system is then equal to the set of points of , which is infinite.         Row operations  In we were able to combine some simple logic and arithmetic to solve each system completely. Of course, things get more complicated as the number of equations and\/or unknowns in the system increases.  For example, consider the system Observe first that the triple is not a solution to the system; one easily checks that is satisfies the first and second equations, but not the third. Similarly, it is easy to verify that and are both solutions to the system. The question remains: How do we find all solutions to the linear system in a systematic way?   Notice the somewhat funny spacing in . This is in force in order to align the unknowns in separate columns. In general, when handed a linear system in the wild, your first step should be to write each equation in standard form, and make sure the unknowns are aligned vertically in this manner.    Some systems are easier to solve than others  Below you find two systems of three equations in three unknowns. The staircase pattern of allows us to solve easily by backwards substitution . In more detail:   Equation 3 in tells us that .    Now substitute into Equation 2 of and solve for to get .    Finally, substitute and into Equation 1 of and solve for to get . We conclude that is a solution to .    Furthermore, since at each step we had no choice in the matter ( must be equal to 2, then must be equal to 4, etc.), we see that in fact is the only solution to .   Our method for solving a more complicated system, like above, will be to transform it to a simpler system like .   Key point . In order for this method to work, we need to make sure that the transformed system has exactly the same solutions as the original system! To this end we will restrict our permissible transformations to the elementary operations define below.   Elementary operations on linear systems  elementary operations linear systems  elementary operations linear systems scalar multiplication  elementary operations linear systems equation swap  elementary operations linear systems equation addition  row reduction of systems   An elementary operation (or elementary row operation ) is one of the three types of operations on linear systems described below.   Scalar multiplication  Multiply an equation by a nonzero number : i.e., replace the -th equation of the system with for . Note: is the result of multiplying the left and right sides of equation by .    Equation swap  Swap the -th and -th equations of the system, : i.e., replace equation of the system with , and replace equation with .    Equation addition  Add a multiple of one equation to another: i.e., replace with for some , , and .   The act of transforming a system of equations using elementary operations is called reduction (or row reduction ).    After reducing a linear system using elementary operations, we are left with a new system . The systems and will generally look very different from one another. Note, however, that the two systems will have the same number of equations, and the same number of variables. More importantly, the two systems will have identical sets of solutions; that is, the set of solutions of the new system is identical to the set of solutions to !  To convince ourselves of this last assertion, it suffices to show that the application of any one of these elementary row operations produces a new system with exactly the same set of solutions as ; if this is so, then performing any finite sequence of elementary row operations must also preserve the set of solutions in this sense. makes this argument official. First we introduce the notion of equivalent linear systems , mainly to spare ourselves from the mouthful that is obtained by applying a finite sequence of elementary row operations .   Row equivalent linear systems   We say two systems of linear equations are row equivalent if the one can be obtained from the other by a finite sequence of elementary operations.     Row equivalence theorem   Row equivalent systems of linear equations have identical sets of solutions.    We prove by induction that if system is the result of applying elementary operations to system , , then and have the same set of solutions.   Base case:  In this case (we have applied no operations) and the statement is obvious.    Induction step  Assume that applying a sequence of elementary operations to a linear system preserves the set of solutions.  Suppose is the result of applying elementary operations to the system . Let be the result of applying the first of these operations. By the induction hypothesis, systems and have the same set of solutions.  Since the system is obtained from by applying exactly one elementary operation, it now suffices to show that applying a single row operation does not change the set of solutions to a linear system. This is the result of . (Note that a solution is provided to that exercise.)  We conclude that and have the same set of solutions, as desired.       Complete example  Consider again the linear system   We transform the system as as follows:   Now put the logic together. Our original linear system was transformed by a sequence of elementary row operations to a new system :   We saw already that the second system has exactly one solution, namely the triple .  Since transforming a system by row operations preserves solutions, the first and second systems have exactly the same solutions .  Thus is the only solution to the original system!    Notation  As we will see later, keeping track of the exact sequence of row operations is important in some situations. The notation used in the last example is useful for this bookkeeping. Let's explicate the notation somewhat.  The notation indicates that system is obtained from by replacing equation with .  The notation indicates that system is obtained from by swapping rows and .  The notation indicates that system is obtained from by replacing equation with .    Mandate  You may be tempted to do multiple operations in a single step during this procedure. Resist this temptation for now until we have a better understanding of things.  Furthermore, if later on you do give in to this temptation, make sure that the two (or more row operations) you perform are independent of one another. For example, do not swap with and replace with in the same step.      WeBWork Exercises    Determine whether the following system has no solution, an infinite number of solutions or a unique solution.                    Suppose that the following   is a consistent system. Then               Find the set of solutions for the linear system  Use s1 , s2 , etc. for the free variables if necessary.   , ,                   SOLUTION: Equation 3 . Substitute into equation 2, . Substitute into equation 1, .         Give a geometric description of the following systems of equations                    Give a geometric description of the following system of equations                    Written exercises  Geometry of linear systems  In this exercise we will use the geometry of lines in and planes in to help analyze solutions to systems of equations in two and three unknowns, respectively. See for a refresher on these concepts.   Fix and consider a system of linear equations in the two unknowns and . What does a solution to this system of linear equations correspond to geometrically?    Use your interpretation in (a) to give a geometric argument that a system of equations in two unknowns will have either (i) zero solutions, (ii) exactly one solution, or (iii) infinitely many solutions.    Use your geometric interpretation to help produce explicit examples of systems in two variables satisfying these three different cases (i)-(iii).    Now repeat (a)-(b) for a system of linear equations in three variables .      (a) Geometrically, each equation in the system represents a line . A solution to the -th equation corresponds to a point on . Thus a solution to the system corresponds to a point lying on all of the lines: i.e., a point of intersection of the lines.  (b) First of all to prove the desired or statement it suffices to prove that if the number of solutions is greater than 1, then there are infinitely many solutions.  Now suppose there is more than one solution. Then there are at least two different solutions: and . Take any of the two lines . By above the intersection of and contains and . But two distinct lines intersect in at most one point. It follows that and must be equal. Since and were arbitrary, it follows all of the lines are in fact the same line . But this means the common intersection of the lines is , which has infinitely many points. It follows that the system has infinitely many solutions.  (c) We will get 0 solutions if the system includes two different parallel lines: e.g., and .  We will get exactly one solution when the slopes of each line in the system are distinct.  We will get infinitely many solutions when all equations in the system represent the same line . This happens when all equations are multiples of one another.  (d) Now each equation in our system defines a plane . A solution to the system corresponds to a point of intersection of the planes. We recall two facts from Euclidean geometry:   Fact 1  Given two distinct points, there is a unique line containing both of them.    Fact 2  Given any number of distinct planes, they either do not intersect, or intersect in a line.     We proceed as in part (b) above: that is show that if there are two distinct solutions to the system, then there are infinitely many solutions. First, for simplicity, we may assume that the equations define distinct planes; if we have two equations defining the same plane, we can delete one of them and not change the set of solutions to the system.  Now suppose and are two distinct solutions to the system. Let be the unique line containing and (Fact 1). I claim that is precisely the set of solutions to the system. To see this, take any two equations in the system and . Since the two corresponding planes are distinct, and intersect in at least the points and , they must intersect in a line (Fact 2); since this line contains and , it must be the line (Fact 1). Thus any two planes in the system intersect in the line . From this it follows that: (a) a point satisfying the system must lie in ; and (b) all points on satisfy the system (since we have shown that lies in all the planes). It follows that is precisely the set of solutions, and hence that there are infinitely many solutions.   Row operations preserve solutions  We made the claim that each of our three row operations   scalar multiplication ( for ),    swap ( ),    addition ( for some )   do not change the set of solutions of a linear system. To prove this claim, let be a general linear system . Now consider each type of row operation separately, write down the new system you get by applying this row operation, and prove that an -tuple is a solution to the original system if and only if it is a solution to the new system .   Let be the original system with equations . For each specified row operation, we will call the resulting new system and its equations .   Row swap  In this case systems and have exactly the same equations, just written in a different order. Thus the -tuple satisfies if and only if it satisfies each of the equations , if and only if it satisfies each of the equations , since these are the same equations! It follows that is a solution of if and only if it is a solution to .    Scalar multiplication  In this case for all , and for some . Since only the -th equation has changed, it suffices to show that is a solution to if and only if is a solution to . Let's prove each direction of this if and only if separately.  If satisfies , then . Multiplying both sides by we see that and hence that is also a solution of .  For the other direction, if satisfies , then Now, since , we can multiply both sides of this equation by to see that and hence that is a solution to .    Row addition  The only equation of that differs from is . Writing this equation out in terms of coefficients gives us . Now if satisfies , then it satisfies and , in which case evaluating the RHS of the above at yields showing that satisfies . Now suppose satisfies . Since satisfies , we have Since satisfies , we have Substituting into the equation above we get , and hence . This shows that satisfies . It follows that satisfies .    Nonlinear systems A nonlinear system of equations is a collection of equations, at least one of which is nonlinear. Our definition of a solution to a linear system generalizes easily to any system of equations.   Consider the following nonlinear system in the unknowns : .   Sketch the graphs of each of the two equations in the system on a common coordinate system.    Describe geometrically what a solution to the system is in terms of your sketch. Explain your reasoning. How many solutions to the system are there, according to your sketch?    Compute the set of all solutions to the system algebraically.       Now consider a more general system where are fixed constants and at least one of or is nonzero.    Explain geometrically what a solution to the system corresponds to in terms of the graphs of its two equations.    Use your geometric interpretation in (i) to argue that the system has either 0, 1, or 2 solutions. Give explicit examples of such systems corresponding to each of these three cases.       Not all arithmetic operations preserve solutions  In this exercise we investigate how the operation of squaring both sides of an equation changes the set of solutions. Let represent a general equation (linear or nonlinear) in the unknowns , let be the equation obtained by squaring both sides of the , let be the set of solutions to , and let be the set of solutions to .    Show that .    Given an explicit example of an equation of the form in two variables for which .       "
},
{
  "id": "d_lin-equation",
  "level": "2",
  "url": "s_systems.html#d_lin-equation",
  "type": "Definition",
  "number": "1.1.1",
  "title": "Linear equations.",
  "body": " Linear equations  linear equation   A linear expression in the unknowns (or variables) is an expression of the form , where are fixed real numbers.  A linear equation in the unknowns is an equation that can be simplified, using only addition and subtraction, to an equation of the form which we call its standard form . An equation in the unknowns is nonlinear if it cannot be simplified to the form using only addition and subtraction.  Given a linear equation with standard form , the equation is called homogeneous if , and nonhomogeneous if .   "
},
{
  "id": "ss_linear_equations-3",
  "level": "2",
  "url": "s_systems.html#ss_linear_equations-3",
  "type": "Example",
  "number": "1.1.2",
  "title": "Linear and nonlinear equations.",
  "body": " Linear and nonlinear equations      Consider . This is a linear equation in the unknowns . Its standard form is . Since the right-hand side is nonzero, we see that the equation is nonhomogeneous.    The equation is a nonlinear equation in the unknowns and .    The equation is nonlinear. Interestingly, however, the set of solutions to this equation is equal to the set of solutions to the linear equation . This illustrates that is concerned strictly with the form of an equation, and not with the solutions to that equation.      "
},
{
  "id": "d_lin_eq_sol",
  "level": "2",
  "url": "s_systems.html#d_lin_eq_sol",
  "type": "Definition",
  "number": "1.1.3",
  "title": "Solutions to linear equations.",
  "body": " Solutions to linear equations   A solution to a linear equation  is an -tuple of real numbers for which the variable assignment makes the equation true: , the tuple satisfies . We say  solves the equation in this case.   "
},
{
  "id": "d_Rn",
  "level": "2",
  "url": "s_systems.html#d_Rn",
  "type": "Definition",
  "number": "1.1.4",
  "title": "Real <span class=\"process-math\">\\(n\\)<\/span>-tuples.",
  "body": " Real -tuples    set of real -tuples    Let be a positive integer. The set of all real -tuples is denoted : , .   "
},
{
  "id": "d_hyperplane",
  "level": "2",
  "url": "s_systems.html#d_hyperplane",
  "type": "Definition",
  "number": "1.1.5",
  "title": "Hyperplane.",
  "body": " Hyperplane   A linear equation is nontrivial if for some . Given a nontrivial equation , the set of solutions is called a hyperplane in . We have the two following special cases, corresponding to and :   A hyperplane in is the set of solutions to a nontrivial equation , and is called a line .    A hyperplane in is the set of solutions to a nontrivial equation , and is called a plane .      "
},
{
  "id": "eg_lines_R2",
  "level": "2",
  "url": "s_systems.html#eg_lines_R2",
  "type": "Example",
  "number": "1.1.6",
  "title": "Visualizing lines in <span class=\"process-math\">\\(\\R^2\\)<\/span>.",
  "body": " Visualizing lines in  Let be a line: , is the solution to some nontrivial linear equation . Since the equation is nontrivial, we have or . If , we may put the equation in the form , in which case we recognize as the slope of and as the -intercept. If , then , and the equation can be solved as , which we recognize as the vertical line passing through the point .  It is easy to see that the equation defining is homogenous if and only if is a point on : , is defined by a homogeneous equation if and only if it passes through the origin.   Lines in   Lines in R2     "
},
{
  "id": "eg_vis_plane",
  "level": "2",
  "url": "s_systems.html#eg_vis_plane",
  "type": "Example",
  "number": "1.1.8",
  "title": "Visualizing planes in <span class=\"process-math\">\\(\\R^3\\)<\/span>.",
  "body": " Visualizing planes in  Let be a plane defined by the nontrivial equation . Later in the course we will describe an alternative approach to visualizing in terms of its normal vector  . For now we recall a more elementary approach. Namely, simply find by insepction three non-colinear points satisfying , sketch the triangle in they define, and then envision as the plane in containing this triangle. In practice we can find three such points by picking arbitrary values for two of the three variables, and solving for the third variable using .  For example, if is the plane with equation , we see easily that lie on , allowing us to produce the graph in .  As with lines, it is easy to see that the equation defining is homogeneous if and only if passes through the origin .   Using Sage to visualize via normal vector  Visualizing       "
},
{
  "id": "d_lin-sys",
  "level": "2",
  "url": "s_systems.html#d_lin-sys",
  "type": "Definition",
  "number": "1.1.10",
  "title": "Systems of linear equations.",
  "body": " Systems of linear equations  linear system   A system of linear equations (or linear system ) is a set of linear equations.  A homogeneous linear system is a set of homogeneous linear equations.   "
},
{
  "id": "ss_linear_equations-14",
  "level": "2",
  "url": "s_systems.html#ss_linear_equations-14",
  "type": "Remark",
  "number": "1.1.11",
  "title": "",
  "body": " You will want to get comfortable with the double-indexing used to display linear systems as quickly as possible. Here is a good way to orient yourself:   The appearing in and indicates the -th row in our displayed system, or equivalently, the -th equation.    The appearing in indicates the -th column in our displayed system, which is associated to the -th variable, for .     "
},
{
  "id": "d_lin-sys-sols",
  "level": "2",
  "url": "s_systems.html#d_lin-sys-sols",
  "type": "Definition",
  "number": "1.1.12",
  "title": "Solutions to linear systems.",
  "body": " Solutions to linear systems  solutions to linear systems   A solution to a linear equation  is an -tuple of real numbers for which the variable assignment makes the equation true. We say  solves the equation in this case.  A solution to a system of linear equations  is an -tuple that is a solution to each of the system's equations. We say  solves the system in this case.   "
},
{
  "id": "ss_linear_equations-16",
  "level": "2",
  "url": "s_systems.html#ss_linear_equations-16",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "inconsistent consistent "
},
{
  "id": "s_systems_eg_2eqns2varss",
  "level": "2",
  "url": "s_systems.html#s_systems_eg_2eqns2varss",
  "type": "Example",
  "number": "1.1.13",
  "title": "Solutions to elementary systems.",
  "body": " Solutions to elementary systems   For each system, compute the set of solutions.                 The first equation implies . Substituting for in the second equation, we would then have , a contradiction. Thus there are no solutions: i.e., is the empty set, denoted or .    The first equation implies . Making this substitution in the second equation yields , or . Thus is the unique solution, and .    The second equation is just twice the first. It follows that both equations have the exact same set of solutions, and so we need only find all solutions to . Note that we can set for any real number . Solving for in terms of we get for any , and thus , an infinite set!      "
},
{
  "id": "eg_system_of_lines",
  "level": "2",
  "url": "s_systems.html#eg_system_of_lines",
  "type": "Example",
  "number": "1.1.14",
  "title": "Solutions to elementary systems (again).",
  "body": " Solutions to elementary systems (again)   For each system in , use a geometric argument to determine how many solutions there are.    We proceed geometrically by observing that each equation in a given system defines a line, that a pair is a solution to the given equation if and only if it is a point on the corresponding line, and thus that a pair is a solution to both equations if and only if it is a point lying on both lines. Thus, geometrically speaking, the set of solutions to a given system is equal to the intersection of the two corresponding lines.   In this case the two lines and are parallel (and not equal to one another). It follows that their intersection is empty. We conclude that there are no solutions to the system.    In this case the two lines and are nonparallel. It follows that they intersect in a single point. We conclude that the system has a unique solution.    In this case the two equations and define the same line , and thus that their intersection is also equal to . The set of solutions to the system is then equal to the set of points of , which is infinite.      "
},
{
  "id": "ss_row_equivalence-4",
  "level": "2",
  "url": "s_systems.html#ss_row_equivalence-4",
  "type": "Remark",
  "number": "1.1.15",
  "title": "",
  "body": " Notice the somewhat funny spacing in . This is in force in order to align the unknowns in separate columns. In general, when handed a linear system in the wild, your first step should be to write each equation in standard form, and make sure the unknowns are aligned vertically in this manner.  "
},
{
  "id": "d_eqops",
  "level": "2",
  "url": "s_systems.html#d_eqops",
  "type": "Definition",
  "number": "1.1.16",
  "title": "Elementary operations on linear systems.",
  "body": " Elementary operations on linear systems  elementary operations linear systems  elementary operations linear systems scalar multiplication  elementary operations linear systems equation swap  elementary operations linear systems equation addition  row reduction of systems   An elementary operation (or elementary row operation ) is one of the three types of operations on linear systems described below.   Scalar multiplication  Multiply an equation by a nonzero number : i.e., replace the -th equation of the system with for . Note: is the result of multiplying the left and right sides of equation by .    Equation swap  Swap the -th and -th equations of the system, : i.e., replace equation of the system with , and replace equation with .    Equation addition  Add a multiple of one equation to another: i.e., replace with for some , , and .   The act of transforming a system of equations using elementary operations is called reduction (or row reduction ).   "
},
{
  "id": "d_rowequivalent",
  "level": "2",
  "url": "s_systems.html#d_rowequivalent",
  "type": "Definition",
  "number": "1.1.17",
  "title": "Row equivalent linear systems.",
  "body": " Row equivalent linear systems   We say two systems of linear equations are row equivalent if the one can be obtained from the other by a finite sequence of elementary operations.   "
},
{
  "id": "s_systems_th_rowops",
  "level": "2",
  "url": "s_systems.html#s_systems_th_rowops",
  "type": "Theorem",
  "number": "1.1.18",
  "title": "Row equivalence theorem.",
  "body": " Row equivalence theorem   Row equivalent systems of linear equations have identical sets of solutions.    We prove by induction that if system is the result of applying elementary operations to system , , then and have the same set of solutions.   Base case:  In this case (we have applied no operations) and the statement is obvious.    Induction step  Assume that applying a sequence of elementary operations to a linear system preserves the set of solutions.  Suppose is the result of applying elementary operations to the system . Let be the result of applying the first of these operations. By the induction hypothesis, systems and have the same set of solutions.  Since the system is obtained from by applying exactly one elementary operation, it now suffices to show that applying a single row operation does not change the set of solutions to a linear system. This is the result of . (Note that a solution is provided to that exercise.)  We conclude that and have the same set of solutions, as desired.    "
},
{
  "id": "eg_systems_eg_long",
  "level": "2",
  "url": "s_systems.html#eg_systems_eg_long",
  "type": "Example",
  "number": "1.1.19",
  "title": "Complete example.",
  "body": " Complete example  Consider again the linear system   We transform the system as as follows:   Now put the logic together. Our original linear system was transformed by a sequence of elementary row operations to a new system :   We saw already that the second system has exactly one solution, namely the triple .  Since transforming a system by row operations preserves solutions, the first and second systems have exactly the same solutions .  Thus is the only solution to the original system!  "
},
{
  "id": "s_systems_notation_rowops",
  "level": "2",
  "url": "s_systems.html#s_systems_notation_rowops",
  "type": "Remark",
  "number": "1.1.20",
  "title": "Notation.",
  "body": " Notation  As we will see later, keeping track of the exact sequence of row operations is important in some situations. The notation used in the last example is useful for this bookkeeping. Let's explicate the notation somewhat.  The notation indicates that system is obtained from by replacing equation with .  The notation indicates that system is obtained from by swapping rows and .  The notation indicates that system is obtained from by replacing equation with .  "
},
{
  "id": "s_systems_rm_oneoperation",
  "level": "2",
  "url": "s_systems.html#s_systems_rm_oneoperation",
  "type": "Remark",
  "number": "1.1.21",
  "title": "Mandate.",
  "body": " Mandate  You may be tempted to do multiple operations in a single step during this procedure. Resist this temptation for now until we have a better understanding of things.  Furthermore, if later on you do give in to this temptation, make sure that the two (or more row operations) you perform are independent of one another. For example, do not swap with and replace with in the same step.  "
},
{
  "id": "s_systems_ex-1-2",
  "level": "2",
  "url": "s_systems.html#s_systems_ex-1-2",
  "type": "Exercise",
  "number": "1.1.3.1",
  "title": "",
  "body": "  Determine whether the following system has no solution, an infinite number of solutions or a unique solution.                 "
},
{
  "id": "s_systems_ex-1-3",
  "level": "2",
  "url": "s_systems.html#s_systems_ex-1-3",
  "type": "Exercise",
  "number": "1.1.3.2",
  "title": "",
  "body": "  Suppose that the following   is a consistent system. Then            "
},
{
  "id": "s_systems_ex-1-4",
  "level": "2",
  "url": "s_systems.html#s_systems_ex-1-4",
  "type": "Exercise",
  "number": "1.1.3.3",
  "title": "",
  "body": "  Find the set of solutions for the linear system  Use s1 , s2 , etc. for the free variables if necessary.   , ,                   SOLUTION: Equation 3 . Substitute into equation 2, . Substitute into equation 1, .      "
},
{
  "id": "s_systems_ex-1-5",
  "level": "2",
  "url": "s_systems.html#s_systems_ex-1-5",
  "type": "Exercise",
  "number": "1.1.3.4",
  "title": "",
  "body": "  Give a geometric description of the following systems of equations                 "
},
{
  "id": "s_systems_ex-1-6",
  "level": "2",
  "url": "s_systems.html#s_systems_ex-1-6",
  "type": "Exercise",
  "number": "1.1.3.5",
  "title": "",
  "body": "  Give a geometric description of the following system of equations                 "
},
{
  "id": "ex_solving_sys_geom",
  "level": "2",
  "url": "s_systems.html#ex_solving_sys_geom",
  "type": "Exercise",
  "number": "1.1.3.6",
  "title": "Geometry of linear systems.",
  "body": "Geometry of linear systems  In this exercise we will use the geometry of lines in and planes in to help analyze solutions to systems of equations in two and three unknowns, respectively. See for a refresher on these concepts.   Fix and consider a system of linear equations in the two unknowns and . What does a solution to this system of linear equations correspond to geometrically?    Use your interpretation in (a) to give a geometric argument that a system of equations in two unknowns will have either (i) zero solutions, (ii) exactly one solution, or (iii) infinitely many solutions.    Use your geometric interpretation to help produce explicit examples of systems in two variables satisfying these three different cases (i)-(iii).    Now repeat (a)-(b) for a system of linear equations in three variables .      (a) Geometrically, each equation in the system represents a line . A solution to the -th equation corresponds to a point on . Thus a solution to the system corresponds to a point lying on all of the lines: i.e., a point of intersection of the lines.  (b) First of all to prove the desired or statement it suffices to prove that if the number of solutions is greater than 1, then there are infinitely many solutions.  Now suppose there is more than one solution. Then there are at least two different solutions: and . Take any of the two lines . By above the intersection of and contains and . But two distinct lines intersect in at most one point. It follows that and must be equal. Since and were arbitrary, it follows all of the lines are in fact the same line . But this means the common intersection of the lines is , which has infinitely many points. It follows that the system has infinitely many solutions.  (c) We will get 0 solutions if the system includes two different parallel lines: e.g., and .  We will get exactly one solution when the slopes of each line in the system are distinct.  We will get infinitely many solutions when all equations in the system represent the same line . This happens when all equations are multiples of one another.  (d) Now each equation in our system defines a plane . A solution to the system corresponds to a point of intersection of the planes. We recall two facts from Euclidean geometry:   Fact 1  Given two distinct points, there is a unique line containing both of them.    Fact 2  Given any number of distinct planes, they either do not intersect, or intersect in a line.     We proceed as in part (b) above: that is show that if there are two distinct solutions to the system, then there are infinitely many solutions. First, for simplicity, we may assume that the equations define distinct planes; if we have two equations defining the same plane, we can delete one of them and not change the set of solutions to the system.  Now suppose and are two distinct solutions to the system. Let be the unique line containing and (Fact 1). I claim that is precisely the set of solutions to the system. To see this, take any two equations in the system and . Since the two corresponding planes are distinct, and intersect in at least the points and , they must intersect in a line (Fact 2); since this line contains and , it must be the line (Fact 1). Thus any two planes in the system intersect in the line . From this it follows that: (a) a point satisfying the system must lie in ; and (b) all points on satisfy the system (since we have shown that lies in all the planes). It follows that is precisely the set of solutions, and hence that there are infinitely many solutions.  "
},
{
  "id": "ex_row_ops_preserve",
  "level": "2",
  "url": "s_systems.html#ex_row_ops_preserve",
  "type": "Exercise",
  "number": "1.1.3.7",
  "title": "Row operations preserve solutions.",
  "body": "Row operations preserve solutions  We made the claim that each of our three row operations   scalar multiplication ( for ),    swap ( ),    addition ( for some )   do not change the set of solutions of a linear system. To prove this claim, let be a general linear system . Now consider each type of row operation separately, write down the new system you get by applying this row operation, and prove that an -tuple is a solution to the original system if and only if it is a solution to the new system .   Let be the original system with equations . For each specified row operation, we will call the resulting new system and its equations .   Row swap  In this case systems and have exactly the same equations, just written in a different order. Thus the -tuple satisfies if and only if it satisfies each of the equations , if and only if it satisfies each of the equations , since these are the same equations! It follows that is a solution of if and only if it is a solution to .    Scalar multiplication  In this case for all , and for some . Since only the -th equation has changed, it suffices to show that is a solution to if and only if is a solution to . Let's prove each direction of this if and only if separately.  If satisfies , then . Multiplying both sides by we see that and hence that is also a solution of .  For the other direction, if satisfies , then Now, since , we can multiply both sides of this equation by to see that and hence that is a solution to .    Row addition  The only equation of that differs from is . Writing this equation out in terms of coefficients gives us . Now if satisfies , then it satisfies and , in which case evaluating the RHS of the above at yields showing that satisfies . Now suppose satisfies . Since satisfies , we have Since satisfies , we have Substituting into the equation above we get , and hence . This shows that satisfies . It follows that satisfies .   "
},
{
  "id": "ex_solving_nonlinear_system",
  "level": "2",
  "url": "s_systems.html#ex_solving_nonlinear_system",
  "type": "Exercise",
  "number": "1.1.3.8",
  "title": "Nonlinear systems.",
  "body": "Nonlinear systems A nonlinear system of equations is a collection of equations, at least one of which is nonlinear. Our definition of a solution to a linear system generalizes easily to any system of equations.   Consider the following nonlinear system in the unknowns : .   Sketch the graphs of each of the two equations in the system on a common coordinate system.    Describe geometrically what a solution to the system is in terms of your sketch. Explain your reasoning. How many solutions to the system are there, according to your sketch?    Compute the set of all solutions to the system algebraically.       Now consider a more general system where are fixed constants and at least one of or is nonzero.    Explain geometrically what a solution to the system corresponds to in terms of the graphs of its two equations.    Use your geometric interpretation in (i) to argue that the system has either 0, 1, or 2 solutions. Give explicit examples of such systems corresponding to each of these three cases.      "
},
{
  "id": "s_systems_ex-2-5",
  "level": "2",
  "url": "s_systems.html#s_systems_ex-2-5",
  "type": "Exercise",
  "number": "1.1.3.9",
  "title": "Not all arithmetic operations preserve solutions.",
  "body": "Not all arithmetic operations preserve solutions  In this exercise we investigate how the operation of squaring both sides of an equation changes the set of solutions. Let represent a general equation (linear or nonlinear) in the unknowns , let be the equation obtained by squaring both sides of the , let be the set of solutions to , and let be the set of solutions to .    Show that .    Given an explicit example of an equation of the form in two variables for which .    "
},
{
  "id": "s_ge",
  "level": "1",
  "url": "s_ge.html",
  "type": "Section",
  "number": "1.2",
  "title": "Gaussian elimination",
  "body": " Gaussian elimination   In we sketched a procedure for solving a linear system . That procedure involved applying a sequence of row operations to to obtain a simpler system .  We will fill out this sketch in the next two sections. Specifically, we will   describe precisely what we mean by a simpler system,    provide an algorithm (or recipe) that decides exactly what sequence of row operations to apply to obtain this simpler system,    explain how to find all solutions of the resulting simpler system.       Row echelon matrices  Our first step in this direction will be to introduce a notational convenience. As you may have noticed, when performing row operations on a system of equations, we essentially treat the unknowns, as well as the plus and equals symbols, as placeholders; the only things that actually change in a given step are the coefficients in the equations. The augmented matrix associated to a linear system is a formal way of extracting just the information of the coefficients from a linear system.   Augmented matrix  augmented matrix    augmented matrix    Let be the linear system . The augmented matrix associated to  is the matrix .     As defined more thoroughly in , a matrix is just a rectangular array of numbers.   Here is our precise formulation of a simple linear system; it is a system whose associated augmented matrix is in row echelon form , as described below.   Row echelon form   A zero row of a matrix, is a row whose entries are all equal to zero; a nonzero row is a row that contains at least one nonzero entry.  A matrix is in row echelon form if the following conditions hold.  (i)  In any nonzero row the first (i.e., leftmost) nonzero entry is equal to one. A leading one of a matrix is such an entry: i.e., an entry of a row that is equal to one, and that is also the first nonzero entry of that row.   (ii)  All zero rows are grouped together at the bottom of the matrix.   (iii)  Given any two nonzero rows in the matrix, the leading one of the lower row occurs strictly to the right of the leading one of the row above it.     A matrix is in reduced row echelon form if in addition to conditions (i)-(iii) it also satisfies the following condition.   (iv) Any column of the matrix that contains a leading one has zeros elsewhere. In other words, if a column contains a leading one, then that is the only nonzero entry of that column.    A linear system is in row echelon form (resp. reduced row echelon form ) if its augmented matrix is in row echelon form (resp. reduced row echelon form).    In practice to decide whether a matrix is in in (reduced) row echelon form, follow these steps:   First verify whether all zero rows are at the bottom.    For each nonzero row, determine whether the first nonzero entry is a 1, and put a box around it.    Make sure your boxes make a staircase pattern.    (For reduced row echelon form only.) Decide whether each column with a box has 0's everywhere else.      Row echelon versus reduced row echelon form   For each matrix decide (a) whether it is in row echelon form, and (b) whether it is in reduced row echelon form.                  Below you find the matrix with leading ones boxed. This matrix fails to be in row echelon form (and hence also reduced row echelon form) for a variety of reasons: the zero rows are not all grouped at the bottom; the first row is nonzero, but does not have a leading one; the leading one of the fourth row is to the left of the leading one of the leading one in the row above it.     Below you find the matrix with leading ones boxed. This matrix is in row echelon form: the zero rows (rows 4 and 5) are grouped at the bottom; each nonzero row has a leading one (boxed in the matrix below); the leading ones step strictly to the right as we move down the rows. The matrix is not in reduced row echelon form, as the last column contains a leading one in its third row, and a nonzero entry in its first row.        Gaussian elimination  We will now describe a systematic procedure, called Gaussian elimination , that allows us to reduce a given linear system to a system in row echelon form. In keeping with the foregoing discussion, we will identify a system with its augmented matrix . Furthermore, reducing a linear system using elementary operations on equations is now cast as performing elementary row operations on matrices. At the risk of redundancy we now officially translate a number of our former notions regarding reduction of linear systems to the setting of matrices.   Elementary row operations on matrices  elementary row operations  elementary row operations scalar multiplication  elementary row operations row swap  elementary row operations row addition  row reduction of matrices  row equivalence of matrices   An elementary row operation is one of the three following types of matrix operations. Let be a given matrix, and denote by the -th row of .    Scalar multplication  Multiply a row by a nonzero number : i.e., replace with , the result of multiplying all entries of the row by .    Row swap  Swap two rows of .    Row addition  Add a multiple of one row to another: i.e., replace with for some , , and .    The act of transforming a matrix using elementary row operations is called row reduction .  Two matrices are row equivalent if the one can be obtained from the other by performing a finite sequence of elementary row operations.     Notation    scalar multiplication     row swap     replace with  Our former elementary operation notation easily transfers to row operations on matrices. The expressions denote the operations that replace row in with , swap rows and in , and replace in with , respectively.  At last we are ready to define Gaussian elimination. In its essence this is simply a procedure, or algorithm , that takes an input matrix and row reduces it to a matrix in row echelon form. It is important to note that although we employ Gaussian elimination in this chapter primarily to the end of simplifying and solving linear systems, this is not its only application. Indeed, we will come back to the procedure again and again, in a great variety of contexts and to greatly diverse ends. Gaussian elimination is one of linear algebra's most important tools. We memorialize this here as an official principle.   Gaussian elimination mantra   Gaussian elimination is the workhorse of linear algebra.     Gaussian elimination  Gaussian elimination    Gaussian elimination is the algorithm described below. It takes as an input a matrix and returns as an output a row equivalent matrix in row echelon form.    Step 1  Find the leftmost nonzero column and perform a row swap to move the row with this nonzero entry to the top of the matrix.    Step 2  Scale the new top row to produce a leading one in the row. Call this new row .    Step 3  For each row below perform a row operation of the form to replace all entries below the leading one of with zeros.    Step 4  Begin again with Step 1 applied to the matrix consisting of all rows below . Continue until the matrix is in row echelon form.       Model example  Use the following example as a model of how to both perform and annotate the steps in Gaussian elimination. When first learning this procedure, make sure to follow it to the letter . In particular, in the spirit of the mandate issued in , you should only perform one row operation at a time, and only in the sequence prescribed in Steps 1-4 of .   Row echelon form  We use Gaussian elimination to reduce the linear system to a system in row echelon form.  First we apply Gaussian elimination to the augmented matrix associated to our system. . We conclude that our original system is equivalent to the system , which is in row echelon form.   The matrix outputted by Gaussian elimination is guaranteed to be in row echelon form, but it may not be in reduced row echelon form. Gauss-Jordan elimination describes a systematic way to continue reducing to this even simpler state.    Gauss-Jordan elimination    Gauss-Jordan elimination is the algorithm described below. It takes as an input a matrix and returns a row equivalent matrix in reduced row echelon form.    Steps 1-4  Apply Gaussian elimination to transform to a matrix in row echelon form.    Step 5  Find the rightmost column of the matrix containing a leading one. Let be the row containing this leading one. For each row above perform a row operation of the form to replace all entries above the leading one with zeros.    Step 6  Begin again with Step 5 applied to the next column to the left that contains a leading one. Continue until the matrix is in reduced row echelon form.       Reduced row echelon form  We continue our work in to reach a matrix in reduced row echelon form. . Notice that the resulting system is slightly simpler than the system in row echelon form of : .    and are really theorems in disguise, and we make this official in .   Row equivalent matrix forms     Row echelon forms exist  Any matrix is row equivalent to a matrix in row echelon form. Indeed, Gaussian elimination row reduces any matrix to a matrix in row echelon form.    Reduced row echelon forms exist  Any matrix is row equivalent to a matrix in reduced row echelon form. Indeed, Gauss-Jordan elimination row reduces any matrix to a matrix in reduced row echelon form.    Reduced row echelon forms are unique  Any matrix is row equivalent to a unique matrix in reduced row echelon form.      We will make heavy use of the first two results of . The proofs of these statements are not difficult, but not especially illuminating. Accordingly we omit them here, and point the interested reader to Robert Beezer's A First Course in Linear Algebra . (See Theorem REMEF .)  The third statement of , that every matrix is row equivalent to a unique matrix in reduced row echelon form, does in fact have an enlightening proof. We will postpone this proof, however, until we have a little more theory at our disposal. (See .) Until then we will conscientiously not make use of this fact when developing any of our further theory.   Row echelon form is not unique   Show that a matrix may be row equivalent to two or more matrices in row echelon form.    Take . This row reduces to using Gaussian elimination; and it row reduces further to using Gauss-Jordan elimination. Thus we see that is row equivalent to two different matrices in row echelon form. (According to , the matrix is the only matrix in reduced row echelon that is row equivalent to .)     Gaussian elimination  In the first Sage cell below you find a recursive implementation of Gaussian elimination in Sage that includes explanatory comments. Evaluate this cell in order to load the row_echelon_form function. The second cell allows you to apply the Gaussian elimination algorithm to a matrix of your choosing. As you can see, the show function provides a nice latex version of the output.    Sage has its own row reduction method, rref , which transforms a matrix to reduced row echelon form. Let's compare the outputs of these two algorithms.   The following activities could be useful for implementing Gaussian elimination in a manner that shows all intervening steps. Use the empty Sage cell below to experiment.   Modify the row_echelon_form code to make a non-recursive algorithm.    Add show commands to your non-recursive version of row_echelon_form to show steps in the row reduction.          WeBWork Exercises     Determine if the matrix   is in echelon form, reduced row echelon form, or neither. Choose the most appropriate answer.  Answer:   select    echelon form    reduced row echelon form    not in echelon form   .        SOLUTION: Reduced row echelon form.          PTX:ERROR: WeBWorK problem Library\/Mizzou\/Finite_Math\/MatrixOperations\/RowOp3by3e.pg with seed 24 is either empty or failed to compile Use -a to halt with returned content       On the augmented matrix below , perform all three row operations in the order given, ((a) followed by (b) followed by (c)) and then write the resulting augmented matrix.                                                                                             Written Exercises    Explain why each of the following matrices fails to be in row echelon form.        The first nonzero term in the second row is not a one.                For each of the given linear systems, find an equivalent system in row echelon form. Use augmented matrices and follow the Gaussian elimination algorithm to the letter.        First bring the system into standard form: . Then perform Gaussian elimination on the associated augmented matrix: . The corresponding equivalent system is .                          "
},
{
  "id": "d_augmented_matrix",
  "level": "2",
  "url": "s_ge.html#d_augmented_matrix",
  "type": "Definition",
  "number": "1.2.1",
  "title": "Augmented matrix.",
  "body": " Augmented matrix  augmented matrix    augmented matrix    Let be the linear system . The augmented matrix associated to  is the matrix .   "
},
{
  "id": "s_ge_rm_see_def",
  "level": "2",
  "url": "s_ge.html#s_ge_rm_see_def",
  "type": "Remark",
  "number": "1.2.2",
  "title": "",
  "body": " As defined more thoroughly in , a matrix is just a rectangular array of numbers.  "
},
{
  "id": "d_row_echelon",
  "level": "2",
  "url": "s_ge.html#d_row_echelon",
  "type": "Definition",
  "number": "1.2.3",
  "title": "Row echelon form.",
  "body": " Row echelon form   A zero row of a matrix, is a row whose entries are all equal to zero; a nonzero row is a row that contains at least one nonzero entry.  A matrix is in row echelon form if the following conditions hold.  (i)  In any nonzero row the first (i.e., leftmost) nonzero entry is equal to one. A leading one of a matrix is such an entry: i.e., an entry of a row that is equal to one, and that is also the first nonzero entry of that row.   (ii)  All zero rows are grouped together at the bottom of the matrix.   (iii)  Given any two nonzero rows in the matrix, the leading one of the lower row occurs strictly to the right of the leading one of the row above it.     A matrix is in reduced row echelon form if in addition to conditions (i)-(iii) it also satisfies the following condition.   (iv) Any column of the matrix that contains a leading one has zeros elsewhere. In other words, if a column contains a leading one, then that is the only nonzero entry of that column.    A linear system is in row echelon form (resp. reduced row echelon form ) if its augmented matrix is in row echelon form (resp. reduced row echelon form).   "
},
{
  "id": "ss_ge_row_echelon-8",
  "level": "2",
  "url": "s_ge.html#ss_ge_row_echelon-8",
  "type": "Example",
  "number": "1.2.4",
  "title": "Row echelon versus reduced row echelon form.",
  "body": " Row echelon versus reduced row echelon form   For each matrix decide (a) whether it is in row echelon form, and (b) whether it is in reduced row echelon form.                  Below you find the matrix with leading ones boxed. This matrix fails to be in row echelon form (and hence also reduced row echelon form) for a variety of reasons: the zero rows are not all grouped at the bottom; the first row is nonzero, but does not have a leading one; the leading one of the fourth row is to the left of the leading one of the leading one in the row above it.     Below you find the matrix with leading ones boxed. This matrix is in row echelon form: the zero rows (rows 4 and 5) are grouped at the bottom; each nonzero row has a leading one (boxed in the matrix below); the leading ones step strictly to the right as we move down the rows. The matrix is not in reduced row echelon form, as the last column contains a leading one in its third row, and a nonzero entry in its first row.     "
},
{
  "id": "d_rowops",
  "level": "2",
  "url": "s_ge.html#d_rowops",
  "type": "Definition",
  "number": "1.2.5",
  "title": "Elementary row operations on matrices.",
  "body": " Elementary row operations on matrices  elementary row operations  elementary row operations scalar multiplication  elementary row operations row swap  elementary row operations row addition  row reduction of matrices  row equivalence of matrices   An elementary row operation is one of the three following types of matrix operations. Let be a given matrix, and denote by the -th row of .    Scalar multplication  Multiply a row by a nonzero number : i.e., replace with , the result of multiplying all entries of the row by .    Row swap  Swap two rows of .    Row addition  Add a multiple of one row to another: i.e., replace with for some , , and .    The act of transforming a matrix using elementary row operations is called row reduction .  Two matrices are row equivalent if the one can be obtained from the other by performing a finite sequence of elementary row operations.   "
},
{
  "id": "s_ge_notation",
  "level": "2",
  "url": "s_ge.html#s_ge_notation",
  "type": "Remark",
  "number": "1.2.6",
  "title": "Notation.",
  "body": " Notation    scalar multiplication     row swap     replace with  Our former elementary operation notation easily transfers to row operations on matrices. The expressions denote the operations that replace row in with , swap rows and in , and replace in with , respectively. "
},
{
  "id": "princ_GE",
  "level": "2",
  "url": "s_ge.html#princ_GE",
  "type": "Mantra",
  "number": "1.2.7",
  "title": "Gaussian elimination mantra.",
  "body": " Gaussian elimination mantra   Gaussian elimination is the workhorse of linear algebra.   "
},
{
  "id": "d_GE",
  "level": "2",
  "url": "s_ge.html#d_GE",
  "type": "Definition",
  "number": "1.2.8",
  "title": "Gaussian elimination.",
  "body": " Gaussian elimination  Gaussian elimination    Gaussian elimination is the algorithm described below. It takes as an input a matrix and returns as an output a row equivalent matrix in row echelon form.    Step 1  Find the leftmost nonzero column and perform a row swap to move the row with this nonzero entry to the top of the matrix.    Step 2  Scale the new top row to produce a leading one in the row. Call this new row .    Step 3  For each row below perform a row operation of the form to replace all entries below the leading one of with zeros.    Step 4  Begin again with Step 1 applied to the matrix consisting of all rows below . Continue until the matrix is in row echelon form.     "
},
{
  "id": "eg_model_example",
  "level": "2",
  "url": "s_ge.html#eg_model_example",
  "type": "Example",
  "number": "1.2.9",
  "title": "Row echelon form.",
  "body": " Row echelon form  We use Gaussian elimination to reduce the linear system to a system in row echelon form.  First we apply Gaussian elimination to the augmented matrix associated to our system. . We conclude that our original system is equivalent to the system , which is in row echelon form.  "
},
{
  "id": "d_GaussJordan",
  "level": "2",
  "url": "s_ge.html#d_GaussJordan",
  "type": "Definition",
  "number": "1.2.10",
  "title": "Gauss-Jordan elimination.",
  "body": " Gauss-Jordan elimination    Gauss-Jordan elimination is the algorithm described below. It takes as an input a matrix and returns a row equivalent matrix in reduced row echelon form.    Steps 1-4  Apply Gaussian elimination to transform to a matrix in row echelon form.    Step 5  Find the rightmost column of the matrix containing a leading one. Let be the row containing this leading one. For each row above perform a row operation of the form to replace all entries above the leading one with zeros.    Step 6  Begin again with Step 5 applied to the next column to the left that contains a leading one. Continue until the matrix is in reduced row echelon form.     "
},
{
  "id": "eg_model_rref",
  "level": "2",
  "url": "s_ge.html#eg_model_rref",
  "type": "Example",
  "number": "1.2.11",
  "title": "Reduced row echelon form.",
  "body": " Reduced row echelon form  We continue our work in to reach a matrix in reduced row echelon form. . Notice that the resulting system is slightly simpler than the system in row echelon form of : .  "
},
{
  "id": "th_matrixforms",
  "level": "2",
  "url": "s_ge.html#th_matrixforms",
  "type": "Theorem",
  "number": "1.2.12",
  "title": "Row equivalent matrix forms.",
  "body": " Row equivalent matrix forms     Row echelon forms exist  Any matrix is row equivalent to a matrix in row echelon form. Indeed, Gaussian elimination row reduces any matrix to a matrix in row echelon form.    Reduced row echelon forms exist  Any matrix is row equivalent to a matrix in reduced row echelon form. Indeed, Gauss-Jordan elimination row reduces any matrix to a matrix in reduced row echelon form.    Reduced row echelon forms are unique  Any matrix is row equivalent to a unique matrix in reduced row echelon form.     "
},
{
  "id": "s_ge_ex_REFnotunique",
  "level": "2",
  "url": "s_ge.html#s_ge_ex_REFnotunique",
  "type": "Example",
  "number": "1.2.13",
  "title": "Row echelon form is not unique.",
  "body": " Row echelon form is not unique   Show that a matrix may be row equivalent to two or more matrices in row echelon form.    Take . This row reduces to using Gaussian elimination; and it row reduces further to using Gauss-Jordan elimination. Thus we see that is row equivalent to two different matrices in row echelon form. (According to , the matrix is the only matrix in reduced row echelon that is row equivalent to .)   "
},
{
  "id": "sage_ge",
  "level": "2",
  "url": "s_ge.html#sage_ge",
  "type": "Sage example",
  "number": "1.2.1",
  "title": "Gaussian elimination.",
  "body": " Gaussian elimination  In the first Sage cell below you find a recursive implementation of Gaussian elimination in Sage that includes explanatory comments. Evaluate this cell in order to load the row_echelon_form function. The second cell allows you to apply the Gaussian elimination algorithm to a matrix of your choosing. As you can see, the show function provides a nice latex version of the output.    Sage has its own row reduction method, rref , which transforms a matrix to reduced row echelon form. Let's compare the outputs of these two algorithms.   The following activities could be useful for implementing Gaussian elimination in a manner that shows all intervening steps. Use the empty Sage cell below to experiment.   Modify the row_echelon_form code to make a non-recursive algorithm.    Add show commands to your non-recursive version of row_echelon_form to show steps in the row reduction.      "
},
{
  "id": "s_ge_ex-1-2",
  "level": "2",
  "url": "s_ge.html#s_ge_ex-1-2",
  "type": "Exercise",
  "number": "1.2.3.1",
  "title": "",
  "body": "  Determine if the matrix   is in echelon form, reduced row echelon form, or neither. Choose the most appropriate answer.  Answer:   select    echelon form    reduced row echelon form    not in echelon form   .        SOLUTION: Reduced row echelon form.      "
},
{
  "id": "s_ge_ex-1-3",
  "level": "2",
  "url": "s_ge.html#s_ge_ex-1-3",
  "type": "Exercise",
  "number": "1.2.3.2",
  "title": "",
  "body": "   PTX:ERROR: WeBWorK problem Library\/Mizzou\/Finite_Math\/MatrixOperations\/RowOp3by3e.pg with seed 24 is either empty or failed to compile Use -a to halt with returned content    "
},
{
  "id": "s_ge_ex-1-4",
  "level": "2",
  "url": "s_ge.html#s_ge_ex-1-4",
  "type": "Exercise",
  "number": "1.2.3.3",
  "title": "",
  "body": "  On the augmented matrix below , perform all three row operations in the order given, ((a) followed by (b) followed by (c)) and then write the resulting augmented matrix.                                                                                          "
},
{
  "id": "s_ge_ex-2-2-2",
  "level": "2",
  "url": "s_ge.html#s_ge_ex-2-2-2",
  "type": "Exercise",
  "number": "1.2.3.4",
  "title": "",
  "body": "     The first nonzero term in the second row is not a one.  "
},
{
  "id": "s_ge_ex-2-2-3",
  "level": "2",
  "url": "s_ge.html#s_ge_ex-2-2-3",
  "type": "Exercise",
  "number": "1.2.3.5",
  "title": "",
  "body": "    "
},
{
  "id": "s_ge_ex-2-2-4",
  "level": "2",
  "url": "s_ge.html#s_ge_ex-2-2-4",
  "type": "Exercise",
  "number": "1.2.3.6",
  "title": "",
  "body": "    "
},
{
  "id": "s_ge_equivsys",
  "level": "2",
  "url": "s_ge.html#s_ge_equivsys",
  "type": "Exercise",
  "number": "1.2.3.7",
  "title": "",
  "body": "     First bring the system into standard form: . Then perform Gaussian elimination on the associated augmented matrix: . The corresponding equivalent system is .  "
},
{
  "id": "s_ge_ex-2-3-3",
  "level": "2",
  "url": "s_ge.html#s_ge_ex-2-3-3",
  "type": "Exercise",
  "number": "1.2.3.8",
  "title": "",
  "body": "    "
},
{
  "id": "s_ge_ex-2-3-4",
  "level": "2",
  "url": "s_ge.html#s_ge_ex-2-3-4",
  "type": "Exercise",
  "number": "1.2.3.9",
  "title": "",
  "body": "    "
},
{
  "id": "s_ge_ex-2-3-5",
  "level": "2",
  "url": "s_ge.html#s_ge_ex-2-3-5",
  "type": "Exercise",
  "number": "1.2.3.10",
  "title": "",
  "body": "    "
},
{
  "id": "s_ge_ex-2-3-6",
  "level": "2",
  "url": "s_ge.html#s_ge_ex-2-3-6",
  "type": "Exercise",
  "number": "1.2.3.11",
  "title": "",
  "body": "    "
},
{
  "id": "s_solving",
  "level": "1",
  "url": "s_solving.html",
  "type": "Section",
  "number": "1.3",
  "title": "Solving linear systems",
  "body": " Solving linear systems   Let's continue with our model example . Summarizing the various steps, we have . The new system in row echelon form is undoubtedly simpler, but describing all of its solutions still requires some subtle analysis.    Model example continued  We begin by illustrating the general method for solving a linear system, continuing with our model example . A careful description of the procedure, along with a proof of its validity, is found in .  A key first step involves separating the variables of the system into free and leading variables.   Free and leading variables   variables  leading    variables  free    Let be a linear system in the unknowns , and let be its associated augmented matrix. Assume (and hence ) is in row echelon form.  The unknown is a leading variable if the corresponding column in (i.e., the -th column) contains a leading one; it is a free variable if the corresponding column in does not contain a leading one.     Free and leading variables   Let be the linear system in the unknowns with augmented matrix . Then are leading variables, since the first, second, and fourth columns of have leading ones, as indicated by the boxes. The variable is free since the third column of has no leading one.     Solving linear systems  In our model example we transformed the original system to the equivalent system below: . The free variables of are and ; the leading variables are , and . Observe that if we assign and , where and are any real numbers, then we are left with a system in three unknowns ( ) of the form . Using back-substitution, we see that the unknowns are then uniquely expressed in terms of and as Thus for any choice of real numbers and we get a unique solution of the form . We conclude the set of solutions to is given as Alternatively, we can describe the solutions to with the parametric equations      Mandate  parametric equations  Get used to describing solutions to linear systems using either the set notation format of or the parametric equation format of .  Note also the distinct roles played by free and leading variables in the description of solutions. We assign each free variable freely to any choice of real parameters ( and in our example), and then solve for the leading variables in terms of these parameters in a unique manner. In particular, the leading variables are completely determined by our assignment of free variables.     General method for solving linear systems  Before describing a precise algorithm for computing the set of solutions to a linear system, we must address the possibility that there are no solutions to the system whatsoever. Such a system is called inconsistent .   Consistent and inconsistent systems  consistent  inconsistent   A linear system is consistent if it has at least one solution; it is inconsistent if it has no solutions.    We are now in a position to describe an algorithm for computing the set of solutions of a linear system.   Solving linear systems   Let be a linear system in the unknowns , and let be the set of all solutions of . We compute as follows.    Step 1  Apply Gaussian elimination to reduce to an equivalent system in row echelon form.    Step 2  Let be the augmented matrix associated to . If the last column of has a leading one, then is inconsistent: , is the empty set. Otherwise, proceed to the next step.    Step 3  Determine which if any of the unknowns are free variables of .    Step 4  If there are no free variables, solve for each unknown using back-substitution. In this case, there is a unique solution to : , contains exactly one element.  Otherwise, let be the leading variables of , and let be the free variables. Back-substitution allows us to express each leading variable in terms of the free variables. In other words, we can write , where each is a linear expression in the free variables. Each solution of thus corresponds to a unique variable assignment of the form , where are any real numbers.       First recall that and have the same set of solutions ( ). So it suffices to show that the algorithm returns the correct set of solutions to .  Regarding consistency: if the last column of the augmented matrix associated to has a leading one in the -th row, then the corresponding equation in is Clearly this equation has no solutions, and hence the set of solutions to is empty.  Suppose now that the last column of does not have a leading one.   Case 1: no free variables   Suppose in Step 3 you determine that there are no free variables. Then each of the first columns of has a leading one in it. If follows that for each the -th equation of is of the form Since does not have a leading one in the last column, it follows that all equations beyond the -th equation are of the form , and as such may be disregarded since they are satisfied by any choice of the . The remaining system of equations in unknowns can be solved by back-substitution, yielding a unique solution of the form Do not concern yourself overly with the exact formulas. The important point here is that once we know there is a unique assignment of the variables that satisfies the system, allows us to solve for in terms of the the , . As such working our way up from the last equation, we find there is a unique solution to the system.     Case 2: free variables  Suppose now that are the leading variables of , and are the free variables. Again, since does not have a leading one in the last column, there are exactly nonzero equations in : one for each leading variable. After bringing any terms involving free variables to the right, the -th such equation takes the form . As in the previous case, back-substitution now allows us to solve for each leading variable as a function of the free variables: This new system of equations clearly has the same set of solutions as (and ), since it was obtained from by deleting zero rows of and using only addition and subtraction operations. Furthermore, it is clear that any assignment of the free variables extends uniquely to the solution of that further assigns . The idea behind uniqueness here, is that once you assign values to the free variables, the values of the leading variables are completely determined by the equations .  Lastly, we show that every solution of (and ) is obtained in this way. Suppose is a solution. According to the discussion above must be the unique solution to corresponding to the free variable assignment and corresponding leading variable assignment .     Video examples of solving linear systems    Video: solving linear systems  Video: solving linear systems     Video: solving linear systems 2  Video: solving linear systems 2       Solving linear systems  Sage has a number of means of solving systems of equations, both linear and nonlinear. In the cell below we compute the set of solutions to this section's working example. Note that the three equations are entered as a list.   Notice that the algorithm used here does not seem to follow the method we describe: the unknowns and are set as free parameters r1 and r2 , and the rest of the unknowns are expressed in terms of these. The solve routine in Sage allows for an additional option that selects a specific algorithm for solving the system. In the next cell, we specify the sympy algorithm and get an answer more in line with our example.   Now all unknowns are expressed in terms of the second and fourth unknowns and , which are treated as free variables, just as in our computed example.  Lastly, we can take a matrix approach with Sage to solve the system. Below we create the augmented matrix associated to our starting system and then reduce the system to reduced row echelon form using the rref method. From there it is a simple matter of assigning parameter names and using back-substitution, as described in . We will elaborate this method further in     In addition to providing a recipe for describing the full set of solutions to a linear system, also tells us that qualitatively this set must take one of three forms: the set is empty (inconsistent, no solutions); there is a unique solution (consistent, no free variables); there are infinitely many solutions (consistent, free variables). We record this fact, useful in its own right, as a corollary.   , , or -many solutions   Let be a linear system of equations, let be an equivalent system in row reduced form, and let be the augmented matrix associated to .  The system has either no solutions, exactly one solution, or infinitely many solutions. In more detail:    If has a leading one in its last column, then has no solutions.    If does not have a leading one in its last column and has no free variables, then has a unique solution.    If does not have a leading one in its last column and has a free variable, then has infinitely many solutions.      The decision tree in concisely summarizes the different cases articulated in .   Decision tree for number of solutions to a system  Decision tree for the number of solutions to a linear system with augmented matrix in row echelon form.         Solutions to homogeneous systems  Consider the special case of a homogeneous system Such a system is always consistent. Why? Observe that is guaranteed to be a solution. Alternatively, it is easy to see that row reducing the system results in an augmented matrix whose last column is a zero column: a zero column certainly contains no leading ones. Thus, in the special case of a homogeneous system, boils down to the following result.   Solutions to homogeneous equations   Fix a homogeneous linear system in variables. There are two possibilities:   if all the variables are leading variables, then the system has a unique solution (i.e., solution);    if there is a free variable, then the system has infinitely many solutions.          WeBWork Exercises    Solve the following system using augmented matrix methods:  (a) The initial matrix is:              (b) First, perform the Row Operation . The resulting matrix is:              (c) Next, perform the operation . The resulting matrix is:              (d) Finish simplifying the augmented matrix to reduced row echelon form. The reduced matrix is:              (e) How many solutions does the system have? If infinitely many, enter \"Infinity\".  (f) What are the solutions to the system?  If there are no solutions, write \"No Solution\" or \"None\" for each answer. If there are infinitely many solutions let and solve for in terms of .                                                                                                                                                    Solve the following system using augmented matrix methods:  (a) The initial matrix is:                      (b) First, perform the Row Operation . The resulting matrix is:                      (c) Next, perform the operations   .  The resulting matrix is:                      (d) Finish simplifying the augmented matrix down to reduced row echelon form. The reduced matrix is:                      Remember: This matrix must be simplified all the way to reduced form.  (e) How many solutions does the system have? If infinitely many, enter \"Infinity\". If none, enter 0.  (f) What are the solutions of the system?        Note: In part (f), if there are no solutions, write \"No Solution\" or \"None\" in the answer blank after each equal sign. If there are infinitely many solutions, and the solution set describes a line (that is, if there is only one free variable), set and solve for the remaining variables in terms of . If there are infinitely many solutions, and the solution set describes a plane (that is, if the solution set has two free variables), set the variables and , and then solve for in terms of and .                                                                                                                                                                                                                                                                             Solve  = , = , = , = .                             Determine whether the following system has no solution, an infinite number of solutions or a unique solution.                       Written Exercises   Solving linear systems   Solve the following systems of equations.   When row reducing follow Gaussian elimination to the letter.    Make sure to indicate how variables are sorted into free and leading variables.    Express your answer in both the parametric equation format and set notation format.           We saw in that the system is equivalent to a system with augmented matrix . The row echelon matrix tells us that is the only free variable of . Back substitution then yields the parametric equation description: . Thus the set of solutions is .                         For each system below determine all values of for which the system below has (a) no solutions, (b) a unique solution, and (c) infinitely many solutions.              Show that a linear system with more unknowns than equations has either 0 solutions or infinitely many solutions.    True or false. If true, provide a proof; if false, provide an explicit counterexample.    Every matrix has a unique row echelon form.    Any homogeneous linear system with more unknowns than equations has infinitely many solutions.    If a homogeneous linear system of equations in unknowns has a corresponding augmented matrix with a reduced row echelon form containing leading ones, then the linear system has the unique solution .    All leading ones in of a matrix in row echelon form must occur in distinct columns.    If the reduced row echelon form of the augmented matrix for a linear system has a zero row, then the system must have infinitely many solutions.    If a linear system has more unknowns than equations, then it must have infinitely many solutions.      Interpret each matrix below as an augmented matrix of a linear system. Asterisks represent an unspecified real number. For each matrix, determine whether the corresponding system is consistent or inconsistent. If the system is consistent, decide further whether the solution is unique or not. If there is not enough information answer inconclusive and back up your claim by giving an explicit example where the system is consistent, and an explicit example where the system is inconsistent.                          What condition must and satisfy in order for the system below to be consistent? Express your answer as an equation involving and .     Solve the system of equations below for , , and .    First replace the given nonlinear system with a linear one using a change of variable substitution.    If is a matrix with three rows and five columns, then what is the maximum possible number of leading ones in its reduced row echelon form? Justify your answer.  Provide an explicit example of a matrix that attains this maximum number of leading ones.    If is a matrix with three rows and six columns, then what is the maximum possible number of free variables in the general solution of the linear system with augmented matrix ? Justify your answer.  Provide an explicit example of a matrix that attains this maximal number of free variables.    If is a matrix with five rows and three columns, then what is the minimum possible number of zero rows in any row echelon form of ?  Provide an explicit example of a matrix that attains this minimal number of zero rows.     "
},
{
  "id": "d_free-leading",
  "level": "2",
  "url": "s_solving.html#d_free-leading",
  "type": "Definition",
  "number": "1.3.1",
  "title": "Free and leading variables.",
  "body": " Free and leading variables   variables  leading    variables  free    Let be a linear system in the unknowns , and let be its associated augmented matrix. Assume (and hence ) is in row echelon form.  The unknown is a leading variable if the corresponding column in (i.e., the -th column) contains a leading one; it is a free variable if the corresponding column in does not contain a leading one.   "
},
{
  "id": "s_solving_eg_free-leading",
  "level": "2",
  "url": "s_solving.html#s_solving_eg_free-leading",
  "type": "Example",
  "number": "1.3.2",
  "title": "Free and leading variables.",
  "body": " Free and leading variables   Let be the linear system in the unknowns with augmented matrix . Then are leading variables, since the first, second, and fourth columns of have leading ones, as indicated by the boxes. The variable is free since the third column of has no leading one.   "
},
{
  "id": "eg_solving_system",
  "level": "2",
  "url": "s_solving.html#eg_solving_system",
  "type": "Example",
  "number": "1.3.3",
  "title": "Solving linear systems.",
  "body": " Solving linear systems  In our model example we transformed the original system to the equivalent system below: . The free variables of are and ; the leading variables are , and . Observe that if we assign and , where and are any real numbers, then we are left with a system in three unknowns ( ) of the form . Using back-substitution, we see that the unknowns are then uniquely expressed in terms of and as Thus for any choice of real numbers and we get a unique solution of the form . We conclude the set of solutions to is given as Alternatively, we can describe the solutions to with the parametric equations    "
},
{
  "id": "s_solving_rm_parametric",
  "level": "2",
  "url": "s_solving.html#s_solving_rm_parametric",
  "type": "Remark",
  "number": "1.3.4",
  "title": "Mandate.",
  "body": " Mandate  parametric equations  Get used to describing solutions to linear systems using either the set notation format of or the parametric equation format of .  Note also the distinct roles played by free and leading variables in the description of solutions. We assign each free variable freely to any choice of real parameters ( and in our example), and then solve for the leading variables in terms of these parameters in a unique manner. In particular, the leading variables are completely determined by our assignment of free variables.  "
},
{
  "id": "d_consistent",
  "level": "2",
  "url": "s_solving.html#d_consistent",
  "type": "Definition",
  "number": "1.3.5",
  "title": "Consistent and inconsistent systems.",
  "body": " Consistent and inconsistent systems  consistent  inconsistent   A linear system is consistent if it has at least one solution; it is inconsistent if it has no solutions.   "
},
{
  "id": "proc_solveSystem",
  "level": "2",
  "url": "s_solving.html#proc_solveSystem",
  "type": "Procedure",
  "number": "1.3.6",
  "title": "Solving linear systems.",
  "body": " Solving linear systems   Let be a linear system in the unknowns , and let be the set of all solutions of . We compute as follows.    Step 1  Apply Gaussian elimination to reduce to an equivalent system in row echelon form.    Step 2  Let be the augmented matrix associated to . If the last column of has a leading one, then is inconsistent: , is the empty set. Otherwise, proceed to the next step.    Step 3  Determine which if any of the unknowns are free variables of .    Step 4  If there are no free variables, solve for each unknown using back-substitution. In this case, there is a unique solution to : , contains exactly one element.  Otherwise, let be the leading variables of , and let be the free variables. Back-substitution allows us to express each leading variable in terms of the free variables. In other words, we can write , where each is a linear expression in the free variables. Each solution of thus corresponds to a unique variable assignment of the form , where are any real numbers.     "
},
{
  "id": "ss_solveSystem-6",
  "level": "2",
  "url": "s_solving.html#ss_solveSystem-6",
  "type": "Proof",
  "number": "1.3.2.1",
  "title": "",
  "body": " First recall that and have the same set of solutions ( ). So it suffices to show that the algorithm returns the correct set of solutions to .  Regarding consistency: if the last column of the augmented matrix associated to has a leading one in the -th row, then the corresponding equation in is Clearly this equation has no solutions, and hence the set of solutions to is empty.  Suppose now that the last column of does not have a leading one.   Case 1: no free variables   Suppose in Step 3 you determine that there are no free variables. Then each of the first columns of has a leading one in it. If follows that for each the -th equation of is of the form Since does not have a leading one in the last column, it follows that all equations beyond the -th equation are of the form , and as such may be disregarded since they are satisfied by any choice of the . The remaining system of equations in unknowns can be solved by back-substitution, yielding a unique solution of the form Do not concern yourself overly with the exact formulas. The important point here is that once we know there is a unique assignment of the variables that satisfies the system, allows us to solve for in terms of the the , . As such working our way up from the last equation, we find there is a unique solution to the system.     Case 2: free variables  Suppose now that are the leading variables of , and are the free variables. Again, since does not have a leading one in the last column, there are exactly nonzero equations in : one for each leading variable. After bringing any terms involving free variables to the right, the -th such equation takes the form . As in the previous case, back-substitution now allows us to solve for each leading variable as a function of the free variables: This new system of equations clearly has the same set of solutions as (and ), since it was obtained from by deleting zero rows of and using only addition and subtraction operations. Furthermore, it is clear that any assignment of the free variables extends uniquely to the solution of that further assigns . The idea behind uniqueness here, is that once you assign values to the free variables, the values of the leading variables are completely determined by the equations .  Lastly, we show that every solution of (and ) is obtained in this way. Suppose is a solution. According to the discussion above must be the unique solution to corresponding to the free variable assignment and corresponding leading variable assignment .   "
},
{
  "id": "ss_GE_video_examples-2-1",
  "level": "2",
  "url": "s_solving.html#ss_GE_video_examples-2-1",
  "type": "Figure",
  "number": "1.3.7",
  "title": "Video: solving linear systems",
  "body": " Video: solving linear systems  Video: solving linear systems   "
},
{
  "id": "ss_GE_video_examples-2-2",
  "level": "2",
  "url": "s_solving.html#ss_GE_video_examples-2-2",
  "type": "Figure",
  "number": "1.3.8",
  "title": "Video: solving linear systems 2",
  "body": " Video: solving linear systems 2  Video: solving linear systems 2   "
},
{
  "id": "sage_solve_system",
  "level": "2",
  "url": "s_solving.html#sage_solve_system",
  "type": "Sage example",
  "number": "1.3.1",
  "title": "Solving linear systems.",
  "body": " Solving linear systems  Sage has a number of means of solving systems of equations, both linear and nonlinear. In the cell below we compute the set of solutions to this section's working example. Note that the three equations are entered as a list.   Notice that the algorithm used here does not seem to follow the method we describe: the unknowns and are set as free parameters r1 and r2 , and the rest of the unknowns are expressed in terms of these. The solve routine in Sage allows for an additional option that selects a specific algorithm for solving the system. In the next cell, we specify the sympy algorithm and get an answer more in line with our example.   Now all unknowns are expressed in terms of the second and fourth unknowns and , which are treated as free variables, just as in our computed example.  Lastly, we can take a matrix approach with Sage to solve the system. Below we create the augmented matrix associated to our starting system and then reduce the system to reduced row echelon form using the rref method. From there it is a simple matter of assigning parameter names and using back-substitution, as described in . We will elaborate this method further in    "
},
{
  "id": "c_qualitative",
  "level": "2",
  "url": "s_solving.html#c_qualitative",
  "type": "Corollary",
  "number": "1.3.9",
  "title": "<span class=\"process-math\">\\(0\\text{,}\\)<\/span> <span class=\"process-math\">\\(1\\text{,}\\)<\/span> or <span class=\"process-math\">\\(\\infty\\)<\/span>-many solutions.",
  "body": " , , or -many solutions   Let be a linear system of equations, let be an equivalent system in row reduced form, and let be the augmented matrix associated to .  The system has either no solutions, exactly one solution, or infinitely many solutions. In more detail:    If has a leading one in its last column, then has no solutions.    If does not have a leading one in its last column and has no free variables, then has a unique solution.    If does not have a leading one in its last column and has a free variable, then has infinitely many solutions.     "
},
{
  "id": "fig_decision_tree",
  "level": "2",
  "url": "s_solving.html#fig_decision_tree",
  "type": "Figure",
  "number": "1.3.10",
  "title": "Decision tree for number of solutions to a system",
  "body": " Decision tree for number of solutions to a system  Decision tree for the number of solutions to a linear system with augmented matrix in row echelon form.     "
},
{
  "id": "s_solving_homogeneous",
  "level": "2",
  "url": "s_solving.html#s_solving_homogeneous",
  "type": "Corollary",
  "number": "1.3.11",
  "title": "Solutions to homogeneous equations.",
  "body": " Solutions to homogeneous equations   Fix a homogeneous linear system in variables. There are two possibilities:   if all the variables are leading variables, then the system has a unique solution (i.e., solution);    if there is a free variable, then the system has infinitely many solutions.      "
},
{
  "id": "s_solving_ex-1-2",
  "level": "2",
  "url": "s_solving.html#s_solving_ex-1-2",
  "type": "Exercise",
  "number": "1.3.3.1",
  "title": "",
  "body": "  Solve the following system using augmented matrix methods:  (a) The initial matrix is:              (b) First, perform the Row Operation . The resulting matrix is:              (c) Next, perform the operation . The resulting matrix is:              (d) Finish simplifying the augmented matrix to reduced row echelon form. The reduced matrix is:              (e) How many solutions does the system have? If infinitely many, enter \"Infinity\".  (f) What are the solutions to the system?  If there are no solutions, write \"No Solution\" or \"None\" for each answer. If there are infinitely many solutions let and solve for in terms of .                                                                                                                                                 "
},
{
  "id": "s_solving_ex-1-3",
  "level": "2",
  "url": "s_solving.html#s_solving_ex-1-3",
  "type": "Exercise",
  "number": "1.3.3.2",
  "title": "",
  "body": "  Solve the following system using augmented matrix methods:  (a) The initial matrix is:                      (b) First, perform the Row Operation . The resulting matrix is:                      (c) Next, perform the operations   .  The resulting matrix is:                      (d) Finish simplifying the augmented matrix down to reduced row echelon form. The reduced matrix is:                      Remember: This matrix must be simplified all the way to reduced form.  (e) How many solutions does the system have? If infinitely many, enter \"Infinity\". If none, enter 0.  (f) What are the solutions of the system?        Note: In part (f), if there are no solutions, write \"No Solution\" or \"None\" in the answer blank after each equal sign. If there are infinitely many solutions, and the solution set describes a line (that is, if there is only one free variable), set and solve for the remaining variables in terms of . If there are infinitely many solutions, and the solution set describes a plane (that is, if the solution set has two free variables), set the variables and , and then solve for in terms of and .                                                                                                                                                                                                                                                                          "
},
{
  "id": "s_solving_ex-1-4",
  "level": "2",
  "url": "s_solving.html#s_solving_ex-1-4",
  "type": "Exercise",
  "number": "1.3.3.3",
  "title": "",
  "body": "  Solve  = , = , = , = .                          "
},
{
  "id": "s_solving_ex-1-5",
  "level": "2",
  "url": "s_solving.html#s_solving_ex-1-5",
  "type": "Exercise",
  "number": "1.3.3.4",
  "title": "",
  "body": "  Determine whether the following system has no solution, an infinite number of solutions or a unique solution.                    "
},
{
  "id": "s_solving_ex-2-2-3",
  "level": "2",
  "url": "s_solving.html#s_solving_ex-2-2-3",
  "type": "Exercise",
  "number": "1.3.3.5",
  "title": "",
  "body": "     We saw in that the system is equivalent to a system with augmented matrix . The row echelon matrix tells us that is the only free variable of . Back substitution then yields the parametric equation description: . Thus the set of solutions is .  "
},
{
  "id": "s_solving_ex-2-2-4",
  "level": "2",
  "url": "s_solving.html#s_solving_ex-2-2-4",
  "type": "Exercise",
  "number": "1.3.3.6",
  "title": "",
  "body": "    "
},
{
  "id": "s_solving_ex-2-2-5",
  "level": "2",
  "url": "s_solving.html#s_solving_ex-2-2-5",
  "type": "Exercise",
  "number": "1.3.3.7",
  "title": "",
  "body": "    "
},
{
  "id": "s_solving_ex-2-2-6",
  "level": "2",
  "url": "s_solving.html#s_solving_ex-2-2-6",
  "type": "Exercise",
  "number": "1.3.3.8",
  "title": "",
  "body": "    "
},
{
  "id": "s_solving_ex-2-2-7",
  "level": "2",
  "url": "s_solving.html#s_solving_ex-2-2-7",
  "type": "Exercise",
  "number": "1.3.3.9",
  "title": "",
  "body": "    "
},
{
  "id": "s_solving_ex-2-3",
  "level": "2",
  "url": "s_solving.html#s_solving_ex-2-3",
  "type": "Exercise",
  "number": "1.3.3.10",
  "title": "",
  "body": " For each system below determine all values of for which the system below has (a) no solutions, (b) a unique solution, and (c) infinitely many solutions.            "
},
{
  "id": "s_solving_ex-2-4",
  "level": "2",
  "url": "s_solving.html#s_solving_ex-2-4",
  "type": "Exercise",
  "number": "1.3.3.11",
  "title": "",
  "body": " Show that a linear system with more unknowns than equations has either 0 solutions or infinitely many solutions.  "
},
{
  "id": "s_solving_ex-2-5",
  "level": "2",
  "url": "s_solving.html#s_solving_ex-2-5",
  "type": "Exercise",
  "number": "1.3.3.12",
  "title": "",
  "body": " True or false. If true, provide a proof; if false, provide an explicit counterexample.    Every matrix has a unique row echelon form.    Any homogeneous linear system with more unknowns than equations has infinitely many solutions.    If a homogeneous linear system of equations in unknowns has a corresponding augmented matrix with a reduced row echelon form containing leading ones, then the linear system has the unique solution .    All leading ones in of a matrix in row echelon form must occur in distinct columns.    If the reduced row echelon form of the augmented matrix for a linear system has a zero row, then the system must have infinitely many solutions.    If a linear system has more unknowns than equations, then it must have infinitely many solutions.    "
},
{
  "id": "s_solving_ex-2-6",
  "level": "2",
  "url": "s_solving.html#s_solving_ex-2-6",
  "type": "Exercise",
  "number": "1.3.3.13",
  "title": "",
  "body": " Interpret each matrix below as an augmented matrix of a linear system. Asterisks represent an unspecified real number. For each matrix, determine whether the corresponding system is consistent or inconsistent. If the system is consistent, decide further whether the solution is unique or not. If there is not enough information answer inconclusive and back up your claim by giving an explicit example where the system is consistent, and an explicit example where the system is inconsistent.                        "
},
{
  "id": "s_solving_ex-2-7",
  "level": "2",
  "url": "s_solving.html#s_solving_ex-2-7",
  "type": "Exercise",
  "number": "1.3.3.14",
  "title": "",
  "body": " What condition must and satisfy in order for the system below to be consistent? Express your answer as an equation involving and .   "
},
{
  "id": "s_solving_ex-2-8",
  "level": "2",
  "url": "s_solving.html#s_solving_ex-2-8",
  "type": "Exercise",
  "number": "1.3.3.15",
  "title": "",
  "body": " Solve the system of equations below for , , and .    First replace the given nonlinear system with a linear one using a change of variable substitution.  "
},
{
  "id": "s_solving_ex-2-9",
  "level": "2",
  "url": "s_solving.html#s_solving_ex-2-9",
  "type": "Exercise",
  "number": "1.3.3.16",
  "title": "",
  "body": " If is a matrix with three rows and five columns, then what is the maximum possible number of leading ones in its reduced row echelon form? Justify your answer.  Provide an explicit example of a matrix that attains this maximum number of leading ones.  "
},
{
  "id": "s_solving_ex-2-10",
  "level": "2",
  "url": "s_solving.html#s_solving_ex-2-10",
  "type": "Exercise",
  "number": "1.3.3.17",
  "title": "",
  "body": " If is a matrix with three rows and six columns, then what is the maximum possible number of free variables in the general solution of the linear system with augmented matrix ? Justify your answer.  Provide an explicit example of a matrix that attains this maximal number of free variables.  "
},
{
  "id": "s_solving_ex-2-11",
  "level": "2",
  "url": "s_solving.html#s_solving_ex-2-11",
  "type": "Exercise",
  "number": "1.3.3.18",
  "title": "",
  "body": " If is a matrix with five rows and three columns, then what is the minimum possible number of zero rows in any row echelon form of ?  Provide an explicit example of a matrix that attains this minimal number of zero rows.  "
},
{
  "id": "s_matrix",
  "level": "1",
  "url": "s_matrix.html",
  "type": "Section",
  "number": "2.1",
  "title": "Matrix arithmetic",
  "body": " Matrix arithmetic   Matrices played a small supporting role in our discussion of linear systems in . In this chapter we bring them to center stage and give them a full-blown treatment as independent mathematical objects in their own right.  Like any mathematical entity worth its salt, matrices can be employed in a vast multitude of ways. As such it is important to allow matrices to transcend their humble beginnings in this course as boiled down systems of linear equations. We record this observation as another principle.  Matrix mantra   A matrix is a matrix is a matrix.  Not every matrix should be thought of as an augmented matrix associated to a linear system.       The basics We begin with some elementary definitions about matrices, matrix equality, and special types of matrices. As the next definition makes clear, a matrix is just an ordered sequence of numbers arranged in a very particular manner.  Matrix  matrix   A (real) matrix is a rectangular array of real numbers . The number located in the -th row and -th column of is called the -entry (or -th entry ) of .  A matrix with rows and columns is said to have size (or dimension ) .  We will typically use capital letters near the beginning of the alphabet (  , ) to denote matrices.    The displayed matrix in is costly both in the space it takes up in show, and the time it takes to write down or typeset. Accordingly we introduce two somewhat complementary forms of notation to help describe matrices.   Matrix notation    Matrix whose -th entry is     -th entry of the matrix       Matrix-building notation  matrix matrix-building notation  The notation denotes the matrix whose -th entry ( -th row, -th column) is . When there is no danger of confusion, this notation is often shortened to .    Matrix entry notation  matrix matrix entry notation  Given a matrix , the notation denotes the -th entry of .   Thus if , then for all and .     The matrix-building notation is often used simply to give names to the entries of an arbitrary matrix. However, it can also be used to describe a matrix whose -th entry is given by specified rule or formula.  For example, let , where . This is the matrix whose -th entry is . Thus . In this example we have and for .   In everyday language the notion of equality is taken as self-evident. Two things are equal if they are the same. What more is there to say? In mathematics, each time we introduce a new type of mathematical object (e.g., sets, functions, -tuples, etc.) we need to spell out exactly what we mean for two things to be considered equal. We do so now with matrices.   Matrix equality   Let and be matrices of dimension and , respectively. The two matrices are equal if    and ;     for all and .     In other words, we have if and only if and have the same shape, and each entry of is equal to the corresponding entry of .     Matrix equality   The matrices are not equal to one another, despite their having the same entries that appear roughly in the same order. In this case equality does not hold as and have different shapes: is , and is .  The matrices and have the same dimension, but are not equal since .     Square matrices, row vectors, column vectors, zero matrices  matrix square   matrix row vector   matrix column vector   matrix diagonal of square matrix  matrix zero matrix    the zero matrix    A matrix is square if its dimension is . The diagonal of a square matrix consists of the entries for .  A matrix is called a row vector . The -th entry of a row vector is denoted   An matrix , is called a column vector . The -th entry of a column vector is denoted .  The  zero matrix , denoted , is the matrix of that dimension, all of whose entries are zero: i.e., for all and .  When the actual dimension is not significant, we will often drop the subscript and write simply for a zero matrix of suitable dimension.     Matrices as collections of columns\/rows  Let be an matrix. We will often think of as a collection of columns, in which case we write , where is the column vector consisting of the entries of the -th column of : , . Similarly, when we think of as a collection of rows, we write , where is the row vector consisting of the entries of the -th row of : , . The vertical and horizontal lines in and are used to emphasize that the are columns vectors and the are row vectors.    Matrix entries, rows, and columns  Sage syntax for accessing specific entries of a matrix is similar in spirit to our matrix entry notation. However, as with all things Python, we always count from 0. Thus if A is assigned to a matrix in Sage, A[i,j] is its -th entry.   Prescribed subsets of matrix entries are obtained via slicing methods: for example, A[a:b, c:d] returns the collection of entries with and , arranged as a matrix.   Leaving the left or right side of : blank in this notation removes the corresponding restriction bound (left or right) from the index in question. Thus A[2, :] returns the third row of , and A[1:, 3] returns the portion of the fourth column of beginning with its second entry.   Alternatively, we can obtain a list of all rows or columns of using the the methods rows() and columns() .   Use the empty cell below to try out some of these commands.      Addition, subtraction and scalar multiplication  We now lay out the various algebraic operations we will use to combine and transform matrices; we refer to the use of these operations loosely as matrix arithmetic . Some of these operations resemble familiar operations from real arithmetic in terms of their notation and definition. Do not be lulled into complacency! These are new operations defined for a new class of mathematical objects, and must be treated carefully. In particular, pay close attention to (a) exactly what type of mathematical objects serve as inputs for each operation (the ingredients of the operation), and (b) what type of mathematical object is outputted.   Matrix addition and subtraction  matrix addition  matrix subtraction     Matrix addition is the operation defined as follows: given two matrices and , we define their sum to be the matrix . In other words is the matrix satisfying for all and .   Matrix subtraction is the operation defined as follows: given two matrices and , we define their difference to be the matrix . In other words is the matrix satisfying for all and .     Observe that matrix addition\/subtraction is not defined for any pair of matrices. The ingredients of matrix addition (or subtraction) are two matrices of the same dimension ; and the output is a third matrix of this common dimension.    Scalar multiplication of matrices  matrix scalar multiplication   Given any matrix and any constant , we define . In other words, is the matrix obtained by scaling each of the entries of by the constant .  We call a scalar multiple of . Furthermore, to help distinguish between matrices and real numbers, we will refer to elements of as scalars .     Whereas matrix addition and subtraction closely resemble corresponding operations involving real numbers, there is no obvious real arithmetic analogue to matrix scalar multiplication. In particular, notice how matrix scalar multiplication is a sort of hybrid operation that combines mathematical objects of two very different natures: a real number (or scalar) on the one hand, and a matrix on the other.   We call the result of applying a sequence of matrix additions and scalar multiplications a linear combination of matrices .   Linear combination of matrices  linear combination of matrices   Given matrices of the same dimension, and scalars , the expression is called a linear combination of matrices . The scalars are called the coefficients of the linear combination.     Matrix linear combinations   Let and . Compute .     .     Expressing matrix as a linear combination   Show that can be expressed as a linear combination of the matrices .    We must solve the matrix (or row vector) equation for the scalars . Computing the linear combination on the left yields the matrix equation . Using the definition of matrix equality ( ), we get the system of equations . Using Gaussian elimination we find that there is a unique solution to this system: namely, . We conclude that .     Let be matrices, An easy induction argument on shows that for any scalars we have for all , . (See . )     Matrix multiplication  So how do we define the product of two matrices? Looking at the previous operations, you might have guessed that we should define the product of two matrices by taking the product of their corresponding entries. Not so!   Matrix multiplication  matrix multiplication     Matrix multiplication is the operation defined as follows: given an matrix and an matrix , we define their product to be the matrix whose -th entry is given by the formula for all and .     Visualizing matrix multiplication  In , the -th entry is computed by moving across the -th row of and down the -th column of .       Size and matrix multiplication  Observe how, like addition, matrix multiplication is not defined for any pair of matrices: there must be a certain agreement in their dimensions.  In more detail, for the product of and to be defined, we need . In other words we need the inner dimensions of and to be equal: . If this condition is met, the dimension of the resulting matrix is determined by the outer dimensions of and . Schematically, you can think of the inner dimensions as being canceled out :     Matrix multiplication  Consider the matrices . Since the inner dimensions of and agree, we can form the product matrix , which has dimension . Let for all . Using , we compute . We conclude that .   The formula for the -th entry of a matrix product can be succinctly described as the dot product of the -th row of with the -th column of . You may have already met the dot product in the special case of - and -tuples; the definition generalizes easily to -tuples for any positive integer . We will have a lot more to say about the dot product and related operations in . For now we will provide an official definition so that we can conveniently describe matrix multiplication in terms of dot products.   Dot product  dot product    dot product    Given -tuples and , their dot product , denoted , is defined as .     Dot product and matrix multiplication   Let be an matrix, and let be an matrix. For all , let be the -th row of ; and for all let be the -th column of . For all , we have , where and are treated as -tuples. In other words, the -th entry of is the dot product of the -th row of and the -th column of .    Fix a pair with and . Considered as -tuples, the -th row of and -th column of are given as . We have , as claimed.     Matrix multiplication via dot product  Consider the matrices . The two rows of (in tuple form) are . The two columns of (in tuple form) are . Using the dot product description of matrix multiplication, we compute .   The definition of a matrix product is undoubtedly more complicated than you expected, and seems to come completely out of the blue. All of this will make more sense once we begin thinking of matrices as defining certain functions . Our formula for the entries of is chosen precisely so that this new matrix corresponds to the composition of the functions and : so that . (See .) Under this interpretation, the ponderous restriction on the dimensions of the ingredient matrices ensures that the two functions and can be composed.   Matrix arithmetic  We use + and * for matrix addition and multiplication.   As evidence of Sage's flexibility, the same symbol * is also used for scalar multiplication.   Edit the cell below to practice these operations.      Alternative methods of multiplication  In addition to the given definition of matrix multiplication, we will make heavy use of two further ways of computing matrix products, called the column and row methods of matrix multiplication.   Column method of matrix multiplication  matrix multiplication column method   Let and . The column method of matrix multiplication computes using the two steps below.   Step 1  Let be the -th column of , considered as a column vector. Then .    Step 2  Let be the -th column of , considered as a column vector. Given any column vector we have .       We prove the equalities in both steps separately.   Proof of Step 1  We must show , where . First we show and have the same size. By definition of matrix multiplication, is . By construction has columns and its -th column is . Since and have size and , respectively, has size . Thus each of the columns of is an column vector. It follows that is , as desired.  Next we show that for all , . Since the -th entry of is the -th entry of the -th column of , we have .    Proof of Step 2  We must show that , where . The usual argument shows that both and are column vectors. It remains only to show that the -th entry of the column is equal to the -th entry of for all . For any such we have .       amounts to a two-step process for computing an arbitrary matrix product .  The first statement (Step 1) tells us that the -th column of the matrix can be obtained by computing the product of with the -th column of .  The second statement (Step 2) tells us that each product can itself be computed as a certain linear combination of the columns of with coefficients drawn from .  A similar remark applies to computing matrix products using the row method, as described below in .    Row method of matrix multiplication  matrix multiplication row method   Let and . The row method of matrix multiplication computes using the two steps below.   Step 1  Let be the -th row of . Then .    Step 2  Let be the -th row of . Given any row vector we have .       The proof is very similar to that of and is left to the reader.     Column and row methods   Let and   Compute using (a) the definition of matrix multiplication, (b) the column method, (c) the row method.       Using the definition, we see easily that     Let be the columns of , and let be the columns of . We have     Now let be the rows of , and let be the rows of . We have         Column and row methods  Let's verify the validity of the column and row methods using Sage in some specific examples. Below we generate random integer matrices and of dimension and , respectively, and compute their product .   Let's check that the -th column of is equal to the product of with the -th column of .   Alternatively, we can visually confirm these equalities using the display of in the first cell above. Observe that the result of A*colsB[i] is displayed by Sage as a tuple, though technically for us this is a column vector.   Next, let's verify that the result of multiplying and the -th column of is the corresponding linear combination of the columns of given by the coefficients of this column.   Now use the Sage cells below to demonstrate the validity of the row method for the product . Simply modify the code in the two cells above to reflect the row method, as opposed to the column method.      Video example of matrix multiplication   Video: three methods of matrix multiplication  Video: three methods of matrix multiplication       Transpose of a matrix  We end this section with one last operation, matrix transposition . We will not make much use of this operation until later, but this is as good a place as any to introduce it.   Matrix transposition  matrix transposition  transpose   Given an matrix its transpose is the matrix whose -entry is the -th entry of . In other words, is the matrix satisfying for all and .     Given a matrix we can give a column- or row-based description of as follows:    is the matrix whose -th row is the -th column of .     is the matrix whose -th column is the -th row of .       Transpose   Let ; then .  Let , then .     Matrix transposition  Matrix transposition is implemented in Sage as the transpose() method. In the cell below we (a) choose random integers , (b) choose a random matrix with integer entries, and (c) compute the transpose of .   As usual, experiment with the Sage cell below.       WeBWork Exercises    Enter T or F depending on whether the statement is true or false. (You must enter T or F -- True and False will not work.)    If A has dimensions and B has dimensions , then AB has dimensions .    If A has dimensions and B has dimensions , then the 3rd row, 4th column entry of AB is obtained by multiplying the 3rd column of A by the 4th row of B.           Matrix Products: Consider the matrices   Of the possible matrix products ,  which make sense?    A         If A is B is and C is then:  a) BA has dimension    b) CB has dimension    c) AC has dimension                                         Determine and such that                        Determine the value(s) of such that   =  Note: If there is more than one value separate them by commas.              Written Exercises   For each part below write down the most general matrix satisfying the given condition (use letter names ,etc. for entries).     for all .     for all      for .      Let  . Compute the following matrices, or else explain why the given expression is not well defined.                     Let . Compute the following using either the row or column method of matrix multiplication. Make sure to show how you are using the relevant method.   the first column of ;    the second row of ;    the third column of .         Using expansion by columns, the first column of is given by times the first column of . We compute        Use the row or column method to quickly compute the following product:    I'll just describe the row method here.  Note that the rows of are all identical, and equal to . From the row method it follows that each row of is given by .  Thus the rows of are all identical, and the row method computes the product above by taking the corresponding alternating sum of the rows of : .  Thus is the the matrix, all of whose rows are .    Each of the matrices below performs a specific row operation when multiplying a matrix on the left; i.e., the matrix is the result of performing a certain row operation on the matrix . Use the row method of matrix multiplication to decide what row operation each performs. .    Let be an integer. Prove, by induction on , that for any matrices and scalars , we have for all , .     "
},
{
  "id": "princ_matrix_mantra",
  "level": "2",
  "url": "s_matrix.html#princ_matrix_mantra",
  "type": "Mantra",
  "number": "2.1.1",
  "title": "Matrix mantra.",
  "body": " Matrix mantra   A matrix is a matrix is a matrix.  Not every matrix should be thought of as an augmented matrix associated to a linear system.   "
},
{
  "id": "d_matrix",
  "level": "2",
  "url": "s_matrix.html#d_matrix",
  "type": "Definition",
  "number": "2.1.2",
  "title": "Matrix.",
  "body": " Matrix  matrix   A (real) matrix is a rectangular array of real numbers . The number located in the -th row and -th column of is called the -entry (or -th entry ) of .  A matrix with rows and columns is said to have size (or dimension ) .  We will typically use capital letters near the beginning of the alphabet (  , ) to denote matrices.   "
},
{
  "id": "d_matrix_notation",
  "level": "2",
  "url": "s_matrix.html#d_matrix_notation",
  "type": "Definition",
  "number": "2.1.3",
  "title": "Matrix notation.",
  "body": " Matrix notation    Matrix whose -th entry is     -th entry of the matrix       Matrix-building notation  matrix matrix-building notation  The notation denotes the matrix whose -th entry ( -th row, -th column) is . When there is no danger of confusion, this notation is often shortened to .    Matrix entry notation  matrix matrix entry notation  Given a matrix , the notation denotes the -th entry of .   Thus if , then for all and .   "
},
{
  "id": "ss_matrix_attributes-5",
  "level": "2",
  "url": "s_matrix.html#ss_matrix_attributes-5",
  "type": "Remark",
  "number": "2.1.4",
  "title": "",
  "body": " The matrix-building notation is often used simply to give names to the entries of an arbitrary matrix. However, it can also be used to describe a matrix whose -th entry is given by specified rule or formula.  For example, let , where . This is the matrix whose -th entry is . Thus . In this example we have and for .  "
},
{
  "id": "d_matrix_equality",
  "level": "2",
  "url": "s_matrix.html#d_matrix_equality",
  "type": "Definition",
  "number": "2.1.5",
  "title": "Matrix equality.",
  "body": " Matrix equality   Let and be matrices of dimension and , respectively. The two matrices are equal if    and ;     for all and .     In other words, we have if and only if and have the same shape, and each entry of is equal to the corresponding entry of .   "
},
{
  "id": "eg_inequality",
  "level": "2",
  "url": "s_matrix.html#eg_inequality",
  "type": "Example",
  "number": "2.1.6",
  "title": "Matrix equality.",
  "body": " Matrix equality   The matrices are not equal to one another, despite their having the same entries that appear roughly in the same order. In this case equality does not hold as and have different shapes: is , and is .  The matrices and have the same dimension, but are not equal since .   "
},
{
  "id": "d_square_matrices",
  "level": "2",
  "url": "s_matrix.html#d_square_matrices",
  "type": "Definition",
  "number": "2.1.7",
  "title": "Square matrices, row vectors, column vectors, zero matrices.",
  "body": " Square matrices, row vectors, column vectors, zero matrices  matrix square   matrix row vector   matrix column vector   matrix diagonal of square matrix  matrix zero matrix    the zero matrix    A matrix is square if its dimension is . The diagonal of a square matrix consists of the entries for .  A matrix is called a row vector . The -th entry of a row vector is denoted   An matrix , is called a column vector . The -th entry of a column vector is denoted .  The  zero matrix , denoted , is the matrix of that dimension, all of whose entries are zero: i.e., for all and .  When the actual dimension is not significant, we will often drop the subscript and write simply for a zero matrix of suitable dimension.   "
},
{
  "id": "rm_matrices_as_row_columns",
  "level": "2",
  "url": "s_matrix.html#rm_matrices_as_row_columns",
  "type": "Remark",
  "number": "2.1.8",
  "title": "Matrices as collections of columns\/rows.",
  "body": " Matrices as collections of columns\/rows  Let be an matrix. We will often think of as a collection of columns, in which case we write , where is the column vector consisting of the entries of the -th column of : , . Similarly, when we think of as a collection of rows, we write , where is the row vector consisting of the entries of the -th row of : , . The vertical and horizontal lines in and are used to emphasize that the are columns vectors and the are row vectors.  "
},
{
  "id": "sage_matrix_entries_rows_cols",
  "level": "2",
  "url": "s_matrix.html#sage_matrix_entries_rows_cols",
  "type": "Sage example",
  "number": "2.1.1",
  "title": "Matrix entries, rows, and columns.",
  "body": " Matrix entries, rows, and columns  Sage syntax for accessing specific entries of a matrix is similar in spirit to our matrix entry notation. However, as with all things Python, we always count from 0. Thus if A is assigned to a matrix in Sage, A[i,j] is its -th entry.   Prescribed subsets of matrix entries are obtained via slicing methods: for example, A[a:b, c:d] returns the collection of entries with and , arranged as a matrix.   Leaving the left or right side of : blank in this notation removes the corresponding restriction bound (left or right) from the index in question. Thus A[2, :] returns the third row of , and A[1:, 3] returns the portion of the fourth column of beginning with its second entry.   Alternatively, we can obtain a list of all rows or columns of using the the methods rows() and columns() .   Use the empty cell below to try out some of these commands.   "
},
{
  "id": "d_matrix_add_subtract",
  "level": "2",
  "url": "s_matrix.html#d_matrix_add_subtract",
  "type": "Definition",
  "number": "2.1.9",
  "title": "Matrix addition and subtraction.",
  "body": " Matrix addition and subtraction  matrix addition  matrix subtraction     Matrix addition is the operation defined as follows: given two matrices and , we define their sum to be the matrix . In other words is the matrix satisfying for all and .   Matrix subtraction is the operation defined as follows: given two matrices and , we define their difference to be the matrix . In other words is the matrix satisfying for all and .   "
},
{
  "id": "ss_matrix_arithmetic-4",
  "level": "2",
  "url": "s_matrix.html#ss_matrix_arithmetic-4",
  "type": "Remark",
  "number": "2.1.10",
  "title": "",
  "body": " Observe that matrix addition\/subtraction is not defined for any pair of matrices. The ingredients of matrix addition (or subtraction) are two matrices of the same dimension ; and the output is a third matrix of this common dimension.  "
},
{
  "id": "d_matrix_scalar_mult",
  "level": "2",
  "url": "s_matrix.html#d_matrix_scalar_mult",
  "type": "Definition",
  "number": "2.1.11",
  "title": "Scalar multiplication of matrices.",
  "body": " Scalar multiplication of matrices  matrix scalar multiplication   Given any matrix and any constant , we define . In other words, is the matrix obtained by scaling each of the entries of by the constant .  We call a scalar multiple of . Furthermore, to help distinguish between matrices and real numbers, we will refer to elements of as scalars .   "
},
{
  "id": "ss_matrix_arithmetic-6",
  "level": "2",
  "url": "s_matrix.html#ss_matrix_arithmetic-6",
  "type": "Remark",
  "number": "2.1.12",
  "title": "",
  "body": " Whereas matrix addition and subtraction closely resemble corresponding operations involving real numbers, there is no obvious real arithmetic analogue to matrix scalar multiplication. In particular, notice how matrix scalar multiplication is a sort of hybrid operation that combines mathematical objects of two very different natures: a real number (or scalar) on the one hand, and a matrix on the other.  "
},
{
  "id": "d_matrix_lin_comb",
  "level": "2",
  "url": "s_matrix.html#d_matrix_lin_comb",
  "type": "Definition",
  "number": "2.1.13",
  "title": "Linear combination of matrices.",
  "body": " Linear combination of matrices  linear combination of matrices   Given matrices of the same dimension, and scalars , the expression is called a linear combination of matrices . The scalars are called the coefficients of the linear combination.   "
},
{
  "id": "eg_matrix_lin_comb",
  "level": "2",
  "url": "s_matrix.html#eg_matrix_lin_comb",
  "type": "Example",
  "number": "2.1.14",
  "title": "Matrix linear combinations.",
  "body": " Matrix linear combinations   Let and . Compute .     .   "
},
{
  "id": "eg_matrix_lin_comb_solve",
  "level": "2",
  "url": "s_matrix.html#eg_matrix_lin_comb_solve",
  "type": "Example",
  "number": "2.1.15",
  "title": "Expressing matrix as a linear combination.",
  "body": " Expressing matrix as a linear combination   Show that can be expressed as a linear combination of the matrices .    We must solve the matrix (or row vector) equation for the scalars . Computing the linear combination on the left yields the matrix equation . Using the definition of matrix equality ( ), we get the system of equations . Using Gaussian elimination we find that there is a unique solution to this system: namely, . We conclude that .   "
},
{
  "id": "rm_entry_lin_comb",
  "level": "2",
  "url": "s_matrix.html#rm_entry_lin_comb",
  "type": "Remark",
  "number": "2.1.16",
  "title": "",
  "body": " Let be matrices, An easy induction argument on shows that for any scalars we have for all , . (See . )  "
},
{
  "id": "d_matrix_mult",
  "level": "2",
  "url": "s_matrix.html#d_matrix_mult",
  "type": "Definition",
  "number": "2.1.17",
  "title": "Matrix multiplication.",
  "body": " Matrix multiplication  matrix multiplication     Matrix multiplication is the operation defined as follows: given an matrix and an matrix , we define their product to be the matrix whose -th entry is given by the formula for all and .   "
},
{
  "id": "fig_matrix_mult",
  "level": "2",
  "url": "s_matrix.html#fig_matrix_mult",
  "type": "Figure",
  "number": "2.1.18",
  "title": "Visualizing matrix multiplication",
  "body": " Visualizing matrix multiplication  In , the -th entry is computed by moving across the -th row of and down the -th column of .     "
},
{
  "id": "ss_matrix_mult-5",
  "level": "2",
  "url": "s_matrix.html#ss_matrix_mult-5",
  "type": "Remark",
  "number": "2.1.19",
  "title": "Size and matrix multiplication.",
  "body": " Size and matrix multiplication  Observe how, like addition, matrix multiplication is not defined for any pair of matrices: there must be a certain agreement in their dimensions.  In more detail, for the product of and to be defined, we need . In other words we need the inner dimensions of and to be equal: . If this condition is met, the dimension of the resulting matrix is determined by the outer dimensions of and . Schematically, you can think of the inner dimensions as being canceled out :   "
},
{
  "id": "eg_matrix_mult",
  "level": "2",
  "url": "s_matrix.html#eg_matrix_mult",
  "type": "Example",
  "number": "2.1.20",
  "title": "Matrix multiplication.",
  "body": " Matrix multiplication  Consider the matrices . Since the inner dimensions of and agree, we can form the product matrix , which has dimension . Let for all . Using , we compute . We conclude that .  "
},
{
  "id": "d_dot_product",
  "level": "2",
  "url": "s_matrix.html#d_dot_product",
  "type": "Definition",
  "number": "2.1.21",
  "title": "Dot product.",
  "body": " Dot product  dot product    dot product    Given -tuples and , their dot product , denoted , is defined as .   "
},
{
  "id": "th_matrix_mult_dot_product",
  "level": "2",
  "url": "s_matrix.html#th_matrix_mult_dot_product",
  "type": "Theorem",
  "number": "2.1.22",
  "title": "Dot product and matrix multiplication.",
  "body": " Dot product and matrix multiplication   Let be an matrix, and let be an matrix. For all , let be the -th row of ; and for all let be the -th column of . For all , we have , where and are treated as -tuples. In other words, the -th entry of is the dot product of the -th row of and the -th column of .    Fix a pair with and . Considered as -tuples, the -th row of and -th column of are given as . We have , as claimed.   "
},
{
  "id": "eg_matrix_mult_dot_prod",
  "level": "2",
  "url": "s_matrix.html#eg_matrix_mult_dot_prod",
  "type": "Example",
  "number": "2.1.23",
  "title": "Matrix multiplication via dot product.",
  "body": " Matrix multiplication via dot product  Consider the matrices . The two rows of (in tuple form) are . The two columns of (in tuple form) are . Using the dot product description of matrix multiplication, we compute .  "
},
{
  "id": "ss_matrix_mult-12",
  "level": "2",
  "url": "s_matrix.html#ss_matrix_mult-12",
  "type": "Sage example",
  "number": "2.1.2",
  "title": "Matrix arithmetic.",
  "body": " Matrix arithmetic  We use + and * for matrix addition and multiplication.   As evidence of Sage's flexibility, the same symbol * is also used for scalar multiplication.   Edit the cell below to practice these operations.   "
},
{
  "id": "th_column_method",
  "level": "2",
  "url": "s_matrix.html#th_column_method",
  "type": "Theorem",
  "number": "2.1.24",
  "title": "Column method of matrix multiplication.",
  "body": " Column method of matrix multiplication  matrix multiplication column method   Let and . The column method of matrix multiplication computes using the two steps below.   Step 1  Let be the -th column of , considered as a column vector. Then .    Step 2  Let be the -th column of , considered as a column vector. Given any column vector we have .       We prove the equalities in both steps separately.   Proof of Step 1  We must show , where . First we show and have the same size. By definition of matrix multiplication, is . By construction has columns and its -th column is . Since and have size and , respectively, has size . Thus each of the columns of is an column vector. It follows that is , as desired.  Next we show that for all , . Since the -th entry of is the -th entry of the -th column of , we have .    Proof of Step 2  We must show that , where . The usual argument shows that both and are column vectors. It remains only to show that the -th entry of the column is equal to the -th entry of for all . For any such we have .    "
},
{
  "id": "s_column_row_method-4",
  "level": "2",
  "url": "s_matrix.html#s_column_row_method-4",
  "type": "Remark",
  "number": "2.1.25",
  "title": "",
  "body": "  amounts to a two-step process for computing an arbitrary matrix product .  The first statement (Step 1) tells us that the -th column of the matrix can be obtained by computing the product of with the -th column of .  The second statement (Step 2) tells us that each product can itself be computed as a certain linear combination of the columns of with coefficients drawn from .  A similar remark applies to computing matrix products using the row method, as described below in .  "
},
{
  "id": "th_row_method",
  "level": "2",
  "url": "s_matrix.html#th_row_method",
  "type": "Theorem",
  "number": "2.1.26",
  "title": "Row method of matrix multiplication.",
  "body": " Row method of matrix multiplication  matrix multiplication row method   Let and . The row method of matrix multiplication computes using the two steps below.   Step 1  Let be the -th row of . Then .    Step 2  Let be the -th row of . Given any row vector we have .       The proof is very similar to that of and is left to the reader.   "
},
{
  "id": "s_matrix_ex_product",
  "level": "2",
  "url": "s_matrix.html#s_matrix_ex_product",
  "type": "Example",
  "number": "2.1.27",
  "title": "Column and row methods.",
  "body": " Column and row methods   Let and   Compute using (a) the definition of matrix multiplication, (b) the column method, (c) the row method.       Using the definition, we see easily that     Let be the columns of , and let be the columns of . We have     Now let be the rows of , and let be the rows of . We have       "
},
{
  "id": "s_column_row_method-7",
  "level": "2",
  "url": "s_matrix.html#s_column_row_method-7",
  "type": "Sage example",
  "number": "2.1.3",
  "title": "Column and row methods.",
  "body": " Column and row methods  Let's verify the validity of the column and row methods using Sage in some specific examples. Below we generate random integer matrices and of dimension and , respectively, and compute their product .   Let's check that the -th column of is equal to the product of with the -th column of .   Alternatively, we can visually confirm these equalities using the display of in the first cell above. Observe that the result of A*colsB[i] is displayed by Sage as a tuple, though technically for us this is a column vector.   Next, let's verify that the result of multiplying and the -th column of is the corresponding linear combination of the columns of given by the coefficients of this column.   Now use the Sage cells below to demonstrate the validity of the row method for the product . Simply modify the code in the two cells above to reflect the row method, as opposed to the column method.    "
},
{
  "id": "fig_vid_matrix_mult_methods",
  "level": "2",
  "url": "s_matrix.html#fig_vid_matrix_mult_methods",
  "type": "Figure",
  "number": "2.1.28",
  "title": "Video: three methods of matrix multiplication",
  "body": " Video: three methods of matrix multiplication  Video: three methods of matrix multiplication   "
},
{
  "id": "d_transpose",
  "level": "2",
  "url": "s_matrix.html#d_transpose",
  "type": "Definition",
  "number": "2.1.29",
  "title": "Matrix transposition.",
  "body": " Matrix transposition  matrix transposition  transpose   Given an matrix its transpose is the matrix whose -entry is the -th entry of . In other words, is the matrix satisfying for all and .   "
},
{
  "id": "s_matrix-7-4",
  "level": "2",
  "url": "s_matrix.html#s_matrix-7-4",
  "type": "Remark",
  "number": "2.1.30",
  "title": "",
  "body": " Given a matrix we can give a column- or row-based description of as follows:    is the matrix whose -th row is the -th column of .     is the matrix whose -th column is the -th row of .     "
},
{
  "id": "eg_transpose",
  "level": "2",
  "url": "s_matrix.html#eg_transpose",
  "type": "Example",
  "number": "2.1.31",
  "title": "Transpose.",
  "body": " Transpose   Let ; then .  Let , then .   "
},
{
  "id": "s_matrix-7-6",
  "level": "2",
  "url": "s_matrix.html#s_matrix-7-6",
  "type": "Sage example",
  "number": "2.1.4",
  "title": "Matrix transposition.",
  "body": " Matrix transposition  Matrix transposition is implemented in Sage as the transpose() method. In the cell below we (a) choose random integers , (b) choose a random matrix with integer entries, and (c) compute the transpose of .   As usual, experiment with the Sage cell below.   "
},
{
  "id": "s_matrix_ex-1-2",
  "level": "2",
  "url": "s_matrix.html#s_matrix_ex-1-2",
  "type": "Exercise",
  "number": "2.1.6.1",
  "title": "",
  "body": "  Enter T or F depending on whether the statement is true or false. (You must enter T or F -- True and False will not work.)    If A has dimensions and B has dimensions , then AB has dimensions .    If A has dimensions and B has dimensions , then the 3rd row, 4th column entry of AB is obtained by multiplying the 3rd column of A by the 4th row of B.        "
},
{
  "id": "s_matrix_ex-1-3",
  "level": "2",
  "url": "s_matrix.html#s_matrix_ex-1-3",
  "type": "Exercise",
  "number": "2.1.6.2",
  "title": "",
  "body": "  Matrix Products: Consider the matrices   Of the possible matrix products ,  which make sense?    A      "
},
{
  "id": "s_matrix_ex-1-4",
  "level": "2",
  "url": "s_matrix.html#s_matrix_ex-1-4",
  "type": "Exercise",
  "number": "2.1.6.3",
  "title": "",
  "body": "  If A is B is and C is then:  a) BA has dimension    b) CB has dimension    c) AC has dimension                                      "
},
{
  "id": "s_matrix_ex-1-5",
  "level": "2",
  "url": "s_matrix.html#s_matrix_ex-1-5",
  "type": "Exercise",
  "number": "2.1.6.4",
  "title": "",
  "body": "  Determine and such that                     "
},
{
  "id": "s_matrix_ex-1-6",
  "level": "2",
  "url": "s_matrix.html#s_matrix_ex-1-6",
  "type": "Exercise",
  "number": "2.1.6.5",
  "title": "",
  "body": "  Determine the value(s) of such that   =  Note: If there is more than one value separate them by commas.           "
},
{
  "id": "s_matrix_ex-2-2",
  "level": "2",
  "url": "s_matrix.html#s_matrix_ex-2-2",
  "type": "Exercise",
  "number": "2.1.6.6",
  "title": "",
  "body": " For each part below write down the most general matrix satisfying the given condition (use letter names ,etc. for entries).     for all .     for all      for .    "
},
{
  "id": "s_matrix_ex-2-3",
  "level": "2",
  "url": "s_matrix.html#s_matrix_ex-2-3",
  "type": "Exercise",
  "number": "2.1.6.7",
  "title": "",
  "body": " Let  . Compute the following matrices, or else explain why the given expression is not well defined.                   "
},
{
  "id": "s_matrix_ex-2-4",
  "level": "2",
  "url": "s_matrix.html#s_matrix_ex-2-4",
  "type": "Exercise",
  "number": "2.1.6.8",
  "title": "",
  "body": " Let . Compute the following using either the row or column method of matrix multiplication. Make sure to show how you are using the relevant method.   the first column of ;    the second row of ;    the third column of .         Using expansion by columns, the first column of is given by times the first column of . We compute      "
},
{
  "id": "s_matrix_ex-2-5",
  "level": "2",
  "url": "s_matrix.html#s_matrix_ex-2-5",
  "type": "Exercise",
  "number": "2.1.6.9",
  "title": "",
  "body": " Use the row or column method to quickly compute the following product:    I'll just describe the row method here.  Note that the rows of are all identical, and equal to . From the row method it follows that each row of is given by .  Thus the rows of are all identical, and the row method computes the product above by taking the corresponding alternating sum of the rows of : .  Thus is the the matrix, all of whose rows are .  "
},
{
  "id": "s_matrix_ex-2-6",
  "level": "2",
  "url": "s_matrix.html#s_matrix_ex-2-6",
  "type": "Exercise",
  "number": "2.1.6.10",
  "title": "",
  "body": " Each of the matrices below performs a specific row operation when multiplying a matrix on the left; i.e., the matrix is the result of performing a certain row operation on the matrix . Use the row method of matrix multiplication to decide what row operation each performs. .  "
},
{
  "id": "ex_entry_lin_comb",
  "level": "2",
  "url": "s_matrix.html#ex_entry_lin_comb",
  "type": "Exercise",
  "number": "2.1.6.11",
  "title": "",
  "body": " Let be an integer. Prove, by induction on , that for any matrices and scalars , we have for all , .  "
},
{
  "id": "s_algebraic",
  "level": "1",
  "url": "s_algebraic.html",
  "type": "Section",
  "number": "2.2",
  "title": "Matrix algebra",
  "body": " Matrix algebra   The last section was devoted to what might be called the arithmetic of matrices. We learned the basic operations of adding, multiplying, scaling, and transposing matrices. In this section we tackle the algebra of matrices. We will investigate the properties enjoyed (and not enjoyed) by our matrix operations, and will show how to use these operations to solve matrix equations.  As you learn about matrix algebra, always keep in mind your old friend, real number algebra. For the most part these two algebraic systems closely resemble one another, as below makes clear. However, there are two crucial points where they differ (see ): two important properties of real number algebra that do not hold for matrices. The consequences of these two simple aberrations are far-reaching and imbue matrix algebra with a fascinating richness in comparison to real number algebra.    Properties of matrix arithmetic   The following properties hold for all matrices and scalars for which the given expression makes sense.   Addition commutative law       Addition associative law       Multiplication associative law       Left-distributive law       Right-distributive law       Scaling distributive law       Another scaling distributive law       Scaling associative law       Scaling commutative law   .       How does one actually prove one of these properties? These are all matrix equalities of the form , so according to the matrix equality definition we must show (1) that the matrices and have the same dimension, and (2) that for all . The proof below illustrates this technique for the multiplication associative law of .   Proof of (iii)  We prove only the multiplication associative law . Let , , . To show , we must show (1) that and have the same dimension, and (2) that for all possible .  (1) The usual observation about inner and outer dimensions shows that both and have dimension .  (2) Given any with and , we have:   This proves that all entries of the two matrices are equal, and hence .   Like real number algebra, we can identify some special matrices that act as additive identities and multiplciative identities ; and every matrix has an additive inverse . What we mean here is spelled out in detail in .   Additive inverse of a matrix  additive inverse of a matrix  matrix additive inverse    Additive inverse of    Given an matrix , its additive inverse  is defined as .     Identity matrix  identity matrix  matrix identity matrix    inverse matrix    The identity matrix is the square matrix with ones along the diagonal and zeros everywhere else. In other words, for all and , we have . When the size of the identity matrix is not important, we will often denote it simply as .     Additive identities, additive inverses, and multiplicative identities     Additive identities  The zero matrix is an additive identity for matrices in the following sense: for any matrix we have .    Additive inverses  For any matrix we have .    Multiplicative identities  The identity matrix is a multiplicative identity for matrices in the following sense: for any matrix we have .       Left as an exercise.    Additive cancellation of matrices   Given matrices , and , we have if and only if . Using logical notation:     As simple as this claim might seem, remember that we are dealing with a completely new algebraic system here. We will prove both implications of if and only if statement separately.   Proof:  We prove this via a chain of implications: .    Proof:  This direction is obvious: if and are equal matrices, then they remain equal when we add to each of them.      The algebraic importance of is that we can perform additive cancellation in matrix equations just as we do in real number algebra. For example, we can solve the matrix equation for as follows:  .   Though we can perform additive cancellation in matrix algebra, we can not always perform multiplicative cancellation . For example, consider the matrices . Check for yourself that , and yet . In other words, we cannot always cancel  from the matrix equation .   The example in our warning above is but one instance of the general failure of the principle of multiplicative cancellation in matrix algebra. This in turn is a consequence of the following theorem, which identifies the two crucial places where matrix algebra differs significantly from real number algebra.   Matrix algebra abnormalities      Matrix multiplication is not commutative  For two matrices and , we do not necessarily have .    Products of nonzero matrices may be equal to zero  If the product of two matrices is the zero matrix, we cannot conclude that one of matrices is the zero matrix. In logical notation: .       This is a good place to point out that to prove an identity does not hold, it suffices to provide a single counterexample to that effect. We do so for each failed identity of in turn. There is no significance to the particular counterexamples chosen here, and indeed there are infinitely many counterexamples to choose from in both cases.   We have and thus .    Observe that . This is an example of two nonzero matrices whose product is the zero matrix.     An important consequence of the abnormality is that matrix algebra does not enjoy the property of multiplicative cancellation .   Failure of multiplicative cancellation     Suppose matrices satisfy and . We cannot conclude that . In logical notation:     Suppose matrices satisfy and . We cannot conclude that . In logical notation:        Again, we need only provide explicit counterexamples for each statement.    Let , , . Verify for yourself that . Thus , but clearly .    Let , , . We have . Thus , but .      Mark well this important abnormality of matrix algebra. Confronted with a real number equation of the form , we have a deeply ingrained impulse to declare that either or . (If we're sloppy we may forget about that first possibility.) The corresponding maneuver for the matrix equation is simply not available to us, unless we know something more about .   We end our foray into matrix algebra with some properties articulating how matrix transposition interacts with matrix addition, multiplication and scalar multiplication.   Properties of matrix transposition  The following properties hold for all matrices and scalars for which the given expression makes sense.                           We prove only the first statement. First observe that if is , then so is and . Then is by . Similarly, we see that is .  Next, given any with , , we have . Since the -entries of both matrices are equal for each , it follows that .     Video examples: proving matrix equalities   Video: matrix multiplication is associative  Video: matrix multiplication is associative     Video: transpose property  Video: transpose property       WeBWork Exercises    Determine which of the following statements are true and which are false.    If and are matrices with sizes such that is square, then and must be square.    If and are square matrices of the same size, then .    If and is a column vector, then is a linear combination of the columns of .    If is a square matrix for which , then or .    If and are matrices such that and , then .            Let be a 5 by 8 matrix. Then is a by matrix, and is a by matrix.                             Let   Then   where  ,  ,  ,  ,  and   where  ,  ,  ,  .                                                 Written Exercises   In this exercise you will complete the proof of .    Prove .    Prove .    Prove .    Prove .    Prove .    Prove .    Prove .    Prove .        We need both and to be for the expression to make sense. It is easy to see that and are both matrices. We must show for all , . We have .       Prove all three statements of .    In this exercise you will complete the proof of .    Prove .    Prove .    Prove .      Let an matrix. We define its square  as .    In real number algebra we know that . By contrast, show that there are infinitely many matrices satisfying .  Optional: can you describe in a parametric manner the set of all matrices satisfying ?    In real number algebra we know that . By contrast, show that there are infinitely many matrices satisfying .    In real number algebra we have the identity . Show that two matrices , satisfy if and only if .     For (a) set , compute , set this matrix equal to , and try and find some solutions to the corresponding (nonlinear) system of four equations in the unknowns .  Similar hint for (b), only now set .    Consider the matrix equation .   The following chain of implications is invalid. . For each implication in the chain, explain why it is valid or invalid.   Find all satisfying .   Write and set up a system of linear equations in the unknowns .     "
},
{
  "id": "th_matrix_alg_props",
  "level": "2",
  "url": "s_algebraic.html#th_matrix_alg_props",
  "type": "Theorem",
  "number": "2.2.1",
  "title": "Properties of matrix arithmetic.",
  "body": " Properties of matrix arithmetic   The following properties hold for all matrices and scalars for which the given expression makes sense.   Addition commutative law       Addition associative law       Multiplication associative law       Left-distributive law       Right-distributive law       Scaling distributive law       Another scaling distributive law       Scaling associative law       Scaling commutative law   .      "
},
{
  "id": "s_algebraic-5",
  "level": "2",
  "url": "s_algebraic.html#s_algebraic-5",
  "type": "Proof",
  "number": "2.2.1",
  "title": "Proof of (iii).",
  "body": " Proof of (iii)  We prove only the multiplication associative law . Let , , . To show , we must show (1) that and have the same dimension, and (2) that for all possible .  (1) The usual observation about inner and outer dimensions shows that both and have dimension .  (2) Given any with and , we have:   This proves that all entries of the two matrices are equal, and hence .  "
},
{
  "id": "d_matrix_add_inverse",
  "level": "2",
  "url": "s_algebraic.html#d_matrix_add_inverse",
  "type": "Definition",
  "number": "2.2.2",
  "title": "Additive inverse of a matrix.",
  "body": " Additive inverse of a matrix  additive inverse of a matrix  matrix additive inverse    Additive inverse of    Given an matrix , its additive inverse  is defined as .   "
},
{
  "id": "d_identity_matrix",
  "level": "2",
  "url": "s_algebraic.html#d_identity_matrix",
  "type": "Definition",
  "number": "2.2.3",
  "title": "Identity matrix.",
  "body": " Identity matrix  identity matrix  matrix identity matrix    inverse matrix    The identity matrix is the square matrix with ones along the diagonal and zeros everywhere else. In other words, for all and , we have . When the size of the identity matrix is not important, we will often denote it simply as .   "
},
{
  "id": "th_matrix_add_mult_ident",
  "level": "2",
  "url": "s_algebraic.html#th_matrix_add_mult_ident",
  "type": "Theorem",
  "number": "2.2.4",
  "title": "Additive identities, additive inverses, and multiplicative identities.",
  "body": " Additive identities, additive inverses, and multiplicative identities     Additive identities  The zero matrix is an additive identity for matrices in the following sense: for any matrix we have .    Additive inverses  For any matrix we have .    Multiplicative identities  The identity matrix is a multiplicative identity for matrices in the following sense: for any matrix we have .     "
},
{
  "id": "s_algebraic-10",
  "level": "2",
  "url": "s_algebraic.html#s_algebraic-10",
  "type": "Proof",
  "number": "2.2.2",
  "title": "",
  "body": " Left as an exercise.  "
},
{
  "id": "c_matrix_additive_canc",
  "level": "2",
  "url": "s_algebraic.html#c_matrix_additive_canc",
  "type": "Corollary",
  "number": "2.2.5",
  "title": "Additive cancellation of matrices.",
  "body": " Additive cancellation of matrices   Given matrices , and , we have if and only if . Using logical notation:     As simple as this claim might seem, remember that we are dealing with a completely new algebraic system here. We will prove both implications of if and only if statement separately.   Proof:  We prove this via a chain of implications: .    Proof:  This direction is obvious: if and are equal matrices, then they remain equal when we add to each of them.    "
},
{
  "id": "s_algebraic-12",
  "level": "2",
  "url": "s_algebraic.html#s_algebraic-12",
  "type": "Remark",
  "number": "2.2.6",
  "title": "",
  "body": " The algebraic importance of is that we can perform additive cancellation in matrix equations just as we do in real number algebra. For example, we can solve the matrix equation for as follows:  . "
},
{
  "id": "s_algebraic-13",
  "level": "2",
  "url": "s_algebraic.html#s_algebraic-13",
  "type": "Warning",
  "number": "2.2.7",
  "title": "",
  "body": " Though we can perform additive cancellation in matrix algebra, we can not always perform multiplicative cancellation . For example, consider the matrices . Check for yourself that , and yet . In other words, we cannot always cancel  from the matrix equation .  "
},
{
  "id": "th_matrix_abnormalities",
  "level": "2",
  "url": "s_algebraic.html#th_matrix_abnormalities",
  "type": "Theorem",
  "number": "2.2.8",
  "title": "Matrix algebra abnormalities.",
  "body": " Matrix algebra abnormalities      Matrix multiplication is not commutative  For two matrices and , we do not necessarily have .    Products of nonzero matrices may be equal to zero  If the product of two matrices is the zero matrix, we cannot conclude that one of matrices is the zero matrix. In logical notation: .      "
},
{
  "id": "th_matrix_cancel",
  "level": "2",
  "url": "s_algebraic.html#th_matrix_cancel",
  "type": "Corollary",
  "number": "2.2.9",
  "title": "Failure of multiplicative cancellation.",
  "body": " Failure of multiplicative cancellation     Suppose matrices satisfy and . We cannot conclude that . In logical notation:     Suppose matrices satisfy and . We cannot conclude that . In logical notation:      "
},
{
  "id": "s_algebraic-19",
  "level": "2",
  "url": "s_algebraic.html#s_algebraic-19",
  "type": "Proof",
  "number": "2.2.3",
  "title": "",
  "body": " Again, we need only provide explicit counterexamples for each statement.    Let , , . Verify for yourself that . Thus , but clearly .    Let , , . We have . Thus , but .    "
},
{
  "id": "rm_cancel_failure",
  "level": "2",
  "url": "s_algebraic.html#rm_cancel_failure",
  "type": "Remark",
  "number": "2.2.10",
  "title": "",
  "body": " Mark well this important abnormality of matrix algebra. Confronted with a real number equation of the form , we have a deeply ingrained impulse to declare that either or . (If we're sloppy we may forget about that first possibility.) The corresponding maneuver for the matrix equation is simply not available to us, unless we know something more about .  "
},
{
  "id": "th_trans_props",
  "level": "2",
  "url": "s_algebraic.html#th_trans_props",
  "type": "Theorem",
  "number": "2.2.11",
  "title": "Properties of matrix transposition.",
  "body": " Properties of matrix transposition  The following properties hold for all matrices and scalars for which the given expression makes sense.                           We prove only the first statement. First observe that if is , then so is and . Then is by . Similarly, we see that is .  Next, given any with , , we have . Since the -entries of both matrices are equal for each , it follows that .   "
},
{
  "id": "fig_proof_assoc",
  "level": "2",
  "url": "s_algebraic.html#fig_proof_assoc",
  "type": "Figure",
  "number": "2.2.12",
  "title": "Video: matrix multiplication is associative",
  "body": " Video: matrix multiplication is associative  Video: matrix multiplication is associative   "
},
{
  "id": "fig_proof_transp",
  "level": "2",
  "url": "s_algebraic.html#fig_proof_transp",
  "type": "Figure",
  "number": "2.2.13",
  "title": "Video: transpose property",
  "body": " Video: transpose property  Video: transpose property   "
},
{
  "id": "s_algebraic_ex-1-2",
  "level": "2",
  "url": "s_algebraic.html#s_algebraic_ex-1-2",
  "type": "Exercise",
  "number": "2.2.1",
  "title": "",
  "body": "  Determine which of the following statements are true and which are false.    If and are matrices with sizes such that is square, then and must be square.    If and are square matrices of the same size, then .    If and is a column vector, then is a linear combination of the columns of .    If is a square matrix for which , then or .    If and are matrices such that and , then .        "
},
{
  "id": "s_algebraic_ex-1-3",
  "level": "2",
  "url": "s_algebraic.html#s_algebraic_ex-1-3",
  "type": "Exercise",
  "number": "2.2.2",
  "title": "",
  "body": "  Let be a 5 by 8 matrix. Then is a by matrix, and is a by matrix.                          "
},
{
  "id": "s_algebraic_ex-1-4",
  "level": "2",
  "url": "s_algebraic.html#s_algebraic_ex-1-4",
  "type": "Exercise",
  "number": "2.2.3",
  "title": "",
  "body": "  Let   Then   where  ,  ,  ,  ,  and   where  ,  ,  ,  .                                              "
},
{
  "id": "s_algebraic_ex-2-2",
  "level": "2",
  "url": "s_algebraic.html#s_algebraic_ex-2-2",
  "type": "Exercise",
  "number": "2.2.4",
  "title": "",
  "body": " In this exercise you will complete the proof of .    Prove .    Prove .    Prove .    Prove .    Prove .    Prove .    Prove .    Prove .        We need both and to be for the expression to make sense. It is easy to see that and are both matrices. We must show for all , . We have .     "
},
{
  "id": "s_algebraic_ex-2-3",
  "level": "2",
  "url": "s_algebraic.html#s_algebraic_ex-2-3",
  "type": "Exercise",
  "number": "2.2.5",
  "title": "",
  "body": " Prove all three statements of .  "
},
{
  "id": "s_algebraic_ex-2-4",
  "level": "2",
  "url": "s_algebraic.html#s_algebraic_ex-2-4",
  "type": "Exercise",
  "number": "2.2.6",
  "title": "",
  "body": " In this exercise you will complete the proof of .    Prove .    Prove .    Prove .    "
},
{
  "id": "s_algebraic_ex-2-5",
  "level": "2",
  "url": "s_algebraic.html#s_algebraic_ex-2-5",
  "type": "Exercise",
  "number": "2.2.7",
  "title": "",
  "body": " Let an matrix. We define its square  as .    In real number algebra we know that . By contrast, show that there are infinitely many matrices satisfying .  Optional: can you describe in a parametric manner the set of all matrices satisfying ?    In real number algebra we know that . By contrast, show that there are infinitely many matrices satisfying .    In real number algebra we have the identity . Show that two matrices , satisfy if and only if .     For (a) set , compute , set this matrix equal to , and try and find some solutions to the corresponding (nonlinear) system of four equations in the unknowns .  Similar hint for (b), only now set .  "
},
{
  "id": "s_algebraic_ex-2-6",
  "level": "2",
  "url": "s_algebraic.html#s_algebraic_ex-2-6",
  "type": "Exercise",
  "number": "2.2.8",
  "title": "",
  "body": " Consider the matrix equation .   The following chain of implications is invalid. . For each implication in the chain, explain why it is valid or invalid.   Find all satisfying .   Write and set up a system of linear equations in the unknowns .  "
},
{
  "id": "s_invertible_matrices",
  "level": "1",
  "url": "s_invertible_matrices.html",
  "type": "Section",
  "number": "2.3",
  "title": "Invertible matrices",
  "body": " Invertible matrices   Picking up the thread of , we observe that the cancellation property enjoyed in real number algebra is a consequence of the fact that every nonzero real number has a multiplicative inverse , denoted or , that satisfies . Indeed, canceling the in the equation (assuming ) is really the act of multiplying both sides of this equation by the multiplicative inverse .  Ever on the lookout for connections between real number and matrix algebra, we ask whether there is a sensible analogue of multiplicative inverses for matrices. We have seen already that identity matrices play the role of multiplicative identities for matrices, just as the number does for real numbers. This suggests we should restrict our attention to matrices. The following definition is then the desired analogue of the multiplicative inverse of a nonzero real number.    Invertible matrices   Invertible matrix  invertible matrix  matrix inverse    inverse of    An matrix is invertible (or nonsingular ) if there is a matrix satisfying . When this is the case we call an inverse of , and we say that and are inverses of one another.  A matrix satisfying is called an inverse of , denoted .  A square matrix that is not invertible is called singular .    The phrase an inverse in is somewhat jarring. Shouldn't we speak of the inverse of a matrix? Not surprisingly, if a matrix is invertible, then it has one and only one inverse. As intuitive as this fact may seem, however, it still requires proof.   Inverses are unique   If is an invertible matrix, then its inverse is unique: that is, there is only one matrix satisfying .     Suppose matrices and both satisfy the properties of the multiplicative inverse: i.e., . Then . Thus we see that , showing that the inverse of , if it exists, is unique.   The next theorem tells us that we can multiplicatively cancel a matrix if it is invertible .   Cancellation with invertible matrices   Suppose is an invertible matrix.   Left-cancellation  Given matrices and , we have .    Right-cancellation  Given matrices and , we have .          We prove both implications of separately. The reverse implication ( ) is obvious: . For the forward implication ( ), we have .    The argument for right cancellation is exactly similar.       The next corollary shows how we can solve some matrix equations uniquely using invertible matrices.   Solving with invertible matrices   Suppose is an invertible matrix.   If and are matrices, then .    If and are matrices, then .          We have .    We have .       Without any additional theory at our disposal, to show a matrix is invertible we must exhibit an inverse. The onus is on us to find a matrix satisfying both and . (Remember: since we cannot assume , we really need to show both equations hold.)  By the same token, to show is not invertible we must show that an inverse does not exist: that is, we must prove that there is no satisfying . The next example illustrates this technique for a variety of matrices.   Invertible matrices      Identity matrices are invertible, and in fact we have , as witnessed by the fact that .    Square zero matrices are never invertible, since for any square matrix of the same dimension we have . Thus there is no matrix satisfying the inverse property with respect to .    The inverse of the matrix is . Indeed, we have , as you can easily verify.    The matrix is not invertible. Indeed, using the row method of matrix multiplication , we see that given any matrix , each row of is given by . It follows that all the rows of are identical, and hence that we cannot have , since the rows of are not identical.       As the preceding example illustrates, deciding whether a matrix is invertible is not so straightforward, especially if the matrix is large. For the case, however, we have a relatively simple test for invertibility. (We will generalize this to the case in .)   Inverses of matrices   A matrix is invertible if and only if .  When this is the case, we have .     If , the proposed matrix is indeed an inverse of , as one readily verifies.  Assume . If , then is not invertible, as we saw in the example above. Thus we can assume is nonzero, in which case is also nonzero. An easy computation shows This implies is not invertible. Indeed if it were, then the inverse would exist, and we'd have , which is a contradiction. We have proved that if , then is not invertible.    Invertible matrices  Sage has a number of useful tools related to invertibility. The boolean function is_invertible() tests for invertibility, and the method inverse() computes the inverse of an invertible matrix. Below we generate a random matrix with rational coefficients, test whether it is invertible, and compute its inverse if it is invertible. The density=0.5 ensures that roughly half of the matrix entries are zero; and this in turn increases the likelihood that the matrix is singular, for reasons that will become somewhat clearer later.   Evaluate the Sage cell below multiple times.    When the matrix is invertible, verify that . If you like, use the blank Sage cell to compute and .    Try increasing the density setting in random_element() ( , density=0.75 , density=.875 ) and see if the matrix is more or less likely to be invertible.        The next theorem tells us that invertibility is preserved by matrix multiplication: that is, if and are invertible matrices, then so is .   Products of invertible matrices   Let be matrices. If and are both invertible, then so is their product . Using logical notation: . In fact when this is the case we have .     Assume and are invertible. The statement of the theorem proposes a candidate for the inverse of : namely, . We need only show that satisfies . Here goes: .    Products of invertible matrices   More generally, if are invertible matrices, then their product is invertible. Furthermore, we have in this case .     We prove by induction on the number of matrices, , that if the are invertible, then the proposed inverse formula is valid.  Base step:  For , the inverse formula reads , which is clearly true.    Induction step  For the induction step we assume that the inverse formula is valid for any collection of invertible matrices, and then show it is valid for any collection of invertible matrices. Let be invertible matrices. Define . Then .      Whenever confronted with a logical implication of the form , where and denote arbitrary propositions, you should always ask whether the implication goes the other way . In other words, does the converse implication also hold?  The answer with regard to the implication is yes, though the proof of this is more difficult then you think. (See .)  The following argument is a common invalid proof of the reverse implication:   Assume is invertible.    Then has an inverse matrix.    Then the inverse of is .    Then and exist. Hence and are invertible.   Where is the flaw in our logic here? The second statement only allows us to conclude that there is some mystery matrix satisfying . We cannot yet say that , as this formula from only applies when we already know that and are both invertible. But this is exactly what we are trying to prove! As such we are guilty here of begging the question , or petitio principii in Latin.     Powers of matrices, matrix polynomials  We end this section by exploring how the matrix inverse operation fits into our matrix algebra. First, we can now use the inverse operation to define matrix powers of the form , where is a square matrix and is an arbitrary integer.   Matrix powers  matrix powers    matrix power    Let be an matrix, and let be an integer. We define the power matrix as follows: .    Equipped with a notion of matrix powers, we can further define matrix polynomials for square matrices.   Matrix polynomials  matrix polynomials    matrix polynomial   Let be a polynomial with real coefficients. For any square matrix of size , we define the matrix as . We call the result of evaluating the polynomial at the matrix .     It is both easy and perilous to forget the identity matrix in the term appearing in . Take caution not to make this mistake; without an identity matrix of appropriate size, the expression simply does not make sense.    Matrix polynomials   Let . Evaluate at the matrices and .    We have and .     Matrix polynomials  An integer matrix power is computed in Sage as A^n .   Of course the matrix needs to be invertible for a negative of power to be computed. Sage will throw an error in this case if the matrix is singular.   Polynomial expressions can then be easily computed manually in Sage. The next cell computes and for .   We took care to heed the warning in , making sure to include for ( identity_matrix(3) ) and for ( identity_matrix(2) ). Interestingly, Sage is smart enough to figure out what we mean even if we are sloppy in this regard.     Properties of matrix powers   The following properties hold for all matrices , all scalars , and all integers for which the given expression makes sense.                        .       The proofs of the first three statements are elementary, and closely resemble proofs of similar results in real number algebra. We leave these as an (unassigned) exercise.  For the fourth statement to make sense, we must assume that is invertible. The claim here is that is invertible, and that its inverse is itself. To prove this we need only show , which follows from the definition of the inverse.  The fifth statement also tacitly assumes is invertible. To prove it, we consider the three cases , and .  If , then by definition .  If , then by definition .  Suppose . Then .     Inverse and transpose   Let be invertible. We have , in which case .    We prove both implications of the if and only if statement separately.  Suppose is invertible with inverse . To see that is invertible, with inverse as specified in , we need only show that . We verify the two equalities separately:  . In both chains of equality we make use of the obvious claim .  For the other direction, assume is invertible. Setting , we see that . By the first implication, we know that if is invertible, then so is .       WeBWork Exercises    If and are invertible matrices, then the inverse of is .     True    False          SOLUTION: False. For example, let , and , then , which is not invertible.         Solve for the matrix if . Assume that all matrices are and invertible as needed.         SOLUTION: Note that         Are the following matrices invertible?                       For what values of will be invertible?  For all such that  and  .             SOLUTION: The matrix is invertible provided the columns of are linearly independent, which will be the case if . Thus, we require that and .         Let   Then   where  ,  ,  ,  ,   where  ,  ,  ,  ,  and   where  ,  ,  ,  .                                                                     Written Exercises   For each matrix either provide an inverse or show the matrix is not invertible. Justify your answer.               , where .      Each below is invertible. Find by guess and check. You may want to use the row or column method of matrix multiplication to justify your answer.                     Suppose is an invertible matrix. Prove: for any nonzero  the matrix is invertible.    Assume is a square matrix with .    Prove: if has two identical columns, then is not invertible.    Prove: if has a row that is a scalar multiple of another row, then is not invertible.     Use the column and\/or row method of matrix multiplication to show directly that cannot have an inverse matrix.    Find all invertible matrices satisfying the given equation, or show there is no such . Justify your answer.     .     .                Let . Find a formula for , where is an integer. Justify your answer using a proof by induction.    Let , the matrix consisting of all ones. Find a formula for , where is an integer. Justify your answer using a proof by induction.    Let , where is some fixed scalar. Suppose is an matrix satisfying .    Prove: if , then is invertible.    Suppose further that is not a scalar multiple of .  Prove: if , then is singular.     Expanding matrix products Fix a positive integer . Given linear combinations of matrices , prove by induction on that . Note that each step (base and induction) of your induction on will require an argument that uses induction on ! This is sometimes called double induction . For example, in the base step you must show that for any ; this should be proved by induction on .  Polynomial expressions of commute  Let and be polynomials with real coefficients. For any square matrix , show that the matrices and commute: i.e., . You may use the result of .    Suppose is an matrix satisfying for some .  Show that is invertible, and that in fact . You may use the results of and\/or . .     "
},
{
  "id": "d_invertible_matrix",
  "level": "2",
  "url": "s_invertible_matrices.html#d_invertible_matrix",
  "type": "Definition",
  "number": "2.3.1",
  "title": "Invertible matrix.",
  "body": " Invertible matrix  invertible matrix  matrix inverse    inverse of    An matrix is invertible (or nonsingular ) if there is a matrix satisfying . When this is the case we call an inverse of , and we say that and are inverses of one another.  A matrix satisfying is called an inverse of , denoted .  A square matrix that is not invertible is called singular .   "
},
{
  "id": "th_inverse_unique",
  "level": "2",
  "url": "s_invertible_matrices.html#th_inverse_unique",
  "type": "Theorem",
  "number": "2.3.2",
  "title": "Inverses are unique.",
  "body": " Inverses are unique   If is an invertible matrix, then its inverse is unique: that is, there is only one matrix satisfying .   "
},
{
  "id": "subsec--5",
  "level": "2",
  "url": "s_invertible_matrices.html#subsec--5",
  "type": "Proof",
  "number": "2.3.1.1",
  "title": "",
  "body": " Suppose matrices and both satisfy the properties of the multiplicative inverse: i.e., . Then . Thus we see that , showing that the inverse of , if it exists, is unique.  "
},
{
  "id": "th_inverse_cancel",
  "level": "2",
  "url": "s_invertible_matrices.html#th_inverse_cancel",
  "type": "Theorem",
  "number": "2.3.3",
  "title": "Cancellation with invertible matrices.",
  "body": " Cancellation with invertible matrices   Suppose is an invertible matrix.   Left-cancellation  Given matrices and , we have .    Right-cancellation  Given matrices and , we have .          We prove both implications of separately. The reverse implication ( ) is obvious: . For the forward implication ( ), we have .    The argument for right cancellation is exactly similar.      "
},
{
  "id": "cor_solving_invertible",
  "level": "2",
  "url": "s_invertible_matrices.html#cor_solving_invertible",
  "type": "Corollary",
  "number": "2.3.4",
  "title": "Solving with invertible matrices.",
  "body": " Solving with invertible matrices   Suppose is an invertible matrix.   If and are matrices, then .    If and are matrices, then .          We have .    We have .      "
},
{
  "id": "eg_invertible_matrices",
  "level": "2",
  "url": "s_invertible_matrices.html#eg_invertible_matrices",
  "type": "Example",
  "number": "2.3.5",
  "title": "Invertible matrices.",
  "body": " Invertible matrices      Identity matrices are invertible, and in fact we have , as witnessed by the fact that .    Square zero matrices are never invertible, since for any square matrix of the same dimension we have . Thus there is no matrix satisfying the inverse property with respect to .    The inverse of the matrix is . Indeed, we have , as you can easily verify.    The matrix is not invertible. Indeed, using the row method of matrix multiplication , we see that given any matrix , each row of is given by . It follows that all the rows of are identical, and hence that we cannot have , since the rows of are not identical.      "
},
{
  "id": "th_2by2_inverse",
  "level": "2",
  "url": "s_invertible_matrices.html#th_2by2_inverse",
  "type": "Theorem",
  "number": "2.3.6",
  "title": "Inverses of <span class=\"process-math\">\\(2\\times 2\\)<\/span> matrices.",
  "body": " Inverses of matrices   A matrix is invertible if and only if .  When this is the case, we have .   "
},
{
  "id": "subsec--15",
  "level": "2",
  "url": "s_invertible_matrices.html#subsec--15",
  "type": "Proof",
  "number": "2.3.1.2",
  "title": "",
  "body": " If , the proposed matrix is indeed an inverse of , as one readily verifies.  Assume . If , then is not invertible, as we saw in the example above. Thus we can assume is nonzero, in which case is also nonzero. An easy computation shows This implies is not invertible. Indeed if it were, then the inverse would exist, and we'd have , which is a contradiction. We have proved that if , then is not invertible.  "
},
{
  "id": "subsec--16",
  "level": "2",
  "url": "s_invertible_matrices.html#subsec--16",
  "type": "Sage example",
  "number": "2.3.1",
  "title": "Invertible matrices.",
  "body": " Invertible matrices  Sage has a number of useful tools related to invertibility. The boolean function is_invertible() tests for invertibility, and the method inverse() computes the inverse of an invertible matrix. Below we generate a random matrix with rational coefficients, test whether it is invertible, and compute its inverse if it is invertible. The density=0.5 ensures that roughly half of the matrix entries are zero; and this in turn increases the likelihood that the matrix is singular, for reasons that will become somewhat clearer later.   Evaluate the Sage cell below multiple times.    When the matrix is invertible, verify that . If you like, use the blank Sage cell to compute and .    Try increasing the density setting in random_element() ( , density=0.75 , density=.875 ) and see if the matrix is more or less likely to be invertible.       "
},
{
  "id": "th_invertible_prod",
  "level": "2",
  "url": "s_invertible_matrices.html#th_invertible_prod",
  "type": "Theorem",
  "number": "2.3.7",
  "title": "Products of invertible matrices.",
  "body": " Products of invertible matrices   Let be matrices. If and are both invertible, then so is their product . Using logical notation: . In fact when this is the case we have .   "
},
{
  "id": "subsec--19",
  "level": "2",
  "url": "s_invertible_matrices.html#subsec--19",
  "type": "Proof",
  "number": "2.3.1.3",
  "title": "",
  "body": " Assume and are invertible. The statement of the theorem proposes a candidate for the inverse of : namely, . We need only show that satisfies . Here goes: .  "
},
{
  "id": "c_invertible_prod",
  "level": "2",
  "url": "s_invertible_matrices.html#c_invertible_prod",
  "type": "Corollary",
  "number": "2.3.8",
  "title": "Products of invertible matrices.",
  "body": " Products of invertible matrices   More generally, if are invertible matrices, then their product is invertible. Furthermore, we have in this case .   "
},
{
  "id": "subsec--21",
  "level": "2",
  "url": "s_invertible_matrices.html#subsec--21",
  "type": "Proof",
  "number": "2.3.1.4",
  "title": "",
  "body": " We prove by induction on the number of matrices, , that if the are invertible, then the proposed inverse formula is valid.  Base step:  For , the inverse formula reads , which is clearly true.    Induction step  For the induction step we assume that the inverse formula is valid for any collection of invertible matrices, and then show it is valid for any collection of invertible matrices. Let be invertible matrices. Define . Then .    "
},
{
  "id": "subsec--22",
  "level": "2",
  "url": "s_invertible_matrices.html#subsec--22",
  "type": "Remark",
  "number": "2.3.9",
  "title": "",
  "body": " Whenever confronted with a logical implication of the form , where and denote arbitrary propositions, you should always ask whether the implication goes the other way . In other words, does the converse implication also hold?  The answer with regard to the implication is yes, though the proof of this is more difficult then you think. (See .)  The following argument is a common invalid proof of the reverse implication:   Assume is invertible.    Then has an inverse matrix.    Then the inverse of is .    Then and exist. Hence and are invertible.   Where is the flaw in our logic here? The second statement only allows us to conclude that there is some mystery matrix satisfying . We cannot yet say that , as this formula from only applies when we already know that and are both invertible. But this is exactly what we are trying to prove! As such we are guilty here of begging the question , or petitio principii in Latin.  "
},
{
  "id": "d_matrix_powers",
  "level": "2",
  "url": "s_invertible_matrices.html#d_matrix_powers",
  "type": "Definition",
  "number": "2.3.10",
  "title": "Matrix powers.",
  "body": " Matrix powers  matrix powers    matrix power    Let be an matrix, and let be an integer. We define the power matrix as follows: .   "
},
{
  "id": "d_matrix_polynomials",
  "level": "2",
  "url": "s_invertible_matrices.html#d_matrix_polynomials",
  "type": "Definition",
  "number": "2.3.11",
  "title": "Matrix polynomials.",
  "body": " Matrix polynomials  matrix polynomials    matrix polynomial   Let be a polynomial with real coefficients. For any square matrix of size , we define the matrix as . We call the result of evaluating the polynomial at the matrix .   "
},
{
  "id": "rem_matrix_polynomials",
  "level": "2",
  "url": "s_invertible_matrices.html#rem_matrix_polynomials",
  "type": "Remark",
  "number": "2.3.12",
  "title": "",
  "body": " It is both easy and perilous to forget the identity matrix in the term appearing in . Take caution not to make this mistake; without an identity matrix of appropriate size, the expression simply does not make sense.  "
},
{
  "id": "eg_matrix_polynomials",
  "level": "2",
  "url": "s_invertible_matrices.html#eg_matrix_polynomials",
  "type": "Example",
  "number": "2.3.13",
  "title": "Matrix polynomials.",
  "body": " Matrix polynomials   Let . Evaluate at the matrices and .    We have and .   "
},
{
  "id": "s_invertible_matrices-4-8",
  "level": "2",
  "url": "s_invertible_matrices.html#s_invertible_matrices-4-8",
  "type": "Sage example",
  "number": "2.3.2",
  "title": "Matrix polynomials.",
  "body": " Matrix polynomials  An integer matrix power is computed in Sage as A^n .   Of course the matrix needs to be invertible for a negative of power to be computed. Sage will throw an error in this case if the matrix is singular.   Polynomial expressions can then be easily computed manually in Sage. The next cell computes and for .   We took care to heed the warning in , making sure to include for ( identity_matrix(3) ) and for ( identity_matrix(2) ). Interestingly, Sage is smart enough to figure out what we mean even if we are sloppy in this regard.   "
},
{
  "id": "th_power_rules",
  "level": "2",
  "url": "s_invertible_matrices.html#th_power_rules",
  "type": "Theorem",
  "number": "2.3.14",
  "title": "Properties of matrix powers.",
  "body": " Properties of matrix powers   The following properties hold for all matrices , all scalars , and all integers for which the given expression makes sense.                        .       The proofs of the first three statements are elementary, and closely resemble proofs of similar results in real number algebra. We leave these as an (unassigned) exercise.  For the fourth statement to make sense, we must assume that is invertible. The claim here is that is invertible, and that its inverse is itself. To prove this we need only show , which follows from the definition of the inverse.  The fifth statement also tacitly assumes is invertible. To prove it, we consider the three cases , and .  If , then by definition .  If , then by definition .  Suppose . Then .   "
},
{
  "id": "th_inverse_trans",
  "level": "2",
  "url": "s_invertible_matrices.html#th_inverse_trans",
  "type": "Theorem",
  "number": "2.3.15",
  "title": "Inverse and transpose.",
  "body": " Inverse and transpose   Let be invertible. We have , in which case .    We prove both implications of the if and only if statement separately.  Suppose is invertible with inverse . To see that is invertible, with inverse as specified in , we need only show that . We verify the two equalities separately:  . In both chains of equality we make use of the obvious claim .  For the other direction, assume is invertible. Setting , we see that . By the first implication, we know that if is invertible, then so is .   "
},
{
  "id": "s_invertible_matrices_ex-1-2",
  "level": "2",
  "url": "s_invertible_matrices.html#s_invertible_matrices_ex-1-2",
  "type": "Exercise",
  "number": "2.3.3.1",
  "title": "",
  "body": "  If and are invertible matrices, then the inverse of is .     True    False          SOLUTION: False. For example, let , and , then , which is not invertible.      "
},
{
  "id": "s_invertible_matrices_ex-1-3",
  "level": "2",
  "url": "s_invertible_matrices.html#s_invertible_matrices_ex-1-3",
  "type": "Exercise",
  "number": "2.3.3.2",
  "title": "",
  "body": "  Solve for the matrix if . Assume that all matrices are and invertible as needed.         SOLUTION: Note that      "
},
{
  "id": "s_invertible_matrices_ex-1-4",
  "level": "2",
  "url": "s_invertible_matrices.html#s_invertible_matrices_ex-1-4",
  "type": "Exercise",
  "number": "2.3.3.3",
  "title": "",
  "body": "  Are the following matrices invertible?                    "
},
{
  "id": "s_invertible_matrices_ex-1-5",
  "level": "2",
  "url": "s_invertible_matrices.html#s_invertible_matrices_ex-1-5",
  "type": "Exercise",
  "number": "2.3.3.4",
  "title": "",
  "body": "  For what values of will be invertible?  For all such that  and  .             SOLUTION: The matrix is invertible provided the columns of are linearly independent, which will be the case if . Thus, we require that and .      "
},
{
  "id": "s_invertible_matrices_ex-1-6",
  "level": "2",
  "url": "s_invertible_matrices.html#s_invertible_matrices_ex-1-6",
  "type": "Exercise",
  "number": "2.3.3.5",
  "title": "",
  "body": "  Let   Then   where  ,  ,  ,  ,   where  ,  ,  ,  ,  and   where  ,  ,  ,  .                                                                  "
},
{
  "id": "s_invertible_matrices_ex-2-2",
  "level": "2",
  "url": "s_invertible_matrices.html#s_invertible_matrices_ex-2-2",
  "type": "Exercise",
  "number": "2.3.3.6",
  "title": "",
  "body": " For each matrix either provide an inverse or show the matrix is not invertible. Justify your answer.               , where .    "
},
{
  "id": "s_invertible_matrices_ex-2-3",
  "level": "2",
  "url": "s_invertible_matrices.html#s_invertible_matrices_ex-2-3",
  "type": "Exercise",
  "number": "2.3.3.7",
  "title": "",
  "body": " Each below is invertible. Find by guess and check. You may want to use the row or column method of matrix multiplication to justify your answer.                   "
},
{
  "id": "s_invertible_matrices_ex-2-4",
  "level": "2",
  "url": "s_invertible_matrices.html#s_invertible_matrices_ex-2-4",
  "type": "Exercise",
  "number": "2.3.3.8",
  "title": "",
  "body": " Suppose is an invertible matrix. Prove: for any nonzero  the matrix is invertible.  "
},
{
  "id": "s_invertible_matrices_ex-2-5",
  "level": "2",
  "url": "s_invertible_matrices.html#s_invertible_matrices_ex-2-5",
  "type": "Exercise",
  "number": "2.3.3.9",
  "title": "",
  "body": " Assume is a square matrix with .    Prove: if has two identical columns, then is not invertible.    Prove: if has a row that is a scalar multiple of another row, then is not invertible.     Use the column and\/or row method of matrix multiplication to show directly that cannot have an inverse matrix.  "
},
{
  "id": "s_invertible_matrices_ex-2-6",
  "level": "2",
  "url": "s_invertible_matrices.html#s_invertible_matrices_ex-2-6",
  "type": "Exercise",
  "number": "2.3.3.10",
  "title": "",
  "body": " Find all invertible matrices satisfying the given equation, or show there is no such . Justify your answer.     .     .              "
},
{
  "id": "s_invertible_matrices_ex-2-7",
  "level": "2",
  "url": "s_invertible_matrices.html#s_invertible_matrices_ex-2-7",
  "type": "Exercise",
  "number": "2.3.3.11",
  "title": "",
  "body": " Let . Find a formula for , where is an integer. Justify your answer using a proof by induction.  "
},
{
  "id": "s_invertible_matrices_ex-2-8",
  "level": "2",
  "url": "s_invertible_matrices.html#s_invertible_matrices_ex-2-8",
  "type": "Exercise",
  "number": "2.3.3.12",
  "title": "",
  "body": " Let , the matrix consisting of all ones. Find a formula for , where is an integer. Justify your answer using a proof by induction.  "
},
{
  "id": "s_invertible_matrices_ex-2-9",
  "level": "2",
  "url": "s_invertible_matrices.html#s_invertible_matrices_ex-2-9",
  "type": "Exercise",
  "number": "2.3.3.13",
  "title": "",
  "body": " Let , where is some fixed scalar. Suppose is an matrix satisfying .    Prove: if , then is invertible.    Suppose further that is not a scalar multiple of .  Prove: if , then is singular.    "
},
{
  "id": "ex_expand_matrix_prod",
  "level": "2",
  "url": "s_invertible_matrices.html#ex_expand_matrix_prod",
  "type": "Exercise",
  "number": "2.3.3.14",
  "title": "Expanding matrix products.",
  "body": "Expanding matrix products Fix a positive integer . Given linear combinations of matrices , prove by induction on that . Note that each step (base and induction) of your induction on will require an argument that uses induction on ! This is sometimes called double induction . For example, in the base step you must show that for any ; this should be proved by induction on . "
},
{
  "id": "ex_poly_inA_commute",
  "level": "2",
  "url": "s_invertible_matrices.html#ex_poly_inA_commute",
  "type": "Exercise",
  "number": "2.3.3.15",
  "title": "Polynomial expressions of <span class=\"process-math\">\\(A\\)<\/span> commute.",
  "body": "Polynomial expressions of commute  Let and be polynomials with real coefficients. For any square matrix , show that the matrices and commute: i.e., . You may use the result of .  "
},
{
  "id": "s_invertible_matrices_ex-2-12",
  "level": "2",
  "url": "s_invertible_matrices.html#s_invertible_matrices_ex-2-12",
  "type": "Exercise",
  "number": "2.3.3.16",
  "title": "",
  "body": " Suppose is an matrix satisfying for some .  Show that is invertible, and that in fact . You may use the results of and\/or . .  "
},
{
  "id": "s_invertibility_theorem",
  "level": "1",
  "url": "s_invertibility_theorem.html",
  "type": "Section",
  "number": "2.4",
  "title": "The invertibility theorem",
  "body": " The invertibility theorem   We saw in that verifying directly whether a matrix is invertible, using only , can be quite an involved task. The goal of this section is to make this less onerous by developing some equivalent methods of testing invertibility. Our work culminates in and , which draw connections between invertibility, solutions to linear systems, and row echelon forms of a square matrix. Not surprisingly, our old friend Gaussian elimination emerges as the fundamental computational tool.    Elementary matrices  We begin with a treatment of elementary matrices , which serve as the basic building blocks for invertible matrices, and provide a crucial link between row reduction and matrix multiplication.   elementary matrix  matrix elementary    Scaling elementary matrix     Row swap elementary matrix     Row addition elementary matrix   Elementary matrices   An matrix is elementary if multiplying any matrix on the left by performs one of our row operations on .  We have different types of elementary matrices depending on the type of row operation they perform, and we denote these with an elaboration of our earlier row operation notation:   A scaling elementary matrix is a matrix such that multiplying a matrix on the left by scales the -th row of by .    A row swap elementary matrix is a matrix such that multiplying a matrix on the left by swaps the -th and -th rows of .    A row addition elementary matrix is a matrix such that multiplying a matrix on the left by replaces the -th row of with .       Naturally, the row method of multiplication is the key to connecting a given row operation with a particular elementary matrix. shows that once you fix the dimension, an elementary matrix is uniquely defined by the row operation it performs.   Elementary matrix formulas   Fix an integer . The three types of elementary matrices can be described as follows:    The scaling matrix is the result of scaling the -th row of by .        The row swap matrix is the result of swapping the -th and -th rows of .        The row addition matrix is the result of replacing the -th row of with the sum of its -th row and times its -th row.          First we show that if is one of the elementary matrices, then it must assume one of the forms described above. Indeed, since multiplying on the left by performs a certain row operation, and since , we see that itself is the result of performing this particular row operation on the identity matrix. Thus is one of the three types of matrices described above, obtained by performing an elementary row operation on .  Next, we must show that any of the matrices described above is indeed elementary in the sense of : that is, we must show that multiplying any matrix on the left by performs the relevant row operation on . This is now a direct consequence of .  For example, take . For , the -th row of is given by the -th row of times . Since the -th row of in this case has a one in the -th entry and zeros elsewhere, the product of this row and is just the -th row of . Similarly, the -th row of in this case is times the -th row of . Thus leaves all the rows of except for the -th one, which is scaled by .    Elementary matrices provide us a way of understanding row reduction as a series of matrix multiplications (on the left). Recall that row operations on linear systems are useful in so far as they preserve the set of solutions, and that this is the result of each operation being in some sense reversible . (See .) In terms of matrix multiplication, this reversible attribute is reflected in the fact that elementary matrices are invertible .   Inverses of elementary matrices   Fix . All elementary matrices are invertible, and their inverses are elementary matrices. In fact, we have the following formulas:     These formulas all follow easily from , and the fact that the proposed inverse elementary matrix performs the reverse , or inverse, of the row operation corresponding to the given elementary matrix.     Inverses of elementary matrices   Fix . Verify that the following pairs of elementary matrices are indeed inverses of one another.                       We have and . You can verify for yourself that .    We have . You can verify for yourself that .    We have and . You can verify for yourself that .        Interlude on matrix equations  We take a moment to make the following simple, somewhat overdue observation. Namely, we can represent a system of linear equations  as a single matrix equation  , or , where , , .  Indeed if you expand out the left-hand side of into an column vector, using the definition of matrix multiplication, and then invoke the definition of matrix equality, then you obtain the linear system .  By the same token, an -tuple is a solution to the system of equations  if and only if its corresponding column vector is a solution to the matrix equation  .  We have thus recast the problem of solving linear systems to the problem of solving a certain matrix equation of the form for the unknown column vector . In particular, a homogeneous linear system can be represented as a matrix equation of the form .  Lastly, the use of Gaussian elimination to solve a linear system can now be understood in an algebraic way using matrix multiplication.  In more detail, suppose our given linear system has augmented matrix that row reduces to the row echelon matrix after performing a sequence of row operations. Denote the -th row operation , and denote by the result of applying to a matrix .  Our sequence of operations translates to the following sequence of matrix equations: .  Let correspond to the elementary matrix . Then we represent this same sequence using matrix multiplication: . This depiction of row reduction in terms of successive left-multiplication by elementary matrices will be useful to us in many ways. In particular, it follows from this discussion that two matrices and are row equivalent if and only if we have for some collection of elementary matrices .    The invertibility theorem  We are now in position to prove our first big theorem.   Invertibility theorem   Let be an matrix. The following statements are equivalent.     is invertible.    The matrix equation has a unique solution for any column vector .    The matrix equation has a unique solution : namely, .     is row equivalent to , the identity matrix.     is a product of elementary matrices.      Recall that to show two statements and are equivalent, we must show two implications: , and . Instead of doing this for each possible pair of sentences above, we ease our work load by instead showing the following cycle of implications: . Since implication is transitive, starting at any point in our cycle and making our way around the chain of implications, we see that any one of the propositions implies any other proposition.    Suppose exists. Given any column vector , we have , which shows that is the unique solution to .     Clearly, if has a unique solution for any choice of , then it has a unique solution for the particular choice . Since is clearly a solution to the equation, it must be the only solution.     Row reduce to a matrix in reduced row echelon form using Gauss-Jordan elimination. (See .) Since the set of solutions to is identical to the set of solutions to (apply to their corresponding linear systems), we see that is the only solution to . now implies has a leading one in each column. Since is and in reduced row echelon form, it follows that must be the identity matrix. (Convince yourself of this.) Thus is row equivalent to , the identity matrix.     If is row equivalent to , then according to our discussion after , we have for some collection of elementary matrices . Since elementary matrices are invertible we can multiply both sides of this equation by to conclude . Since inverses of elementary matrices are elementary ( ), we conclude that is a product of elementary matrices.     If is a product of elementary matrices, then it is a product of invertible matrices. Since products of invertible matrices are invertible, we conclude that is invertible.       The invertibility theorem has an immediate application to linear systems where the number of equations is equal to the number of unknowns. In this special situation, the system is equivalent to a matrix equation of the form , where is a square matrix . According to the theorem, if we know is invertible, then the matrix equation, and hence the linear system, has a unique solution: namely, .  What if is not invertible? Then the theorem only tells us that there is some column vector , not necessarily the given , such that the equation does not have a unique solution. In other words, the theorem alone doesn't allow us to conclude whether the given has a solution, and we must resort to our usual Gaussian elimination procedure to answer this question.    The family of triangular matrices (upper, lower, and diagonal) defined below provides an easy testing ground for our new invertibility theorem.   matrices diagonal  matrices triangular  matrices upper triangular  matrices lower triangular  Diagonal and triangular matrices   Let be .   For each the entry is called the -th diagonal entry of , and subarray of consisting of is called the diagonal . An off-diagonal entry of is any entry not among the diagonal entries.    The matrix is diagonal if all off-diagonal entries are zero: , if for all with .    The matrix is upper triangular if all entries below the diagonal are zero: , if for all .    The matrix is lower triangular if all entries above the diagonal are zero: , if for all .    The matrix is triangular if is upper triangular or lower triangular.        Triangular matrices   The set of all diagonal matrices can be described as . The set of all upper triangular matrices can be described as . The set of all lower triangular matrices can be described as .     Invertibility of triangular matrices   Let be a triangular matrix. Then is invertible if and only if for all .  In other words, is invertible if and only if the diagonal entries of are all nonzero.    In this proof we will make use of the fact that a square matrix is invertible if and only if is invertible. ( )   Case: is upper triangular  If for all , then it is easy to see that we can row reduce first to a row echelon matrix with leading ones in every diagonal entry, and then further to the identity matrix. Thus is row equivalent to in this case, and we conclude from statement (4) of that is invertible.  For the other implication, we show that if it is not the case that for all , then there is a nonzero solution to the matrix equation . If this is the case, then since we have two distinct solutions to , is not invertible by Statement (3) of .  To this end, assume it is not the case that for all . Then we can find a smallest index such that and for any . It is easy to see that is row equivalent to a matrix , satisfying for and for all : i.e., is diagonal up until the -th column .  We now provide a nonzero solution to : namely, set , for all , and for all . (Verify this for yourself, using the description above of for .) Since is row equivalent to , the linear systems corresponding to and have the same solutions. Hence is also a nonzero solution to . We conclude that is not invertible by Statement (3) of . This concludes the proof of this implication.    Case: is lower triangular  Set . Then is upper triangular, and for all . Then .       Invertibility algorithms  The proof of the implication of can be expanded into an algorithm that (1) decides whether a given matrix is invertible, and (2) computes if is invertible.   Inverse algorithm   Let be an matrix. To test for invertibility of proceed as follows.    Step 1  Build the augmented matrix and use Gaussian elimination to row reduce to the form , where is in row echelon form.  The matrix is invertible if and only if has leading ones.    Step 2  If has leading ones, row reduce further to a matrix of the form . Then .      From the proof of we know is invertible if and only if has leading ones. The question remains as to why reducing the augmented matrix to tells us that . Let be the elementary matrices representing the row operations involved in this process. Then we have . After a little algebra, we see that . Since is the result of applying same row operations to we have , as claimed.    From the proof of we also derive an algorithm for writing an invertible matrix as a product of elementary matrices. You should think of this as a first example of the great versatility of Gaussian elimination, as conveyed by our .   Product of elementary matrices algorithm   Let be an matrix. To (potentially) write as a product of elementary matrices, proceed as follows.    Step 1  Attempt to row reduce to the identity, keeping track of your sequence of row operations in the form of elementary matrices.    Step 2  If you are able to row reduce to with a sequence of row operatons corresponding to the elementary matrices , then Since the inverse of an elementary matrix is elementary, we have written as a product of elementary matrices.      See the proof of the implication in .     Inverse algorithms  Let . Combining both algorithms we can decide whether is invertible, and if so, compute and write as a product of elementary matrices. According to , the computation shows that is invertible and . Next, representing our row operations as elementary matrices, we see that , where . We conclude that .    Video example: inverse algorithm   Video: inverse algorithm  Video: inverse algorithm       Some theoretical loose ends  The two inveribility algorithms above are nice examples of how a theoretical result like our invertibility theorem can pay some serious computational dividends. Namely, thanks to the theory we have discovered a method of computing the inverse of a matrix that essentially boils down to row reduction.  We finish this section with a number of theoretical implications that tie up some loose ends. The results below are all consequences in some way of . The fist shows that in fact one one of the defining equalities or suffices to define the inverse of a matrix.   Left-inverse if and only if right-inverse   Let and be . Then    .     .   In plain English: a matrix is a left-inverse of if and only if it is a right-inverse of .    It is enough to prove the first implication: the second then follows by exchanging the roles of and .  Suppose . We first show that is invertible. We have . By Statement (3) of , we conclude that is invertible.  Now that we know exists we have .    As a further consequence of , we can at last strengthen the implication to an equivalence.   Invertibility of product equivalence   Let and be . Then is invertible if and only if and are both invertible: ,      Implication:  We know from that if and are invertible, then so is .    Implication: invertible  and invertible  Assume is invertible and let be its inverse. Thus . We first prove is invertible. We have . The last implication uses Statement (3) of and the fact that is invertible. We have shown that , and hence that is invertible, using once again Statement (3) of .  Next we prove directly that is invertible. Namely, we claim that . Indeed, since is the inverse of , we have . Thus is a right-inverse of . now implies , and hence that , as claimed.  This completes the proof that if is invertible, then and are invertible.     We conclude with two results related to row reduction. The first provides an equivalent formulation of row equivalence in terms of matrix arithmetic: an elaboration of our discussion in .   Row equivalence and invertible matrices   Let and be matrices. The following statements are equivalent.   The matrices and are row equivalent.    There are elementary matrices such that .    There is an invertible matrix such that .       The equivalence of (1) and (2) was shown in the course of our discussion in . The equivalence of (2) and (3) is a direct consequence of (5) of since a matrix is invertible if and only if it can be written as for some elementary matrices .     Properties of row equivalence  With the help of , we can easily show that the row equivalence relation is reflexive , symmetric , and transitive . In other words, letting denote that is row equivalent to , the following properties hold.   Reflexivity  For any matrix , we have : , every matrix is row equivalent to itself.    Symmetry  For all matrices and , if , then .    Transitivity  For all matrices , if and , then .   The proof of these facts is left as an exercise ( ).   Lastly, we provide at last the proof of the third statement of promised back in . This proof is due to Thomas Yuster Thomas Yuster. The reduced row echelon form of a matrix is unique: a simple proof , Mathematics Magazine 57 (1984), no. 2, 93-94. .   Uniqueness of reduced row echelon form   Any matrix is row equivalent to a unique matrix in reduced row echelon form.    Let be an matrix. Using Gauss-Jordan elimination, we can row reduce to matrix in reduced row echelon form. Suppose is also row equivalent to the matrix in reduced row echelon form. Then and are row equivalent, since the row equivalence relation is symmetric and transitive ( ). Thus it suffices to show that if and are row equivalent matrices in reduced row echelon form, then . We do so by induction on . The base step is trivial, since there is only one matrix in reduced row echelon form.  For the induction step we assume that any two row equivalent matrices in reduced row echelon form are equal. Suppose by contradiction that and are row equivalent matrices in reduced row echelon form, and that . By there is an invertible matrix such that . The first columns of and form matrices and , respectively, that are in reduced row echelon form, as one easily checks. Furthermore, and are row equivalent: indeed, using we see that implies . By the induction hypothesis we must have , and thus and can only differ in their last column.  We claim that and must both have a leading one in the last column. To see why, consider the matrix equation , where is a column vector. Since , we have , and thus . Because and differ in at most their last column, the first columns of are zero columns, and thus we have . Since , there is some such that . Since by , we must have . We have shown that for any satisfying , we must have . It follows from that must have a leading in its last column, since otherwise the variable in the system would be free, and could assume any value. To see that also has a leading one in the last column, we use the same argument, starting with the equation .  To summarize, starting with row equivalent matrices and in reduced row echelon form, and assuming by contradiction that , we conclude that (a) the first columns of and are equal and form matrices in reduced row echelon form, and (b) the last columns of and have leading ones. Since and are in reduced row echelon form, and since the first columns of and are equal, we see that the leading ones in the last columns of and must occur in the same row: namely, the first zero row of . It follows that , a contradiction.       WeBWork Exercises    True or false: Suppose that and are two elementary matrices. Then   .    True    False          SOLUTION: False. If then but         Let  Then   where  ,  ,  ,  ,  ,  ,  ,  ,  .                                                      Let   Find and use it to solve where    where  and  .                   Solve the system of equations by converting to a matrix equation and using the inverse of the coefficient matrix.                       Solve the system of equations by converting to a matrix equation and using the inverse of the coefficient matrix.                              a. The linear transformation is given by:  .  Find .  x + y, x + y  b. The linear transformation is given by:  .  Find .  x + y + z, x + y + z, x + y + z  c. Using from part a, it is given that:   Find x and y.      d. Using from part b, it is given that:   Find x, y, and z.                                                                                                         Written Exercises   Linear systems and matrix equations   Find a matrix and column vectors and such that the given linear system is equivalent to the matrix equation .               Solving linear systems with matrix inverses   Find an invertible matrix and column vectors and such that the given linear system is equivalent to the matrix equation . Compute and use this to find the unique solution to the linear system. (See .)               Inverse algorithm   Use the inverse algorithm to determine whether each matrix is invertible, and to compute its inverse if possible.  You are not required to follow Gaussian elimination to the letter, and you may perform multiple operations at the same time, as long as they are independent of one another. For example, do not do and in the same step.        We use the inverse algorithm: . We conclude that .                    ,      ,      Product of elementary matrices algorithm   Each matrix below is invertible. Use the product of elementary matrices algorithm to write as a product of elementary matrices.  Here you should perform Gaussian elimination to the letter, one row operation at a time.        Row reduce to the identity matrix:   The corresponding elementary matrices are . It follows that , and hence that .     .          .     According to Statement (2) of the invertibility theorem, a matrix is invertible if and only if for all column vectors the matrix equation has a unique solution. Show that we can add the following, weaker-looking version of (2) to our list of equivalent statements:   (2') The matrix equation has a solution for any column vector .    Try to logically weave Statement (2') into our original list of equivalent statements by (a) finding a statement from our original list that implies (2'), and (b) find a statement in our original list that is implied by (2').  You may make use of in your argument.   Properties of row equivalence  Let denote that matrix is row equivalent to . Use to show that the relation is reflexive, symmetric, and transitive, as described in .    Let be an matrix, and let be an invertible matrix.  Show that the two matrix equations have the same set of solutions. In other words show that .    Suppose and are row equivalent square matrices. Prove: is invertible if and only if is invertible.    Use the provided information to determine whether the given square matrix is invertible. Justify your answer using the inveribility theorem or one of its corollaries.  There are column vectors such that .  is invertible.  for some . The sum of the columns of is equal to the zero column vector.   Answer true or false. If true, provide a proof; if false, exhibit an explicit counterexample.  The product of two elementary matrices is elementary. The product of two elementary matrices is invertible. The sum of two invertible matrices is invertible. If is a singular matrix, then the linear system has infinitely many solutions. If is obtained from the invertible matrix by replacing its second row with the sum of its first and second rows, then is invertible. If is square matrix, and is a column vector such that the matrix equation has a unique solution, then is invertible. If and are row equivalent, then the matrix equations and have the same solution set. If or is singular, then is singular.    "
},
{
  "id": "d_elementary_matrix",
  "level": "2",
  "url": "s_invertibility_theorem.html#d_elementary_matrix",
  "type": "Definition",
  "number": "2.4.1",
  "title": "Elementary matrices.",
  "body": " elementary matrix  matrix elementary    Scaling elementary matrix     Row swap elementary matrix     Row addition elementary matrix   Elementary matrices   An matrix is elementary if multiplying any matrix on the left by performs one of our row operations on .  We have different types of elementary matrices depending on the type of row operation they perform, and we denote these with an elaboration of our earlier row operation notation:   A scaling elementary matrix is a matrix such that multiplying a matrix on the left by scales the -th row of by .    A row swap elementary matrix is a matrix such that multiplying a matrix on the left by swaps the -th and -th rows of .    A row addition elementary matrix is a matrix such that multiplying a matrix on the left by replaces the -th row of with .      "
},
{
  "id": "th_elementary_matrices",
  "level": "2",
  "url": "s_invertibility_theorem.html#th_elementary_matrices",
  "type": "Theorem",
  "number": "2.4.2",
  "title": "Elementary matrix formulas.",
  "body": " Elementary matrix formulas   Fix an integer . The three types of elementary matrices can be described as follows:    The scaling matrix is the result of scaling the -th row of by .        The row swap matrix is the result of swapping the -th and -th rows of .        The row addition matrix is the result of replacing the -th row of with the sum of its -th row and times its -th row.          First we show that if is one of the elementary matrices, then it must assume one of the forms described above. Indeed, since multiplying on the left by performs a certain row operation, and since , we see that itself is the result of performing this particular row operation on the identity matrix. Thus is one of the three types of matrices described above, obtained by performing an elementary row operation on .  Next, we must show that any of the matrices described above is indeed elementary in the sense of : that is, we must show that multiplying any matrix on the left by performs the relevant row operation on . This is now a direct consequence of .  For example, take . For , the -th row of is given by the -th row of times . Since the -th row of in this case has a one in the -th entry and zeros elsewhere, the product of this row and is just the -th row of . Similarly, the -th row of in this case is times the -th row of . Thus leaves all the rows of except for the -th one, which is scaled by .   "
},
{
  "id": "th_inverse_elem",
  "level": "2",
  "url": "s_invertibility_theorem.html#th_inverse_elem",
  "type": "Theorem",
  "number": "2.4.3",
  "title": "Inverses of elementary matrices.",
  "body": " Inverses of elementary matrices   Fix . All elementary matrices are invertible, and their inverses are elementary matrices. In fact, we have the following formulas:     These formulas all follow easily from , and the fact that the proposed inverse elementary matrix performs the reverse , or inverse, of the row operation corresponding to the given elementary matrix.   "
},
{
  "id": "eg_elem_inverse",
  "level": "2",
  "url": "s_invertibility_theorem.html#eg_elem_inverse",
  "type": "Example",
  "number": "2.4.4",
  "title": "Inverses of elementary matrices.",
  "body": " Inverses of elementary matrices   Fix . Verify that the following pairs of elementary matrices are indeed inverses of one another.                       We have and . You can verify for yourself that .    We have . You can verify for yourself that .    We have and . You can verify for yourself that .     "
},
{
  "id": "th_invertibility",
  "level": "2",
  "url": "s_invertibility_theorem.html#th_invertibility",
  "type": "Theorem",
  "number": "2.4.5",
  "title": "Invertibility theorem.",
  "body": " Invertibility theorem   Let be an matrix. The following statements are equivalent.     is invertible.    The matrix equation has a unique solution for any column vector .    The matrix equation has a unique solution : namely, .     is row equivalent to , the identity matrix.     is a product of elementary matrices.      Recall that to show two statements and are equivalent, we must show two implications: , and . Instead of doing this for each possible pair of sentences above, we ease our work load by instead showing the following cycle of implications: . Since implication is transitive, starting at any point in our cycle and making our way around the chain of implications, we see that any one of the propositions implies any other proposition.    Suppose exists. Given any column vector , we have , which shows that is the unique solution to .     Clearly, if has a unique solution for any choice of , then it has a unique solution for the particular choice . Since is clearly a solution to the equation, it must be the only solution.     Row reduce to a matrix in reduced row echelon form using Gauss-Jordan elimination. (See .) Since the set of solutions to is identical to the set of solutions to (apply to their corresponding linear systems), we see that is the only solution to . now implies has a leading one in each column. Since is and in reduced row echelon form, it follows that must be the identity matrix. (Convince yourself of this.) Thus is row equivalent to , the identity matrix.     If is row equivalent to , then according to our discussion after , we have for some collection of elementary matrices . Since elementary matrices are invertible we can multiply both sides of this equation by to conclude . Since inverses of elementary matrices are elementary ( ), we conclude that is a product of elementary matrices.     If is a product of elementary matrices, then it is a product of invertible matrices. Since products of invertible matrices are invertible, we conclude that is invertible.    "
},
{
  "id": "rm_inv_solutions",
  "level": "2",
  "url": "s_invertibility_theorem.html#rm_inv_solutions",
  "type": "Remark",
  "number": "2.4.6",
  "title": "",
  "body": "  The invertibility theorem has an immediate application to linear systems where the number of equations is equal to the number of unknowns. In this special situation, the system is equivalent to a matrix equation of the form , where is a square matrix . According to the theorem, if we know is invertible, then the matrix equation, and hence the linear system, has a unique solution: namely, .  What if is not invertible? Then the theorem only tells us that there is some column vector , not necessarily the given , such that the equation does not have a unique solution. In other words, the theorem alone doesn't allow us to conclude whether the given has a solution, and we must resort to our usual Gaussian elimination procedure to answer this question.   "
},
{
  "id": "d_diagonal_triangular",
  "level": "2",
  "url": "s_invertibility_theorem.html#d_diagonal_triangular",
  "type": "Definition",
  "number": "2.4.7",
  "title": "Diagonal and triangular matrices.",
  "body": " matrices diagonal  matrices triangular  matrices upper triangular  matrices lower triangular  Diagonal and triangular matrices   Let be .   For each the entry is called the -th diagonal entry of , and subarray of consisting of is called the diagonal . An off-diagonal entry of is any entry not among the diagonal entries.    The matrix is diagonal if all off-diagonal entries are zero: , if for all with .    The matrix is upper triangular if all entries below the diagonal are zero: , if for all .    The matrix is lower triangular if all entries above the diagonal are zero: , if for all .    The matrix is triangular if is upper triangular or lower triangular.      "
},
{
  "id": "eg_triang_matrices",
  "level": "2",
  "url": "s_invertibility_theorem.html#eg_triang_matrices",
  "type": "Example",
  "number": "2.4.8",
  "title": "Triangular <span class=\"process-math\">\\(3\\times 3\\)<\/span> matrices.",
  "body": " Triangular matrices   The set of all diagonal matrices can be described as . The set of all upper triangular matrices can be described as . The set of all lower triangular matrices can be described as .   "
},
{
  "id": "th_invertible_triangular",
  "level": "2",
  "url": "s_invertibility_theorem.html#th_invertible_triangular",
  "type": "Theorem",
  "number": "2.4.9",
  "title": "Invertibility of triangular matrices.",
  "body": " Invertibility of triangular matrices   Let be a triangular matrix. Then is invertible if and only if for all .  In other words, is invertible if and only if the diagonal entries of are all nonzero.    In this proof we will make use of the fact that a square matrix is invertible if and only if is invertible. ( )   Case: is upper triangular  If for all , then it is easy to see that we can row reduce first to a row echelon matrix with leading ones in every diagonal entry, and then further to the identity matrix. Thus is row equivalent to in this case, and we conclude from statement (4) of that is invertible.  For the other implication, we show that if it is not the case that for all , then there is a nonzero solution to the matrix equation . If this is the case, then since we have two distinct solutions to , is not invertible by Statement (3) of .  To this end, assume it is not the case that for all . Then we can find a smallest index such that and for any . It is easy to see that is row equivalent to a matrix , satisfying for and for all : i.e., is diagonal up until the -th column .  We now provide a nonzero solution to : namely, set , for all , and for all . (Verify this for yourself, using the description above of for .) Since is row equivalent to , the linear systems corresponding to and have the same solutions. Hence is also a nonzero solution to . We conclude that is not invertible by Statement (3) of . This concludes the proof of this implication.    Case: is lower triangular  Set . Then is upper triangular, and for all . Then .    "
},
{
  "id": "th_invertibility_algorithm",
  "level": "2",
  "url": "s_invertibility_theorem.html#th_invertibility_algorithm",
  "type": "Theorem",
  "number": "2.4.10",
  "title": "Inverse algorithm.",
  "body": " Inverse algorithm   Let be an matrix. To test for invertibility of proceed as follows.    Step 1  Build the augmented matrix and use Gaussian elimination to row reduce to the form , where is in row echelon form.  The matrix is invertible if and only if has leading ones.    Step 2  If has leading ones, row reduce further to a matrix of the form . Then .      From the proof of we know is invertible if and only if has leading ones. The question remains as to why reducing the augmented matrix to tells us that . Let be the elementary matrices representing the row operations involved in this process. Then we have . After a little algebra, we see that . Since is the result of applying same row operations to we have , as claimed.   "
},
{
  "id": "th_elem_matrices_alg",
  "level": "2",
  "url": "s_invertibility_theorem.html#th_elem_matrices_alg",
  "type": "Theorem",
  "number": "2.4.11",
  "title": "Product of elementary matrices algorithm.",
  "body": " Product of elementary matrices algorithm   Let be an matrix. To (potentially) write as a product of elementary matrices, proceed as follows.    Step 1  Attempt to row reduce to the identity, keeping track of your sequence of row operations in the form of elementary matrices.    Step 2  If you are able to row reduce to with a sequence of row operatons corresponding to the elementary matrices , then Since the inverse of an elementary matrix is elementary, we have written as a product of elementary matrices.      See the proof of the implication in .   "
},
{
  "id": "eg_inv_alg_example",
  "level": "2",
  "url": "s_invertibility_theorem.html#eg_inv_alg_example",
  "type": "Example",
  "number": "2.4.12",
  "title": "Inverse algorithms.",
  "body": " Inverse algorithms  Let . Combining both algorithms we can decide whether is invertible, and if so, compute and write as a product of elementary matrices. According to , the computation shows that is invertible and . Next, representing our row operations as elementary matrices, we see that , where . We conclude that .  "
},
{
  "id": "fig_vid_inver_alg",
  "level": "2",
  "url": "s_invertibility_theorem.html#fig_vid_inver_alg",
  "type": "Figure",
  "number": "2.4.13",
  "title": "Video: inverse algorithm",
  "body": " Video: inverse algorithm  Video: inverse algorithm   "
},
{
  "id": "cor_left-right_inverse",
  "level": "2",
  "url": "s_invertibility_theorem.html#cor_left-right_inverse",
  "type": "Corollary",
  "number": "2.4.14",
  "title": "Left-inverse if and only if right-inverse.",
  "body": " Left-inverse if and only if right-inverse   Let and be . Then    .     .   In plain English: a matrix is a left-inverse of if and only if it is a right-inverse of .    It is enough to prove the first implication: the second then follows by exchanging the roles of and .  Suppose . We first show that is invertible. We have . By Statement (3) of , we conclude that is invertible.  Now that we know exists we have .   "
},
{
  "id": "cor_inv_prod_eq",
  "level": "2",
  "url": "s_invertibility_theorem.html#cor_inv_prod_eq",
  "type": "Corollary",
  "number": "2.4.15",
  "title": "Invertibility of product equivalence.",
  "body": " Invertibility of product equivalence   Let and be . Then is invertible if and only if and are both invertible: ,      Implication:  We know from that if and are invertible, then so is .    Implication: invertible  and invertible  Assume is invertible and let be its inverse. Thus . We first prove is invertible. We have . The last implication uses Statement (3) of and the fact that is invertible. We have shown that , and hence that is invertible, using once again Statement (3) of .  Next we prove directly that is invertible. Namely, we claim that . Indeed, since is the inverse of , we have . Thus is a right-inverse of . now implies , and hence that , as claimed.  This completes the proof that if is invertible, then and are invertible.    "
},
{
  "id": "cor_row_equivalence_invertibility",
  "level": "2",
  "url": "s_invertibility_theorem.html#cor_row_equivalence_invertibility",
  "type": "Corollary",
  "number": "2.4.16",
  "title": "Row equivalence and invertible matrices.",
  "body": " Row equivalence and invertible matrices   Let and be matrices. The following statements are equivalent.   The matrices and are row equivalent.    There are elementary matrices such that .    There is an invertible matrix such that .       The equivalence of (1) and (2) was shown in the course of our discussion in . The equivalence of (2) and (3) is a direct consequence of (5) of since a matrix is invertible if and only if it can be written as for some elementary matrices .   "
},
{
  "id": "rm_row_equivalence_props",
  "level": "2",
  "url": "s_invertibility_theorem.html#rm_row_equivalence_props",
  "type": "Remark",
  "number": "2.4.17",
  "title": "Properties of row equivalence.",
  "body": " Properties of row equivalence  With the help of , we can easily show that the row equivalence relation is reflexive , symmetric , and transitive . In other words, letting denote that is row equivalent to , the following properties hold.   Reflexivity  For any matrix , we have : , every matrix is row equivalent to itself.    Symmetry  For all matrices and , if , then .    Transitivity  For all matrices , if and , then .   The proof of these facts is left as an exercise ( ).  "
},
{
  "id": "ss_invertible_loose_ends-10",
  "level": "2",
  "url": "s_invertibility_theorem.html#ss_invertible_loose_ends-10",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "57 "
},
{
  "id": "cor_RRE_uniqueness",
  "level": "2",
  "url": "s_invertibility_theorem.html#cor_RRE_uniqueness",
  "type": "Corollary",
  "number": "2.4.18",
  "title": "Uniqueness of reduced row echelon form.",
  "body": " Uniqueness of reduced row echelon form   Any matrix is row equivalent to a unique matrix in reduced row echelon form.    Let be an matrix. Using Gauss-Jordan elimination, we can row reduce to matrix in reduced row echelon form. Suppose is also row equivalent to the matrix in reduced row echelon form. Then and are row equivalent, since the row equivalence relation is symmetric and transitive ( ). Thus it suffices to show that if and are row equivalent matrices in reduced row echelon form, then . We do so by induction on . The base step is trivial, since there is only one matrix in reduced row echelon form.  For the induction step we assume that any two row equivalent matrices in reduced row echelon form are equal. Suppose by contradiction that and are row equivalent matrices in reduced row echelon form, and that . By there is an invertible matrix such that . The first columns of and form matrices and , respectively, that are in reduced row echelon form, as one easily checks. Furthermore, and are row equivalent: indeed, using we see that implies . By the induction hypothesis we must have , and thus and can only differ in their last column.  We claim that and must both have a leading one in the last column. To see why, consider the matrix equation , where is a column vector. Since , we have , and thus . Because and differ in at most their last column, the first columns of are zero columns, and thus we have . Since , there is some such that . Since by , we must have . We have shown that for any satisfying , we must have . It follows from that must have a leading in its last column, since otherwise the variable in the system would be free, and could assume any value. To see that also has a leading one in the last column, we use the same argument, starting with the equation .  To summarize, starting with row equivalent matrices and in reduced row echelon form, and assuming by contradiction that , we conclude that (a) the first columns of and are equal and form matrices in reduced row echelon form, and (b) the last columns of and have leading ones. Since and are in reduced row echelon form, and since the first columns of and are equal, we see that the leading ones in the last columns of and must occur in the same row: namely, the first zero row of . It follows that , a contradiction.   "
},
{
  "id": "s_invertibility_theorem_ex-1-2",
  "level": "2",
  "url": "s_invertibility_theorem.html#s_invertibility_theorem_ex-1-2",
  "type": "Exercise",
  "number": "2.4.6.1",
  "title": "",
  "body": "  True or false: Suppose that and are two elementary matrices. Then   .    True    False          SOLUTION: False. If then but      "
},
{
  "id": "s_invertibility_theorem_ex-1-3",
  "level": "2",
  "url": "s_invertibility_theorem.html#s_invertibility_theorem_ex-1-3",
  "type": "Exercise",
  "number": "2.4.6.2",
  "title": "",
  "body": "  Let  Then   where  ,  ,  ,  ,  ,  ,  ,  ,  .                                                   "
},
{
  "id": "s_invertibility_theorem_ex-1-4",
  "level": "2",
  "url": "s_invertibility_theorem.html#s_invertibility_theorem_ex-1-4",
  "type": "Exercise",
  "number": "2.4.6.3",
  "title": "",
  "body": "  Let   Find and use it to solve where    where  and  .                "
},
{
  "id": "s_invertibility_theorem_ex-1-5",
  "level": "2",
  "url": "s_invertibility_theorem.html#s_invertibility_theorem_ex-1-5",
  "type": "Exercise",
  "number": "2.4.6.4",
  "title": "",
  "body": "  Solve the system of equations by converting to a matrix equation and using the inverse of the coefficient matrix.                    "
},
{
  "id": "s_invertibility_theorem_ex-1-6",
  "level": "2",
  "url": "s_invertibility_theorem.html#s_invertibility_theorem_ex-1-6",
  "type": "Exercise",
  "number": "2.4.6.5",
  "title": "",
  "body": "  Solve the system of equations by converting to a matrix equation and using the inverse of the coefficient matrix.                           "
},
{
  "id": "s_invertibility_theorem_ex-1-7",
  "level": "2",
  "url": "s_invertibility_theorem.html#s_invertibility_theorem_ex-1-7",
  "type": "Exercise",
  "number": "2.4.6.6",
  "title": "",
  "body": "  a. The linear transformation is given by:  .  Find .  x + y, x + y  b. The linear transformation is given by:  .  Find .  x + y + z, x + y + z, x + y + z  c. Using from part a, it is given that:   Find x and y.      d. Using from part b, it is given that:   Find x, y, and z.                                                                                                      "
},
{
  "id": "s_invertibility_theorem_ex-2-2-3",
  "level": "2",
  "url": "s_invertibility_theorem.html#s_invertibility_theorem_ex-2-2-3",
  "type": "Exercise",
  "number": "2.4.6.7",
  "title": "",
  "body": "    "
},
{
  "id": "s_invertibility_theorem_ex-2-2-4",
  "level": "2",
  "url": "s_invertibility_theorem.html#s_invertibility_theorem_ex-2-2-4",
  "type": "Exercise",
  "number": "2.4.6.8",
  "title": "",
  "body": "    "
},
{
  "id": "s_invertibility_theorem_ex-2-3-3",
  "level": "2",
  "url": "s_invertibility_theorem.html#s_invertibility_theorem_ex-2-3-3",
  "type": "Exercise",
  "number": "2.4.6.9",
  "title": "",
  "body": "    "
},
{
  "id": "s_invertibility_theorem_ex-2-3-4",
  "level": "2",
  "url": "s_invertibility_theorem.html#s_invertibility_theorem_ex-2-3-4",
  "type": "Exercise",
  "number": "2.4.6.10",
  "title": "",
  "body": "    "
},
{
  "id": "s_invertibility_theorem_ex-2-4-3",
  "level": "2",
  "url": "s_invertibility_theorem.html#s_invertibility_theorem_ex-2-4-3",
  "type": "Exercise",
  "number": "2.4.6.11",
  "title": "",
  "body": "     We use the inverse algorithm: . We conclude that .  "
},
{
  "id": "s_invertibility_theorem_ex-2-4-4",
  "level": "2",
  "url": "s_invertibility_theorem.html#s_invertibility_theorem_ex-2-4-4",
  "type": "Exercise",
  "number": "2.4.6.12",
  "title": "",
  "body": "    "
},
{
  "id": "s_invertibility_theorem_ex-2-4-5",
  "level": "2",
  "url": "s_invertibility_theorem.html#s_invertibility_theorem_ex-2-4-5",
  "type": "Exercise",
  "number": "2.4.6.13",
  "title": "",
  "body": "    "
},
{
  "id": "s_invertibility_theorem_ex-2-4-6",
  "level": "2",
  "url": "s_invertibility_theorem.html#s_invertibility_theorem_ex-2-4-6",
  "type": "Exercise",
  "number": "2.4.6.14",
  "title": "",
  "body": "    "
},
{
  "id": "s_invertibility_theorem_ex-2-4-7",
  "level": "2",
  "url": "s_invertibility_theorem.html#s_invertibility_theorem_ex-2-4-7",
  "type": "Exercise",
  "number": "2.4.6.15",
  "title": "",
  "body": "  ,   "
},
{
  "id": "s_invertibility_theorem_ex-2-4-8",
  "level": "2",
  "url": "s_invertibility_theorem.html#s_invertibility_theorem_ex-2-4-8",
  "type": "Exercise",
  "number": "2.4.6.16",
  "title": "",
  "body": "  ,   "
},
{
  "id": "s_invertibility_theorem_ex-2-5-3",
  "level": "2",
  "url": "s_invertibility_theorem.html#s_invertibility_theorem_ex-2-5-3",
  "type": "Exercise",
  "number": "2.4.6.17",
  "title": "",
  "body": "     Row reduce to the identity matrix:   The corresponding elementary matrices are . It follows that , and hence that .  "
},
{
  "id": "s_invertibility_theorem_ex-2-5-4",
  "level": "2",
  "url": "s_invertibility_theorem.html#s_invertibility_theorem_ex-2-5-4",
  "type": "Exercise",
  "number": "2.4.6.18",
  "title": "",
  "body": "  .  "
},
{
  "id": "s_invertibility_theorem_ex-2-5-5",
  "level": "2",
  "url": "s_invertibility_theorem.html#s_invertibility_theorem_ex-2-5-5",
  "type": "Exercise",
  "number": "2.4.6.19",
  "title": "",
  "body": "    "
},
{
  "id": "s_invertibility_theorem_ex-2-5-6",
  "level": "2",
  "url": "s_invertibility_theorem.html#s_invertibility_theorem_ex-2-5-6",
  "type": "Exercise",
  "number": "2.4.6.20",
  "title": "",
  "body": "  .  "
},
{
  "id": "s_invertibility_theorem_ex-2-6",
  "level": "2",
  "url": "s_invertibility_theorem.html#s_invertibility_theorem_ex-2-6",
  "type": "Exercise",
  "number": "2.4.6.21",
  "title": "",
  "body": " According to Statement (2) of the invertibility theorem, a matrix is invertible if and only if for all column vectors the matrix equation has a unique solution. Show that we can add the following, weaker-looking version of (2) to our list of equivalent statements:   (2') The matrix equation has a solution for any column vector .    Try to logically weave Statement (2') into our original list of equivalent statements by (a) finding a statement from our original list that implies (2'), and (b) find a statement in our original list that is implied by (2').  You may make use of in your argument.  "
},
{
  "id": "ex_row_equiv_props",
  "level": "2",
  "url": "s_invertibility_theorem.html#ex_row_equiv_props",
  "type": "Exercise",
  "number": "2.4.6.22",
  "title": "Properties of row equivalence.",
  "body": "Properties of row equivalence  Let denote that matrix is row equivalent to . Use to show that the relation is reflexive, symmetric, and transitive, as described in .  "
},
{
  "id": "s_invertibility_theorem_ex-2-8",
  "level": "2",
  "url": "s_invertibility_theorem.html#s_invertibility_theorem_ex-2-8",
  "type": "Exercise",
  "number": "2.4.6.23",
  "title": "",
  "body": " Let be an matrix, and let be an invertible matrix.  Show that the two matrix equations have the same set of solutions. In other words show that .  "
},
{
  "id": "s_invertibility_theorem_ex-2-9",
  "level": "2",
  "url": "s_invertibility_theorem.html#s_invertibility_theorem_ex-2-9",
  "type": "Exercise",
  "number": "2.4.6.24",
  "title": "",
  "body": " Suppose and are row equivalent square matrices. Prove: is invertible if and only if is invertible.  "
},
{
  "id": "s_invertibility_theorem_ex-2-10",
  "level": "2",
  "url": "s_invertibility_theorem.html#s_invertibility_theorem_ex-2-10",
  "type": "Exercise",
  "number": "2.4.6.25",
  "title": "",
  "body": " Use the provided information to determine whether the given square matrix is invertible. Justify your answer using the inveribility theorem or one of its corollaries.  There are column vectors such that .  is invertible.  for some . The sum of the columns of is equal to the zero column vector. "
},
{
  "id": "s_invertibility_theorem_ex-2-11",
  "level": "2",
  "url": "s_invertibility_theorem.html#s_invertibility_theorem_ex-2-11",
  "type": "Exercise",
  "number": "2.4.6.26",
  "title": "",
  "body": " Answer true or false. If true, provide a proof; if false, exhibit an explicit counterexample.  The product of two elementary matrices is elementary. The product of two elementary matrices is invertible. The sum of two invertible matrices is invertible. If is a singular matrix, then the linear system has infinitely many solutions. If is obtained from the invertible matrix by replacing its second row with the sum of its first and second rows, then is invertible. If is square matrix, and is a column vector such that the matrix equation has a unique solution, then is invertible. If and are row equivalent, then the matrix equations and have the same solution set. If or is singular, then is singular. "
},
{
  "id": "s_det",
  "level": "1",
  "url": "s_det.html",
  "type": "Section",
  "number": "2.5",
  "title": "The determinant",
  "body": " The determinant   The determinant is a map that assigns to a square matrix a scalar . The definition given below of the determinant is far from intuitive, and we will do little to motivate it up front. Instead, we allow its various properties to speak for themselves by way of retroactive motivation. In particular, we will see that , making the determinant an important tool for investigating invertibility.    Definition of the determinant  Our definition of the determinant is a recursive one; given an matrix its determinant is defined in terms of the determinant of certain submatrices of dimension . This necessitates some notation to help our discussion along.   Submatrix notation  submatrix    submatrix of    Let be an matrix with . Given , the submatrix of obtained by removing the -th row and -th column of is denoted .      Do not conflate the submatrix notation with matrix entry notation : the former returns the submatrix of obtained by deleting the -th row and -th column; the latter returns the -th entry of .     The determinant  determinant    determinant of    Let . The determinant is defined as follows:   Base case:  When we have and we define .    Recursive case:  When we define .        Small cases   Let's look at determinant formulas for the cases. You may remember the formula for matrices from ; we will make the connection more explicit in .  Given , we have . The formula for the case is simple enough to serve as a second base case , allowing us to end the recursive process of computing a general matrix once we get to expressions involving matrices.  Given , we have .    The recursive nature of the determinant definition makes induction arguments particularly useful when proving properties of the determinant, as illustrated by the next theorem.   Determinant of triangular matrices   Let be triangular (upper, lower, or diagonal). Then . In other words, the determinant of a triangular matrix is the product of its diagonal entries.    We only give the proof for lower triangular matrices; the proof in the upper triangular case is nearly identical.  For any let denote the proposition: The determinant of any lower triangular matrix is the product of its diagonal entries . We prove by induction that is true for all .   Base step: show is true  In this case , and is indeed the product of the diagonal entries of .    Induction step: show for all  Let be a lower triangular matrix. Then for all , and hence the determinant of is given by . Claim: is lower triangular. Indeed, first observe that we have for all ; by deleting the first row and first column we effectively bump each index up by one. Since is lower triangular we have for all , and hence also for all , proving the claim.  Lastly, assuming is true (the induction hypothesis) we have , as desired.      Determinant of identity matrices   Let be the identity matrix. Then .    This follows directly from since the diagonal entries of are all ones.      Expansion along rows and columns   Morally speaking, we should give some examples of higher-dimensional determinants, but we first introduce some theory that affords us more leeway in our computations.    Minors and expansions along rows\/columns  minor of matrix  expansion along row\/column    the -th minor of a matrix    Given an matrix , for any pair the -th minor of is defined as .  For any the expression is called the expansion along the -th row of .  For any , the expression is called the expansion along the -th column of .     Expansion along rows   Let . For any we have . In other words, we can compute by expanding along any row of .    The proof is by induction on the size of the matrix.   Base step:  For there is nothing to prove. Given expanding along either row yields , as one easily verifies.    Induction step  Assume the claim is true of any matrix. Given we have . Expanding along the -th row of for any , on the other hand, we get . To show these two expressions are equal we use the induction hypothesis to compute each by expanding along its -th row: . The matrix is the result of first deleting row 1 and column from , and then deleting row and column of the resulting matrix. To deal with such iterated submatrices, we make some simple observations relating the rows and columns of and with those of .   The -th row of corresponds to the -th row of , and the first row of corresponds to the first row of .    If , then the -th column of corresponds to the -th column of ; if , then the -th column of corresponds to the -th column of .    If , then the -th column of corresponds to the -th column of ; if , then the -th column of corresponds to the -th column of .   From these observations we derive the following table of formulas: . We now begin to unpack : . This completes the induction step, and thus the proof is finished.     Surprisingly, it turns out that we can compute the determinant of a matrix by expanding along any column ( ). This is a consequence of the following theorem, which is useful in its own right. The proof below is taken from Robert Beezer's A First Course in Linear Algebra . (See Theorem DT .) It uses induction and a wonderful trick starting from the observation that for any .   Determinant and transposition   Let be an matrix. Then .    The proof is by induction on . The base case ( ) is trivial since for any matrix .  For induction we assume that for all we have for any matrix. Suppose is an matrix. We have . This completes the proof by induction. (Note how in the second equality in the chain above we compute in the -th term of by expanding along the -th row of . A similar observation applies to the penultimate equality.)     Expansion along columns   Let . For any we have . In other words, we can compute by expanding along any row of .    For any , we have .      Compute for .    First we compute by expanding along the second row. The only nonzero term of this expansion is the last one, yielding . We have . To compute its determinant we expand along its third column: We conclude that .     Matrix of signs   When expanding along a row or column, it is easy to get tripped up by the sign in front of the -th coefficient. A matrix of signs is a sort of mnemonic device to help you in this regard. It is easily generated by observing that the sign in front of the -th entry is always a (since ), and that any horizontal or vertical step within the matrix is accompanied by a change of sign. As an example, for we have the following matrix of signs: .     Video example: determinant   Video: determinant  Video: determinant     The freedom to compute the determinant by expanding along any row or column gives rise to the following intuitive property.   Zero rows\/columns, swapping rows\/columns, identical rows\/columns   Let be an matrix.   If has a zero row or zero column, then     Assume . Let be the matrix obtained by swapping two rows (or two columns) of . Then .    Assume . If has two identical rows or two identical columns, then .       The first statement is obvious since according to and we may compute the determinant by expanding along the zero row or zero column in question.  The third statement follows from the second. Indeed, if has two identical rows or columns, then the matrix obtained from by swapping the rows (or columns) in question is itself. Thus by the second statement, and we conclude that .  It remains only to show the second statement. We prove only the statement regarding swapping rows; the corresponding statement about columns follows from . The proof is by induction.   Base step:  Let . Then , and .    Induction step  We assume by induction that the result holds for any matrices, , and show the same is true for any matrix.  Let be an matrix, and suppose is the result of swapping the -th and -th rows of . We compute the determinants of and by expanding along the -th row, where and . This is possible since .  Moving along the -th row, notice that each submatrix is the result of swapping the two rows of that originally corresponded to the -th and -th rows of . Since these submatrices are of dimension , we have by induction. Lastly, since the -th rows of and are the same we have .     As a further consequence of and , we can derive the adjoint matrix formula .   Adjoint matrix  adjoint matrix    adjoint of a square matrix    Let be an matrix. The adjoint matrix of , denoted , is the matrix whose -th entry is defined as follows: .      Be careful of the order reversal in this definition. The -th entry of is equal to plus or minus the -th minor of . Let's see this in action for some small matrices.  For we have .  For we have .     Adjoint matrix formula   Given an matrix , we have . As a consequence, if , then is invertible and .    First observe that the second statement regarding invertibility follows directly from , since in this case setting we have .  Thus it suffices to prove . To do so, we must show that .   Case:  In this case we have . A similar argument shows that , though in this case we use expansion along a column.    Case:  When we have , where is the matrix obtained by replacing the -th row of with a copy of its -th row. Since has two identical rows implies , as desired. Once again, a similar argument using expansion along a column shows that .       Use the adjoint matrix formula to compute , where .    First compute by expanding along the third row: . Next, compute . Then we have .      Before you get too excited about the adjoint matrix formula, you should know that as grows, this procedure becomes much more costly in terms of number of arithmetic operations involved than our inverse algorithm based on Gauss-Jordan elimination. You get a sense of this already from the previous example. In general, the Gauss-Jordan inverse algorithm is the way to go.      Row operations and determinant  Suppose the square matrix can be row reduced to via sequence of row operations. In general we do not have , but we can compute from by keeping track of which operations are used.   Row operations and determinant   Let be an matrix. Using the notation from we have:              .   In particular, taking , we have .    The first statement follows easily by computing by expanding along the -th row. The second statement is in fact a rephrasing of the second statement of . It remains to prove the third statement.  Let , and set . Then is identical to with the exception of the -th row, whose -th entry is . It follows that , where is the matrix obtained by replacing the -th row of with a row identical with its -th row. By we conclude , and thus , as desired.      In the language of row operations, translates as follows:   Scaling a row of a matrix by has the effect of scaling the determinant by .    Swapping two rows of a matrix changes the sign of the determinant.    Performing a row addition operation on a matrix has no effect on the determinant.        Column operations and the determinant   As shown in the determinant behaves in a similar manner with respect to elementary column operations : , scaling a column by a nonzero constant scales the determinant by , swapping columns multiplies the determinant by , adding a multiple of one column to another leaves the determinant unchanged.     Determinant and products of elementary matrices   Let be an matrix, and suppose we have for some collection of elementary matrices . Then .    This is an easy proof by induction on the number of elementary matrices involved, the base case ( ) of which is covered by .     has both computational and theoretical applications.  On the computational side, it suggests an alternative method of computing : first row reduce to a simpler matrix , making sure to keep track of the operations you use; set up an equation as in representing the row reduction; then solve the corresponding equation for in terms of and the .   Determinant via row reduction   Suppose the matrix can be row reduced to by perfomring the following sequence of row operations:   First swap the second and third rows.    Then scale the first row by     Then replace the second row with the second row plus the first row.   Compute .    In terms of elementary matrices we have and hence We conclude that .    On the theoretical side, implies both and .   Determinant and invertibility   Let be an matrix. Then is invertible if and only if .    The implication was proved in .  For the other direction, assume is invertible. Then implies is a product of elementary matrices: . Then implies . Since for all ( ), we conclude .     Determinant is multiplicative   Let and be matrices. Then .    We consider two cases based on the invertibility of and\/or .   or is not invertible  In this case is not invertible ( ), and hence by . By the same reasoning we must have or . It follows that in this case.    and both invertible  In this case we can write for some elementary matrices and ( ). Then .     We end this section (and chapter) by adding the results of and one of our homework exercises to our invertibility theorem.   Invertibility theorem (extended cut)   Let be an matrix. The following statements are equivalent.     is invertible.    The matrix equation has a unique solution for any column vector .    The matrix equation has a solution for any column vector .    The matrix equation has a unique solution : namely, .     is row equivalent to , the identity matrix.     is a product of elementary matrices.     .         WeBWork Exercises    Use the appropriate property of determinants to find  Do not evaluate the determinants. Answer:               Consider the following Gauss elimination:   What is the determinant of ?                Find such that the following matrix is singular.                If and are matrices, , , then   ,   ,   ,   ,   .                                  Written Exercises   Let    Compute by expanding along the second row.    Compute by expanding along the third column.       Row\/column expansion   Compute the determinant of the given matrix. Indicate which row or column you expand along.                    Determinant and invertibility   For each matrix, find all values of (if any) making the matrix invertible. Use the determinant.                         Adjoint matrix formula  Use the adjoint matrix formula to compute the inverse of each matrix.              Let . Show without computing the determinant directly. In other words, use a row reduction technique or .    Let be an matrix, and let be a scalar. State and prove a formula relating with .    Assume is a matrix satisfying . Compute the determinant of the given matrix.                          Let and be matrices, and suppose is invertible. Prove the following:     .     .      Assume the square matrix satisfies . Show that .    Prove that a square matrix is invertible if and only if is invertible.    Adjoint matrix   The following exercises explore the relationship between a square matrix and its adjoint .    Give an explicit example of a square matrix satisfying and .  In other words, show that it is possible for a nonzero matrix to have a zero adjoint matrix.    Let be an matrix. Prove: .    Prove: is invertible if and only if is invertible.    Assume is invertible. Prove: .     In our proof of statement (2) of we only showed that if is a square matrix with two identical rows, then . Assuming this, show that the same is true if has two identical columns.    State and prove an analogue to that describes how the corresponding column operations (i.e., scale a column by , swap two columns, column addition) affect the determinant of a matrix. (See ).   Express each of these types of column operations as multiplication on the right by an elementary matrix.    Let be the matrix with along the diagonal and 's elsewhere: i.e., . State and prove a formula for . (Your formula will involve , , and .)  Look at the and cases first. To prove the formula in the general case you may want to make use of row reduction and .    Given scalars the Vandermonde matrix is defined as . In other words, we have Prove: .     "
},
{
  "id": "d_minors",
  "level": "2",
  "url": "s_det.html#d_minors",
  "type": "Definition",
  "number": "2.5.1",
  "title": "Submatrix notation.",
  "body": " Submatrix notation  submatrix    submatrix of    Let be an matrix with . Given , the submatrix of obtained by removing the -th row and -th column of is denoted .   "
},
{
  "id": "rm_minors",
  "level": "2",
  "url": "s_det.html#rm_minors",
  "type": "Warning",
  "number": "2.5.2",
  "title": "",
  "body": "  Do not conflate the submatrix notation with matrix entry notation : the former returns the submatrix of obtained by deleting the -th row and -th column; the latter returns the -th entry of .   "
},
{
  "id": "d_det",
  "level": "2",
  "url": "s_det.html#d_det",
  "type": "Definition",
  "number": "2.5.3",
  "title": "The determinant.",
  "body": " The determinant  determinant    determinant of    Let . The determinant is defined as follows:   Base case:  When we have and we define .    Recursive case:  When we define .      "
},
{
  "id": "rm_det_small_cases",
  "level": "2",
  "url": "s_det.html#rm_det_small_cases",
  "type": "Remark",
  "number": "2.5.4",
  "title": "Small <span class=\"process-math\">\\(n\\)<\/span> cases.",
  "body": " Small cases   Let's look at determinant formulas for the cases. You may remember the formula for matrices from ; we will make the connection more explicit in .  Given , we have . The formula for the case is simple enough to serve as a second base case , allowing us to end the recursive process of computing a general matrix once we get to expressions involving matrices.  Given , we have .   "
},
{
  "id": "th_det_triangular",
  "level": "2",
  "url": "s_det.html#th_det_triangular",
  "type": "Theorem",
  "number": "2.5.5",
  "title": "Determinant of triangular matrices.",
  "body": " Determinant of triangular matrices   Let be triangular (upper, lower, or diagonal). Then . In other words, the determinant of a triangular matrix is the product of its diagonal entries.    We only give the proof for lower triangular matrices; the proof in the upper triangular case is nearly identical.  For any let denote the proposition: The determinant of any lower triangular matrix is the product of its diagonal entries . We prove by induction that is true for all .   Base step: show is true  In this case , and is indeed the product of the diagonal entries of .    Induction step: show for all  Let be a lower triangular matrix. Then for all , and hence the determinant of is given by . Claim: is lower triangular. Indeed, first observe that we have for all ; by deleting the first row and first column we effectively bump each index up by one. Since is lower triangular we have for all , and hence also for all , proving the claim.  Lastly, assuming is true (the induction hypothesis) we have , as desired.    "
},
{
  "id": "cor_det_identity",
  "level": "2",
  "url": "s_det.html#cor_det_identity",
  "type": "Corollary",
  "number": "2.5.6",
  "title": "Determinant of identity matrices.",
  "body": " Determinant of identity matrices   Let be the identity matrix. Then .    This follows directly from since the diagonal entries of are all ones.   "
},
{
  "id": "d_minors_expansions",
  "level": "2",
  "url": "s_det.html#d_minors_expansions",
  "type": "Definition",
  "number": "2.5.7",
  "title": "Minors and expansions along rows\/columns.",
  "body": " Minors and expansions along rows\/columns  minor of matrix  expansion along row\/column    the -th minor of a matrix    Given an matrix , for any pair the -th minor of is defined as .  For any the expression is called the expansion along the -th row of .  For any , the expression is called the expansion along the -th column of .   "
},
{
  "id": "th_expansion_row",
  "level": "2",
  "url": "s_det.html#th_expansion_row",
  "type": "Theorem",
  "number": "2.5.8",
  "title": "Expansion along rows.",
  "body": " Expansion along rows   Let . For any we have . In other words, we can compute by expanding along any row of .    The proof is by induction on the size of the matrix.   Base step:  For there is nothing to prove. Given expanding along either row yields , as one easily verifies.    Induction step  Assume the claim is true of any matrix. Given we have . Expanding along the -th row of for any , on the other hand, we get . To show these two expressions are equal we use the induction hypothesis to compute each by expanding along its -th row: . The matrix is the result of first deleting row 1 and column from , and then deleting row and column of the resulting matrix. To deal with such iterated submatrices, we make some simple observations relating the rows and columns of and with those of .   The -th row of corresponds to the -th row of , and the first row of corresponds to the first row of .    If , then the -th column of corresponds to the -th column of ; if , then the -th column of corresponds to the -th column of .    If , then the -th column of corresponds to the -th column of ; if , then the -th column of corresponds to the -th column of .   From these observations we derive the following table of formulas: . We now begin to unpack : . This completes the induction step, and thus the proof is finished.    "
},
{
  "id": "th_det_transpose",
  "level": "2",
  "url": "s_det.html#th_det_transpose",
  "type": "Theorem",
  "number": "2.5.9",
  "title": "Determinant and transposition.",
  "body": " Determinant and transposition   Let be an matrix. Then .    The proof is by induction on . The base case ( ) is trivial since for any matrix .  For induction we assume that for all we have for any matrix. Suppose is an matrix. We have . This completes the proof by induction. (Note how in the second equality in the chain above we compute in the -th term of by expanding along the -th row of . A similar observation applies to the penultimate equality.)   "
},
{
  "id": "cor_expansion_columns",
  "level": "2",
  "url": "s_det.html#cor_expansion_columns",
  "type": "Corollary",
  "number": "2.5.10",
  "title": "Expansion along columns.",
  "body": " Expansion along columns   Let . For any we have . In other words, we can compute by expanding along any row of .    For any , we have .   "
},
{
  "id": "ss_expansion_rows_columns-8",
  "level": "2",
  "url": "s_det.html#ss_expansion_rows_columns-8",
  "type": "Example",
  "number": "2.5.11",
  "title": "",
  "body": "  Compute for .    First we compute by expanding along the second row. The only nonzero term of this expansion is the last one, yielding . We have . To compute its determinant we expand along its third column: We conclude that .   "
},
{
  "id": "rm_sign_matrix",
  "level": "2",
  "url": "s_det.html#rm_sign_matrix",
  "type": "Remark",
  "number": "2.5.12",
  "title": "Matrix of signs.",
  "body": " Matrix of signs   When expanding along a row or column, it is easy to get tripped up by the sign in front of the -th coefficient. A matrix of signs is a sort of mnemonic device to help you in this regard. It is easily generated by observing that the sign in front of the -th entry is always a (since ), and that any horizontal or vertical step within the matrix is accompanied by a change of sign. As an example, for we have the following matrix of signs: .   "
},
{
  "id": "fig_vid_det",
  "level": "2",
  "url": "s_det.html#fig_vid_det",
  "type": "Figure",
  "number": "2.5.13",
  "title": "Video: determinant",
  "body": " Video: determinant  Video: determinant   "
},
{
  "id": "th_det_zero_repeated_row",
  "level": "2",
  "url": "s_det.html#th_det_zero_repeated_row",
  "type": "Theorem",
  "number": "2.5.14",
  "title": "Zero rows\/columns, swapping rows\/columns, identical rows\/columns.",
  "body": " Zero rows\/columns, swapping rows\/columns, identical rows\/columns   Let be an matrix.   If has a zero row or zero column, then     Assume . Let be the matrix obtained by swapping two rows (or two columns) of . Then .    Assume . If has two identical rows or two identical columns, then .       The first statement is obvious since according to and we may compute the determinant by expanding along the zero row or zero column in question.  The third statement follows from the second. Indeed, if has two identical rows or columns, then the matrix obtained from by swapping the rows (or columns) in question is itself. Thus by the second statement, and we conclude that .  It remains only to show the second statement. We prove only the statement regarding swapping rows; the corresponding statement about columns follows from . The proof is by induction.   Base step:  Let . Then , and .    Induction step  We assume by induction that the result holds for any matrices, , and show the same is true for any matrix.  Let be an matrix, and suppose is the result of swapping the -th and -th rows of . We compute the determinants of and by expanding along the -th row, where and . This is possible since .  Moving along the -th row, notice that each submatrix is the result of swapping the two rows of that originally corresponded to the -th and -th rows of . Since these submatrices are of dimension , we have by induction. Lastly, since the -th rows of and are the same we have .    "
},
{
  "id": "d_adjoint",
  "level": "2",
  "url": "s_det.html#d_adjoint",
  "type": "Definition",
  "number": "2.5.15",
  "title": "Adjoint matrix.",
  "body": " Adjoint matrix  adjoint matrix    adjoint of a square matrix    Let be an matrix. The adjoint matrix of , denoted , is the matrix whose -th entry is defined as follows: .   "
},
{
  "id": "rm_adjoint",
  "level": "2",
  "url": "s_det.html#rm_adjoint",
  "type": "Remark",
  "number": "2.5.16",
  "title": "",
  "body": "  Be careful of the order reversal in this definition. The -th entry of is equal to plus or minus the -th minor of . Let's see this in action for some small matrices.  For we have .  For we have .   "
},
{
  "id": "th_adjoint",
  "level": "2",
  "url": "s_det.html#th_adjoint",
  "type": "Theorem",
  "number": "2.5.17",
  "title": "Adjoint matrix formula.",
  "body": " Adjoint matrix formula   Given an matrix , we have . As a consequence, if , then is invertible and .    First observe that the second statement regarding invertibility follows directly from , since in this case setting we have .  Thus it suffices to prove . To do so, we must show that .   Case:  In this case we have . A similar argument shows that , though in this case we use expansion along a column.    Case:  When we have , where is the matrix obtained by replacing the -th row of with a copy of its -th row. Since has two identical rows implies , as desired. Once again, a similar argument using expansion along a column shows that .    "
},
{
  "id": "ss_expansion_rows_columns-17",
  "level": "2",
  "url": "s_det.html#ss_expansion_rows_columns-17",
  "type": "Example",
  "number": "2.5.18",
  "title": "",
  "body": "  Use the adjoint matrix formula to compute , where .    First compute by expanding along the third row: . Next, compute . Then we have .   "
},
{
  "id": "rm_adjoint_form",
  "level": "2",
  "url": "s_det.html#rm_adjoint_form",
  "type": "Remark",
  "number": "2.5.19",
  "title": "",
  "body": "  Before you get too excited about the adjoint matrix formula, you should know that as grows, this procedure becomes much more costly in terms of number of arithmetic operations involved than our inverse algorithm based on Gauss-Jordan elimination. You get a sense of this already from the previous example. In general, the Gauss-Jordan inverse algorithm is the way to go.   "
},
{
  "id": "th_det_row_ops",
  "level": "2",
  "url": "s_det.html#th_det_row_ops",
  "type": "Theorem",
  "number": "2.5.20",
  "title": "Row operations and determinant.",
  "body": " Row operations and determinant   Let be an matrix. Using the notation from we have:              .   In particular, taking , we have .    The first statement follows easily by computing by expanding along the -th row. The second statement is in fact a rephrasing of the second statement of . It remains to prove the third statement.  Let , and set . Then is identical to with the exception of the -th row, whose -th entry is . It follows that , where is the matrix obtained by replacing the -th row of with a row identical with its -th row. By we conclude , and thus , as desired.   "
},
{
  "id": "rm_det_row_ops",
  "level": "2",
  "url": "s_det.html#rm_det_row_ops",
  "type": "Remark",
  "number": "2.5.21",
  "title": "",
  "body": "  In the language of row operations, translates as follows:   Scaling a row of a matrix by has the effect of scaling the determinant by .    Swapping two rows of a matrix changes the sign of the determinant.    Performing a row addition operation on a matrix has no effect on the determinant.      "
},
{
  "id": "rm_det_col_ops",
  "level": "2",
  "url": "s_det.html#rm_det_col_ops",
  "type": "Remark",
  "number": "2.5.22",
  "title": "Column operations and the determinant.",
  "body": " Column operations and the determinant   As shown in the determinant behaves in a similar manner with respect to elementary column operations : , scaling a column by a nonzero constant scales the determinant by , swapping columns multiplies the determinant by , adding a multiple of one column to another leaves the determinant unchanged.   "
},
{
  "id": "cor_det_prod_elem",
  "level": "2",
  "url": "s_det.html#cor_det_prod_elem",
  "type": "Corollary",
  "number": "2.5.23",
  "title": "Determinant and products of elementary matrices.",
  "body": " Determinant and products of elementary matrices   Let be an matrix, and suppose we have for some collection of elementary matrices . Then .    This is an easy proof by induction on the number of elementary matrices involved, the base case ( ) of which is covered by .   "
},
{
  "id": "ss_det_row_ops-9",
  "level": "2",
  "url": "s_det.html#ss_det_row_ops-9",
  "type": "Example",
  "number": "2.5.24",
  "title": "Determinant via row reduction.",
  "body": " Determinant via row reduction   Suppose the matrix can be row reduced to by perfomring the following sequence of row operations:   First swap the second and third rows.    Then scale the first row by     Then replace the second row with the second row plus the first row.   Compute .    In terms of elementary matrices we have and hence We conclude that .   "
},
{
  "id": "th_inv_iff_det",
  "level": "2",
  "url": "s_det.html#th_inv_iff_det",
  "type": "Theorem",
  "number": "2.5.25",
  "title": "Determinant and invertibility.",
  "body": " Determinant and invertibility   Let be an matrix. Then is invertible if and only if .    The implication was proved in .  For the other direction, assume is invertible. Then implies is a product of elementary matrices: . Then implies . Since for all ( ), we conclude .   "
},
{
  "id": "th_det_mult",
  "level": "2",
  "url": "s_det.html#th_det_mult",
  "type": "Theorem",
  "number": "2.5.26",
  "title": "Determinant is multiplicative.",
  "body": " Determinant is multiplicative   Let and be matrices. Then .    We consider two cases based on the invertibility of and\/or .   or is not invertible  In this case is not invertible ( ), and hence by . By the same reasoning we must have or . It follows that in this case.    and both invertible  In this case we can write for some elementary matrices and ( ). Then .    "
},
{
  "id": "th_invertibility_expanded",
  "level": "2",
  "url": "s_det.html#th_invertibility_expanded",
  "type": "Theorem",
  "number": "2.5.27",
  "title": "Invertibility theorem (extended cut).",
  "body": " Invertibility theorem (extended cut)   Let be an matrix. The following statements are equivalent.     is invertible.    The matrix equation has a unique solution for any column vector .    The matrix equation has a solution for any column vector .    The matrix equation has a unique solution : namely, .     is row equivalent to , the identity matrix.     is a product of elementary matrices.     .     "
},
{
  "id": "s_det_ex-1-2",
  "level": "2",
  "url": "s_det.html#s_det_ex-1-2",
  "type": "Exercise",
  "number": "2.5.4.1",
  "title": "",
  "body": "  Use the appropriate property of determinants to find  Do not evaluate the determinants. Answer:            "
},
{
  "id": "s_det_ex-1-3",
  "level": "2",
  "url": "s_det.html#s_det_ex-1-3",
  "type": "Exercise",
  "number": "2.5.4.2",
  "title": "",
  "body": "  Consider the following Gauss elimination:   What is the determinant of ?             "
},
{
  "id": "s_det_ex-1-4",
  "level": "2",
  "url": "s_det.html#s_det_ex-1-4",
  "type": "Exercise",
  "number": "2.5.4.3",
  "title": "",
  "body": "  Find such that the following matrix is singular.             "
},
{
  "id": "s_det_ex-1-5",
  "level": "2",
  "url": "s_det.html#s_det_ex-1-5",
  "type": "Exercise",
  "number": "2.5.4.4",
  "title": "",
  "body": "  If and are matrices, , , then   ,   ,   ,   ,   .                               "
},
{
  "id": "s_det_ex-2-2",
  "level": "2",
  "url": "s_det.html#s_det_ex-2-2",
  "type": "Exercise",
  "number": "2.5.4.5",
  "title": "",
  "body": " Let    Compute by expanding along the second row.    Compute by expanding along the third column.     "
},
{
  "id": "s_det_ex-2-3-3",
  "level": "2",
  "url": "s_det.html#s_det_ex-2-3-3",
  "type": "Exercise",
  "number": "2.5.4.6",
  "title": "",
  "body": "    "
},
{
  "id": "s_det_ex-2-3-4",
  "level": "2",
  "url": "s_det.html#s_det_ex-2-3-4",
  "type": "Exercise",
  "number": "2.5.4.7",
  "title": "",
  "body": "    "
},
{
  "id": "s_det_ex-2-3-5",
  "level": "2",
  "url": "s_det.html#s_det_ex-2-3-5",
  "type": "Exercise",
  "number": "2.5.4.8",
  "title": "",
  "body": "    "
},
{
  "id": "s_det_ex-2-4-3",
  "level": "2",
  "url": "s_det.html#s_det_ex-2-4-3",
  "type": "Exercise",
  "number": "2.5.4.9",
  "title": "",
  "body": "    "
},
{
  "id": "s_det_ex-2-4-4",
  "level": "2",
  "url": "s_det.html#s_det_ex-2-4-4",
  "type": "Exercise",
  "number": "2.5.4.10",
  "title": "",
  "body": "    "
},
{
  "id": "s_det_ex-2-4-5",
  "level": "2",
  "url": "s_det.html#s_det_ex-2-4-5",
  "type": "Exercise",
  "number": "2.5.4.11",
  "title": "",
  "body": "    "
},
{
  "id": "s_det_ex-2-4-6",
  "level": "2",
  "url": "s_det.html#s_det_ex-2-4-6",
  "type": "Exercise",
  "number": "2.5.4.12",
  "title": "",
  "body": "    "
},
{
  "id": "s_det_ex-2-5-3",
  "level": "2",
  "url": "s_det.html#s_det_ex-2-5-3",
  "type": "Exercise",
  "number": "2.5.4.13",
  "title": "",
  "body": "    "
},
{
  "id": "s_det_ex-2-5-4",
  "level": "2",
  "url": "s_det.html#s_det_ex-2-5-4",
  "type": "Exercise",
  "number": "2.5.4.14",
  "title": "",
  "body": "    "
},
{
  "id": "s_det_ex-2-6",
  "level": "2",
  "url": "s_det.html#s_det_ex-2-6",
  "type": "Exercise",
  "number": "2.5.4.15",
  "title": "",
  "body": " Let . Show without computing the determinant directly. In other words, use a row reduction technique or .  "
},
{
  "id": "s_det_ex-2-7",
  "level": "2",
  "url": "s_det.html#s_det_ex-2-7",
  "type": "Exercise",
  "number": "2.5.4.16",
  "title": "",
  "body": " Let be an matrix, and let be a scalar. State and prove a formula relating with .  "
},
{
  "id": "s_det_ex-2-8",
  "level": "2",
  "url": "s_det.html#s_det_ex-2-8",
  "type": "Exercise",
  "number": "2.5.4.17",
  "title": "",
  "body": " Assume is a matrix satisfying . Compute the determinant of the given matrix.                        "
},
{
  "id": "s_det_ex-2-9",
  "level": "2",
  "url": "s_det.html#s_det_ex-2-9",
  "type": "Exercise",
  "number": "2.5.4.18",
  "title": "",
  "body": " Let and be matrices, and suppose is invertible. Prove the following:     .     .    "
},
{
  "id": "s_det_ex-2-10",
  "level": "2",
  "url": "s_det.html#s_det_ex-2-10",
  "type": "Exercise",
  "number": "2.5.4.19",
  "title": "",
  "body": " Assume the square matrix satisfies . Show that .  "
},
{
  "id": "s_det_ex-2-11",
  "level": "2",
  "url": "s_det.html#s_det_ex-2-11",
  "type": "Exercise",
  "number": "2.5.4.20",
  "title": "",
  "body": " Prove that a square matrix is invertible if and only if is invertible.  "
},
{
  "id": "s_det_ex-2-12-3",
  "level": "2",
  "url": "s_det.html#s_det_ex-2-12-3",
  "type": "Exercise",
  "number": "2.5.4.21",
  "title": "",
  "body": " Give an explicit example of a square matrix satisfying and .  In other words, show that it is possible for a nonzero matrix to have a zero adjoint matrix.  "
},
{
  "id": "s_det_ex-2-12-4",
  "level": "2",
  "url": "s_det.html#s_det_ex-2-12-4",
  "type": "Exercise",
  "number": "2.5.4.22",
  "title": "",
  "body": " Let be an matrix. Prove: .  "
},
{
  "id": "s_det_ex-2-12-5",
  "level": "2",
  "url": "s_det.html#s_det_ex-2-12-5",
  "type": "Exercise",
  "number": "2.5.4.23",
  "title": "",
  "body": " Prove: is invertible if and only if is invertible.  "
},
{
  "id": "s_det_ex-2-12-6",
  "level": "2",
  "url": "s_det.html#s_det_ex-2-12-6",
  "type": "Exercise",
  "number": "2.5.4.24",
  "title": "",
  "body": " Assume is invertible. Prove: .  "
},
{
  "id": "s_det_ex-2-13",
  "level": "2",
  "url": "s_det.html#s_det_ex-2-13",
  "type": "Exercise",
  "number": "2.5.4.25",
  "title": "",
  "body": " In our proof of statement (2) of we only showed that if is a square matrix with two identical rows, then . Assuming this, show that the same is true if has two identical columns.  "
},
{
  "id": "ex_det_col_ops",
  "level": "2",
  "url": "s_det.html#ex_det_col_ops",
  "type": "Exercise",
  "number": "2.5.4.26",
  "title": "",
  "body": " State and prove an analogue to that describes how the corresponding column operations (i.e., scale a column by , swap two columns, column addition) affect the determinant of a matrix. (See ).   Express each of these types of column operations as multiplication on the right by an elementary matrix.  "
},
{
  "id": "s_det_ex-2-15",
  "level": "2",
  "url": "s_det.html#s_det_ex-2-15",
  "type": "Exercise",
  "number": "2.5.4.27",
  "title": "",
  "body": " Let be the matrix with along the diagonal and 's elsewhere: i.e., . State and prove a formula for . (Your formula will involve , , and .)  Look at the and cases first. To prove the formula in the general case you may want to make use of row reduction and .  "
},
{
  "id": "s_det_ex-2-16",
  "level": "2",
  "url": "s_det.html#s_det_ex-2-16",
  "type": "Exercise",
  "number": "2.5.4.28",
  "title": "",
  "body": " Given scalars the Vandermonde matrix is defined as . In other words, we have Prove: .  "
},
{
  "id": "appendix-notation",
  "level": "1",
  "url": "appendix-notation.html",
  "type": "Appendix",
  "number": "A",
  "title": "Notation",
  "body": " Notation   "
},
{
  "id": "appendix-exercises",
  "level": "1",
  "url": "appendix-exercises.html",
  "type": "Appendix",
  "number": "B",
  "title": "Exercises",
  "body": " Exercises   "
},
{
  "id": "appendix-defs",
  "level": "1",
  "url": "appendix-defs.html",
  "type": "Appendix",
  "number": "C",
  "title": "Definitions",
  "body": " Definitions   "
},
{
  "id": "appendix-thms",
  "level": "1",
  "url": "appendix-thms.html",
  "type": "Appendix",
  "number": "D",
  "title": "Theory and procedures",
  "body": " Theory and procedures   "
},
{
  "id": "appendix-egs",
  "level": "1",
  "url": "appendix-egs.html",
  "type": "Appendix",
  "number": "E",
  "title": "Examples",
  "body": " Examples   "
},
{
  "id": "appendix-sage",
  "level": "1",
  "url": "appendix-sage.html",
  "type": "Appendix",
  "number": "F",
  "title": "Sage examples",
  "body": " Sage examples   "
},
{
  "id": "appendix-figures",
  "level": "1",
  "url": "appendix-figures.html",
  "type": "Appendix",
  "number": "G",
  "title": "Figures and video examples",
  "body": " Figures and video examples   "
},
{
  "id": "appendix-matnras",
  "level": "1",
  "url": "appendix-matnras.html",
  "type": "Appendix",
  "number": "H",
  "title": "Mantras and fiats",
  "body": " Mantras and fiats   "
},
{
  "id": "euc_vec_spaces-6-10",
  "level": "1",
  "url": "euc_vec_spaces-6-10.html",
  "type": "Index",
  "number": "",
  "title": "Index",
  "body": " Index   "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
