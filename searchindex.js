Search.setIndex({docnames:["README","api","index"],envversion:{"sphinx.domains.c":2,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":3,"sphinx.domains.index":1,"sphinx.domains.javascript":2,"sphinx.domains.math":2,"sphinx.domains.python":2,"sphinx.domains.rst":2,"sphinx.domains.std":2,"sphinx.ext.intersphinx":1,sphinx:56},filenames:["README.md","api.rst","index.rst"],objects:{"legate.core.legion":{Acquire:[1,0,1,""],AffineTransform:[1,0,1,""],ArgumentMap:[1,0,1,""],Attach:[1,0,1,""],BufferBuilder:[1,0,1,""],Copy:[1,0,1,""],Detach:[1,0,1,""],Domain:[1,0,1,""],EqualPartition:[1,0,1,""],Fence:[1,0,1,""],FieldID:[1,0,1,""],FieldSpace:[1,0,1,""],Fill:[1,0,1,""],Future:[1,0,1,""],FutureMap:[1,0,1,""],IndexCopy:[1,0,1,""],IndexFill:[1,0,1,""],IndexPartition:[1,0,1,""],IndexSpace:[1,0,1,""],IndexTask:[1,0,1,""],InlineMapping:[1,0,1,""],OutputRegion:[1,0,1,""],Partition:[1,0,1,""],PartitionByImage:[1,0,1,""],PartitionByImageRange:[1,0,1,""],PartitionByRestriction:[1,0,1,""],PartitionByWeights:[1,0,1,""],PartitionFunctor:[1,0,1,""],PhysicalRegion:[1,0,1,""],Point:[1,0,1,""],Rect:[1,0,1,""],Region:[1,0,1,""],Release:[1,0,1,""],Task:[1,0,1,""],Transform:[1,0,1,""]},"legate.core.legion.AffineTransform":{apply:[1,1,1,""],compose:[1,1,1,""]},"legate.core.legion.ArgumentMap":{destroy:[1,1,1,""],set_future:[1,1,1,""],set_point:[1,1,1,""]},"legate.core.legion.Attach":{set_mapped:[1,1,1,""],set_restricted:[1,1,1,""]},"legate.core.legion.Copy":{add_dst_indirect_requirement:[1,1,1,""],add_dst_requirement:[1,1,1,""],add_src_indirect_requirement:[1,1,1,""],add_src_requirement:[1,1,1,""],set_point:[1,1,1,""],set_possible_dst_indirect_out_of_range:[1,1,1,""],set_possible_src_indirect_out_of_range:[1,1,1,""],set_sharding_space:[1,1,1,""]},"legate.core.legion.Detach":{launch:[1,1,1,""]},"legate.core.legion.EqualPartition":{partition:[1,1,1,""]},"legate.core.legion.FieldID":{destroy:[1,1,1,""]},"legate.core.legion.FieldSpace":{allocate_field:[1,1,1,""],allocate_field_ctype:[1,1,1,""],allocate_field_dtype:[1,1,1,""],allocate_field_from_future:[1,1,1,""],destroy:[1,1,1,""],destroy_field:[1,1,1,""],get_type:[1,1,1,""]},"legate.core.legion.Fill":{set_point:[1,1,1,""],set_sharding_space:[1,1,1,""]},"legate.core.legion.Future":{destroy:[1,1,1,""],get_buffer:[1,1,1,""],get_size:[1,1,1,""],get_string:[1,1,1,""],is_ready:[1,1,1,""],set_value:[1,1,1,""],wait:[1,1,1,""]},"legate.core.legion.FutureMap":{destroy:[1,1,1,""],from_list:[1,1,1,""],get_future:[1,1,1,""],reduce:[1,1,1,""],wait:[1,1,1,""]},"legate.core.legion.IndexCopy":{add_dst_indirect_requirement:[1,1,1,""],add_dst_requirement:[1,1,1,""],add_src_indirect_requirement:[1,1,1,""],add_src_requirement:[1,1,1,""],set_possible_dst_indirect_out_of_range:[1,1,1,""],set_possible_src_indirect_out_of_range:[1,1,1,""],set_sharding_space:[1,1,1,""]},"legate.core.legion.IndexFill":{set_sharding_space:[1,1,1,""]},"legate.core.legion.IndexPartition":{destroy:[1,1,1,""],get_child:[1,1,1,""],get_root:[1,1,1,""]},"legate.core.legion.IndexSpace":{add_child:[1,1,1,""],destroy:[1,1,1,""],domain:[1,1,1,""],get_bounds:[1,1,1,""],get_dim:[1,1,1,""],get_root:[1,1,1,""],get_volume:[1,1,1,""]},"legate.core.legion.IndexTask":{add_future:[1,1,1,""],add_no_access_requirement:[1,1,1,""],add_output:[1,1,1,""],add_outputs:[1,1,1,""],add_point_future:[1,1,1,""],add_read_requirement:[1,1,1,""],add_read_write_requirement:[1,1,1,""],add_reduction_requirement:[1,1,1,""],add_write_requirement:[1,1,1,""],set_point:[1,1,1,""],set_sharding_space:[1,1,1,""]},"legate.core.legion.OutputRegion":{add_field:[1,1,1,""],destroy:[1,1,1,""],get_partition:[1,1,1,""],get_region:[1,1,1,""]},"legate.core.legion.Partition":{destroy:[1,1,1,""],get_child:[1,1,1,""],get_root:[1,1,1,""]},"legate.core.legion.PartitionByImage":{partition:[1,1,1,""]},"legate.core.legion.PartitionByImageRange":{partition:[1,1,1,""]},"legate.core.legion.PartitionByRestriction":{partition:[1,1,1,""]},"legate.core.legion.PartitionByWeights":{partition:[1,1,1,""]},"legate.core.legion.PartitionFunctor":{partition:[1,1,1,""]},"legate.core.legion.PhysicalRegion":{destroy:[1,1,1,""],is_mapped:[1,1,1,""],unmap:[1,1,1,""],wait_until_valid:[1,1,1,""]},"legate.core.legion.Region":{destroy:[1,1,1,""],get_child:[1,1,1,""],get_root:[1,1,1,""]},"legate.core.legion.Task":{add_future:[1,1,1,""],add_no_access_requirement:[1,1,1,""],add_read_requirement:[1,1,1,""],add_read_write_requirement:[1,1,1,""],add_reduction_requirement:[1,1,1,""],add_write_requirement:[1,1,1,""],set_local_function:[1,1,1,""],set_point:[1,1,1,""],set_sharding_space:[1,1,1,""]},"legate.core.legion.Transform":{apply:[1,1,1,""],compose:[1,1,1,""]}},objnames:{"0":["py","class","Python class"],"1":["py","method","Python method"]},objtypes:{"0":"py:class","1":"py:method"},terms:{"100":0,"100000":0,"15000":0,"4294967295":1,"abstract":0,"byte":1,"case":[0,1],"class":[0,1],"default":[0,1],"function":[0,1],"import":0,"int":1,"new":[0,1],"return":1,"short":0,"super":0,"true":[0,1],"try":[0,1],"while":0,For:[0,1],MBs:0,NOT:1,Not:0,The:[0,1],There:0,These:0,Use:2,Using:0,With:0,Yes:0,abid:0,abl:0,about:0,acceler:0,access:[0,1],achiev:0,acquir:2,across:0,actual:[0,1],adapt:0,add:[0,1],add_arg:1,add_child:1,add_dst_indirect_requir:1,add_dst_requir:1,add_field:1,add_futur:1,add_no_access_requir:1,add_output:1,add_point_futur:1,add_read_requir:1,add_read_write_requir:1,add_reduction_requir:1,add_src_indirect_requir:1,add_src_requir:1,add_write_requir:1,added:1,adding:[0,1],addit:[0,1],address:0,adopt:0,advanc:0,advers:0,affin:1,affinetransform:2,after:[0,1],afterward:0,again:0,against:0,aid:0,aim:0,alias:[0,1],align:0,all:[0,1],alloc:[0,1],allocate_field:1,allocate_field_ctyp:1,allocate_field_dtyp:1,allocate_field_from_futur:1,allow:[0,1],almost:0,alreadi:[0,1],also:[0,1],altern:0,although:[0,1],amort:0,amount:0,amper:0,analysi:0,analyt:0,ani:[0,1],anoth:1,anywher:0,apach:0,api:[0,2],appear:0,append:1,appli:1,applic:[0,1],approach:[0,1],approxim:0,arbitrari:[0,1],arch:0,architectur:0,arg:0,argmap:1,argument:1,argumentmap:2,ari:0,arm:0,arrai:[0,1],arrow:0,assign:0,assoc:1,associ:1,asynchron:0,attach:2,attempt:0,attribut:1,automat:0,avail:0,avoid:0,back:[0,1],backward:0,bare:0,base:[0,1],bear:[0,1],been:0,befor:[0,1],being:[0,1],believ:0,benefit:0,best:0,better:0,between:[0,1],bin:0,bind:0,block:[0,1],bool:1,both:[0,1],bottleneck:0,bound:[0,1],boundari:0,bridg:0,bring:0,browser:0,buffer:[0,1],bufferbuild:2,build:0,built:0,burden:0,call:[0,1],can:[0,1],cannot:0,canon:1,capabl:1,captur:0,carri:1,catastroph:0,cc_flag:0,certainli:1,challeng:0,chang:[0,1],channel:1,child:1,children:1,choic:0,chosen:0,clang:0,classmethod:1,client:0,cloud:0,cluster:0,code:[0,1],coher:[0,1],collect:1,collector:1,color:1,color_spac:1,column:1,come:[0,1],command:0,common:1,commun:0,compat:0,compil:0,complet:[0,1],complex:0,compon:0,compos:[0,1],composit:0,comput:[0,1],concept:0,concern:0,concurr:[0,1],conduit:0,configur:0,consequ:0,consid:1,consider:0,consist:1,consol:0,construct:[0,1],consum:0,contain:[0,1],context:1,continu:0,contribut:[0,1],control:[0,1],convert:1,cooper:0,coordin:1,copi:[0,2],correct:0,correspond:[0,1],cost:[0,1],cpu:0,crai:0,creat:[0,1],creation:1,critic:1,crux:0,ctype:1,cuda:0,current:[0,1],custom:[0,1],cxx:0,d_t:1,daint:0,darwin:0,data:[0,1],dataflow:0,dataflow_leg:0,datafram:1,dealloc:1,debug:2,decis:0,decoupl:0,defer:1,defin:1,degre:0,delet:1,democrat:0,dens:1,depend:[1,2],deploi:0,deprec:1,deriv:1,describ:[0,1],descript:1,design:0,desir:[0,1],desktop:0,destin:1,destroi:[0,1],destroy_field:1,detach:2,detect:0,determin:[0,1],determinist:1,develop:0,dgx:0,differ:[0,1],dilut:0,dim:1,dimens:1,dir:0,directli:1,directori:0,discard:1,discov:0,disjoint:1,dispatch:1,displai:0,distinct:0,distribut:2,doe:[1,2],doing:0,domain:[0,2],don:0,done:1,down:[0,1],dram:0,driver:0,drop:0,dtype:1,due:0,dure:[0,1],dynam:1,each:[0,1],eagerli:1,earlier:0,easi:0,easier:0,ecosystem:0,effect:0,effici:[0,1],either:[0,1],empti:1,enabl:[0,1],enclos:1,encode_dtyp:1,encourag:[0,1],end:0,endeavor:0,ensur:[0,1],enterpris:0,entir:0,environ:0,equal:1,equalpartit:2,equival:0,essenc:0,essenti:0,ethernet:0,even:0,event:0,event_graph_leg:0,ever:0,everyon:0,exactli:0,exampl:0,exce:0,excel:0,exchang:0,exclus:1,execut:[0,1],exist:[0,1],expect:1,experi:0,expert:0,explicit:1,explicitli:[0,1],extent:1,extern:1,extract:[0,1],eye:1,facil:0,fail:0,fairli:0,fall:0,fals:1,familiar:0,faq:2,farm:0,fast:0,fbmem:0,featur:[0,1],feel:0,fenc:2,few:0,fid:1,field:1,field_id:1,field_spac:1,fieldid:2,fieldspac:2,file:0,fill:2,find:[0,1],finish:[0,1],first:0,fit:0,flag:[0,1],flavor:0,flexflow:0,flush:1,follow:0,forc:1,foreign:0,form:1,fortran:0,forward:0,foundat:0,framebuff:0,from:[0,1],from_list:1,functor:1,fundament:0,futur:[0,2],future_map:1,futuremap:2,gap:0,garbag:1,gasnet:0,gather:1,gemini:0,gener:[0,1],get:0,get_bound:1,get_buff:1,get_child:1,get_dim:1,get_futur:1,get_legion_context:1,get_legion_runtim:1,get_partit:1,get_region:1,get_root:1,get_siz:1,get_str:1,get_typ:1,get_volum:1,github:0,given:0,global:[0,1],global_index:1,goal:0,gpu:0,graph:0,graphviz:0,greatli:0,grow:0,guarante:[0,1],had:0,handl:1,hard:0,hardwar:0,has:[0,1],has_spac:1,have:0,heavili:0,hello:0,help:[0,1],here:0,heurist:0,hide:0,hierarchi:0,high:0,higher:0,how:[1,2],howev:0,hpc:0,html:0,hundr:0,ibv:0,ideal:0,ident:0,identifi:1,illeg:[0,1],illustr:0,immedi:[0,1],implement:[0,1],implicit:0,implicitli:0,importantli:[0,1],improv:0,incent:0,includ:0,incomplet:1,incur:1,inde:0,independ:0,index:[0,1,2],index_partit:1,index_spac:1,indexcopi:2,indexfil:2,indexpartit:2,indexspac:2,indextask:2,indic:1,indirect:1,individu:1,infer:[0,1],infiniband:0,influenc:0,inform:0,infrequ:1,inher:0,initi:1,inlin:1,inlinemap:2,input:1,insert:[0,1],insid:1,instal:2,installdir:0,instanc:1,instead:0,insuffici:0,interact:0,interchang:0,interconnect:0,interest:0,interf:1,interfac:[0,1],interoper:0,interpret:[0,1],introduc:0,invest:0,investig:0,invoc:0,involv:0,is_map:1,is_rang:1,is_readi:1,issu:0,its:[0,1],itself:0,javascript:0,job:0,jsrun:0,just:0,keep:[0,1],kepler:0,kind:[0,1],know:0,known:1,languag:[0,1],laptop:0,larg:0,larger:0,latenc:0,later:0,launch:[1,2],launcher:[0,1],layout:1,lazili:1,ld_flag:0,ld_library_path:0,learn:0,least:0,leav:0,legate_prof:0,legate_task_progress:1,legatearrai:0,legatestor:0,legion:[0,1],legion_affine_transform_:1,legion_argument_map_t:1,legion_context_:1,legion_context_t:1,legion_domain_point_t:1,legion_domain_t:1,legion_field_id_t:1,legion_field_space_t:1,legion_future_map_t:1,legion_future_t:1,legion_index_partition_t:1,legion_index_space_t:1,legion_logical_partition_t:1,legion_logical_region_t:1,legion_partition_kind_t:1,legion_physical_region_t:1,legion_point_:1,legion_rect_:1,legion_runtime_t:1,legion_transform_:1,let:0,level:0,leverag:0,libpython3:0,librari:0,light:0,like:[0,1],line:0,linux:0,list:[0,1],load:[0,1],local:[0,1],locat:0,log:0,logic:[0,1],logicalregion:1,lower:1,lowest:0,lua:0,machin:0,made:0,mai:[0,1],main:0,maintain:0,major:1,make:[0,1],manag:[0,1],mani:[0,1],map:[0,1],mapper:[0,1],matrix:1,matter:0,maxwel:0,mean:[0,1],mechan:1,mechnan:1,meet:0,memori:[0,1],met:0,meta:0,method:[0,1],might:0,minimum:0,mix:0,mode:[0,1],model:0,moder:0,modif:0,more:0,most:[0,1],motiv:0,move:1,movement:0,mpirun:0,much:0,multi:0,multipl:1,must:[0,1],mutat:1,mute:0,mxn:1,my_python_program:0,name:[0,1],nascent:0,nativ:0,natur:[0,1],ndarrai:1,necessari:0,need:[0,1],network:0,never:[0,1],next:2,node:[0,1],non:[0,1],none:1,normal:0,note:[0,1],noth:0,novel:0,number:[0,1],numpi:[0,1],nvc:0,nvcc_flag:0,nvidia:0,object:[0,1],obtain:[0,1],off:0,offset:1,omnipath:0,one:[0,1],ones:0,onli:[0,1],onto:[0,1],open:0,oper:[0,1],option:[0,1],order:[0,1],origin:0,orthogon:0,other:[1,2],our:0,out:[0,1],outer:1,output:1,outputregion:2,outsid:1,outstand:1,over:[0,1],overhead:0,overview:2,own:[0,1],owner:1,ownership:1,pack_128bit_complex:1,pack_16bit_float:1,pack_16bit_int:1,pack_16bit_uint:1,pack_32bit_float:1,pack_32bit_int:1,pack_32bit_uint:1,pack_64bit_complex:1,pack_64bit_float:1,pack_64bit_int:1,pack_64bit_uint:1,pack_8bit_int:1,pack_8bit_uint:1,pack_accessor:1,pack_bool:1,pack_buff:1,pack_char:1,pack_dimens:1,pack_dtyp:1,pack_point:1,pack_str:1,pack_valu:1,packag:0,page:[0,2],panda:0,parallel:0,paramet:1,parent:1,part:1,part_id:1,particular:1,partit:[0,2],partitionbyimag:2,partitionbyimagerang:2,partitionbyrestrict:2,partitionbyweight:2,partitionfunctor:2,pascal:0,pass:[0,1],pdf:0,pend:1,per:[0,1],perform:[0,1],pessimist:0,physic:[0,1],physicalregion:2,piz:0,place:[0,1],placement:0,plan:0,pleas:0,point:2,pointer:[0,1],poor:0,popular:0,port:0,possibl:0,power:0,powerpc:0,precis:0,precondit:1,prefer:0,prefix:1,prescrib:0,prevent:1,primari:0,primarili:1,primit:0,principl:0,prior:0,privil:1,privileg:1,probabl:0,problem:0,process:[0,1],processor:0,produc:[0,1],product:[0,1],profil:2,program:[0,1],programm:0,proj:1,project:[0,1],promis:0,properti:[0,1],proportion:1,protocol:1,provid:[0,1],pull:0,pure:1,pursu:0,put:[0,1],pyarrow:0,python:[1,2],python_lib:0,python_root:0,python_version_major:0,rai:0,rang:1,raw:1,read:1,read_onli:1,readi:1,reason:0,recent:[0,1],reclaim:1,recommend:[0,1],record:1,rect:2,rectangl:1,recurs:1,redop:1,reduc:1,reduct:1,reductionop:1,refer:[0,2],reflect:[0,1],regardless:[0,1],region:[0,2],regoin:1,rel:1,relat:0,relationship:0,relax:1,releas:[0,2],reli:0,remap:1,rememb:0,reorder:[0,1],replac:[0,1],replic:[0,1],repositori:0,repres:1,represent:[0,1],request:[0,1],requir:[0,1],resolv:1,resourc:[0,1],respect:[0,1],respons:0,restrict:1,result:[0,1],reus:0,robust:0,roc:0,root:1,roughli:1,row:1,row_major:1,run:[0,1],runtim:[0,1],said:0,same:0,satisfi:0,scalabl:1,scale:0,scatter:1,scientist:0,scope:[0,1],script:0,search:[0,2],section:0,see:0,select:2,semant:0,sequenti:0,serv:1,set:[0,1],set_bound:1,set_futur:1,set_local_funct:1,set_map:1,set_point:1,set_possible_dst_indirect_out_of_rang:1,set_possible_src_indirect_out_of_rang:1,set_restrict:1,set_sharding_spac:1,set_valu:1,setup:0,sever:0,shard:1,share:0,shift:0,should:[0,1],shuffl:0,signific:0,significantli:0,similar:0,simpl:0,simpli:[0,1],simultan:1,singl:[0,1],situat:0,size:[0,1],size_or_typ:1,small:0,softwar:0,solv:0,some:[0,1],sometim:0,soon:0,sound:0,soundli:0,sourc:1,space:[0,1],spars:1,sparsiti:1,specif:[0,1],specifi:0,speed:0,srun:0,stage:0,stale:1,standard:0,standpoint:0,start:0,statement:0,station:0,step:2,still:[0,1],stop:0,store:1,stream:1,string:1,stronger:0,sub:1,subject:0,subregion:[0,1],subscrib:1,subset:[0,1],subspac:1,success:0,sum:1,supercomput:0,superpod:0,support:[0,1],synchron:[0,1],sysmem:0,system:0,tag:1,take:[0,1],target:[0,1],targetdir:0,task:[0,2],task_id:1,technolog:0,tell:0,temporarili:1,tenanc:0,tend:0,term:0,tessel:1,test:0,than:0,thei:[0,1],them:0,therebi:[0,1],therefor:[0,1],thi:[0,1],thoroughli:0,those:0,though:0,thought:0,through:1,throughout:1,time:0,timelin:0,todai:0,toler:0,tool:0,toolchain:2,top:0,total:[0,1],tracer:0,tracker:0,tradit:0,tran:1,transform:[0,2],treat:1,tree:1,tri:0,trivial:0,truli:0,two:0,type:[0,1],type_saf:1,ubuntu:0,ultim:1,unbind:1,understand:0,undo:1,unmap:1,unnecessari:0,unord:1,unstructur:1,unsuccess:0,unsurpris:0,until:[0,1],upon:0,upper:1,upper_bound:1,usag:0,use:[0,1],used:[1,2],user:[0,1],uses:[0,1],using:[0,1],usr:0,util:1,valid:1,valu:1,variabl:0,vector:1,veri:0,version:0,view:0,viewer:0,visual:0,volta:0,volum:0,wai:[0,1],wait:1,wait_until_valid:1,want:0,warn:0,watch:0,web:0,weight:1,welcom:0,well:[0,1],what:2,when:[0,1],whenev:0,where:[0,1],wherea:1,whether:1,which:[0,1],why:2,willing:0,window:0,within:0,without:[0,1],work:2,world:0,would:0,wrap:[0,1],write:[0,1],written:0,x86:0,you:[0,1],your:0,zero:1},titles:["Legate","Legate Core API Reference","Welcome to Legate Core\u2019s documentation!"],titleterms:{Use:0,acquir:1,affinetransform:1,api:1,argumentmap:1,attach:1,bufferbuild:1,copi:1,core:[0,1,2],debug:0,depend:0,detach:1,distribut:0,document:[0,2],doe:0,domain:1,equalpartit:1,faq:0,fenc:1,fieldid:1,fieldspac:1,fill:1,futur:1,futuremap:1,how:0,indexcopi:1,indexfil:1,indexpartit:1,indexspac:1,indextask:1,indic:2,inlinemap:1,instal:0,launch:0,legat:[0,1,2],next:0,other:0,outputregion:1,partit:1,partitionbyimag:1,partitionbyimagerang:1,partitionbyrestrict:1,partitionbyweight:1,partitionfunctor:1,physicalregion:1,point:1,profil:0,python:0,rect:1,refer:1,region:1,releas:1,select:0,step:0,tabl:2,task:1,toolchain:0,transform:1,used:0,welcom:2,what:0,why:0,work:0}})