const el = (tag, val = "") => {
            let target = document.createElement(tag);
            
            let text = document.createTextNode(val);
            
            target.appendChild(text);

            return target;
        }
        const DomRenderer = class{
            constructor(parent){
                this._parent = parent;
            }
            render(data){
                const {_title, _list} = data;
                const parent = document.querySelector(this._parent);
                
                parent.appendChild(el("h4", _title));
                parent.appendChild(this._render(el('ul'), _list));
            }
            _render(parent, list){
                list.forEach(({_title, _list}) => {
                    parent.appendChild(el('li', _title));
                    parent.appendChild(this._render(el('ul'), _list));
                })

                return parent;
            }
        };


        const Task = class{
            constructor(title){
                this._title = title, this._isComplete = false;
                this._list = [];
            }
            add(title){
                let new_Task = new Task(title);
                this._list.push(new_Task);
                return new_Task;
            }
        }

        const list1 = new Task("회사 할 일");

        let list1_1 = list1.add("업무");
        list1.add("공부");

        let list1_1_1 = list1_1.add("문의");
        let list1_1_2 = list1_1.add("개발");

        list1_1_1.add("문의2");
        list1_1_1.add("문의3");
        list1_1_1.add("문의4");
        list1_1_1.add("문의5");
        list1_1_1.add("문의6");

        
        const list2 = new Task("놀거리");

         let in_list2_1 = list2.add("영화");
         let in_list2_2 = list2.add("노래방");
         
         in_list2_1.add("공조");
         in_list2_1.add("신비한 동물사전");
         in_list2_1.add("보헤미안ㅇ 랩소디");

         in_list2_2.add("너를 만나");
         
         list2.add("무한1").add("무한2").add("무한3").add("무한4").add("무한5").add("무한6").add("무한7");

        const render = new DomRenderer("#App");
        render.render(list1);
        render.render(list2);
        
        console.log(list1);

        /*
        개발은 혼자 하는게 아니고, 기능이 한번 만들어지면 끝인게 아니다! 

        개요 
        - composite pattern은 분할디자인패턴입니다.
        - composite pattern은 객체의 그룹이 단일 객체와 동일하게 다루어 지는 것을 말합니다.
        - composite pattern은 client들이 단일 객체와 복합체를 동일하게 다룰 수 있게 합니다.

        */