import { symDiff } from './symmetric-difference';


type Obj = {
  [key: string]: number;
}

describe('Return the correct symmetric difference', () => {

  test ('single array input', () => expect( symDiff([1,2,3]) ).toEqual([1,2,3]) );

  test ('empty or no input', () => expect ( symDiff() ).toEqual([]) );

  test ('number primitive', () => {

    const numArr1 = [1,2,3    ];
    const numArr2 = [    3,4,5];
    const numArr3 = [1,  3,  5];

    const result = symDiff(numArr1, numArr2, numArr3);
    expect(result).toEqual( [ 2, 4 ] );
  });

  test ('string primitive', () => {

    const strArr1 = ['a','b','c'        ];
    const strArr2 = [        'c','d','e'];
    const strArr3 = ['a',    'c',    'e'];

    const result = symDiff(strArr1, strArr2, strArr3);
    expect(result).toEqual( [ 'b', 'd'] );
  });

  test ('mixed primitives', () => {

    const strArr1 = [1,2,'c'      ];
    const strArr2 = [    'c','d',5];
    const strArr3 = [1,  'c',    5];

    const result = symDiff(strArr1, strArr2, strArr3);
    expect(result).toEqual( [ 2, 'd' ] );
  });

  test ('custom types', () => {

    const obj1 = { a: 1, b: 2             };
    const obj2 = {       b: 2, c: 3,      };
    const obj3 = {       b: 2,       d: 4 };

    const arr1 = [ obj1,       obj3 ];
    const arr2 = [ obj1, obj2,      ];
    const arr3 = [       obj2       ];

    const result = symDiff<Obj>(arr1, arr2, arr3);
    expect(result).toEqual([ obj3 ]);
  });

});
