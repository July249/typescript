{
  /**
   * Intersection Type: &
   * => 다양한 타입들을 묶어서 하나로 사용할 수 있음
   */

  type Student = {
    name: string;
    score: number;
  };

  type Worker = {
    employeeId: number;
    work: () => void;
  };

  function internWork(person: Student & Worker) {
    console.log(person.name, person.employeeId, person.work());
  }

  internWork({
    name: 'tom',
    score: 1,
    employeeId: 123,
    work: () => {},
  });
}
