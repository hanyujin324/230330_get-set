class Server{
  constructor(port){
    this.port=port;
  }
  //setter로 인해 port의 데이터타입은 number가 아니면 에러를 발생시킴
  set port(value){ //setter를 set으로 표현, getter는 get으로 사용
    if(typeof value!=='number'){ //setter를 통해 전달받은 port번호가 숫자가 아닐 경우, 에러
      throw new Error('port must be a number');
    }else{//숫자일 경우, 해당 값을 ‘_port’변수에 저장
      this._port=value; 
    }
  }
  start(){
    this.server=http.createServer((request,response)=>{ //http 서버 생성
      response.writeHead(200,{'Content-Type':'text/plain'});
      response.end('객체지향 프로그래밍의 시작 생성자 함수');
    });
    this.server.listen(this._port); //setter로 인해 this._port를 사용한 예시
  }
}

const server=new Server(3000); //port 3000번으로 서버 생성&실행
server.start();