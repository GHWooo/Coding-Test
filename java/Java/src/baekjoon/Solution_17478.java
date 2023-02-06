// solved
package baekjoon;

public class Solution_17478 {
    static String question = "\"재귀함수가 뭔가요?\"\n";
    static String[] long_answer = {"\"잘 들어보게. 옛날옛날 한 산 꼭대기에 이세상 모든 지식을 통달한 선인이 있었어.\n",
            "마을 사람들은 모두 그 선인에게 수많은 질문을 했고, 모두 지혜롭게 대답해 주었지.\n",
            "그의 답은 대부분 옳았다고 하네. 그런데 어느 날, 그 선인에게 한 선비가 찾아와서 물었어.\""};
    static String short_answer = "\"재귀함수는 자기 자신을 호출하는 함수라네\"\n";
    static String end_answer = "라고 답변하였지.\n";
    static String line = "____";

    public static void solution(StringBuilder sb, int count, int N) {
        sb.append("\n");

        for(int i = 0; i < (N - count); i++) sb.append(line);
        sb.append(question);

        if(count > 0) {
            for(int j = 0; j < 3; j++) {
                for(int k = 0; k < (N - count); k++) sb.append(line);
                sb.append(long_answer[j]);
            }

            solution(sb, count - 1, N);
        }
        else {
            for(int j = 0; j < (N - count); j++) sb.append(line);
            sb.append(short_answer);
        }

        for(int i = 0; i < (N - count); i++) sb.append(line);
        sb.append(end_answer);
    }

    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringBuilder sb = new StringBuilder();

        sb.append("어느 한 컴퓨터공학과 학생이 유명한 교수님을 찾아가 물었다.");

        int N = Integer.parseInt(br.readLine());

        solution(sb, N, N);

        System.out.println(sb.toString());
    }
}
