export const idlFactory = ({ IDL }) => {
  return IDL.Service({
    'createBussinessOwner' : IDL.Func(
        [IDL.Text],
        [IDL.Record({ 'id' : IDL.Principal, 'name' : IDL.Text })],
        [],
      ),
    'createCustomer' : IDL.Func(
        [IDL.Text],
        [IDL.Record({ 'id' : IDL.Principal, 'name' : IDL.Text })],
        [],
      ),
    'createLease' : IDL.Func(
        [IDL.Principal, IDL.Principal, IDL.Principal, IDL.Text],
        [
          IDL.Variant({
            'Ok' : IDL.Record({
              'id' : IDL.Principal,
              'startTime' : IDL.Text,
              'businessOwner' : IDL.Principal,
              'customer' : IDL.Principal,
              'endTime' : IDL.Text,
              'rentalItem' : IDL.Principal,
            }),
            'Err' : IDL.Variant({
              'RentalItemNotFound' : IDL.Principal,
              'BusinessOwnerNotFound' : IDL.Principal,
              'CustomerNotFound' : IDL.Principal,
            }),
          }),
        ],
        [],
      ),
    'createRentalItems' : IDL.Func(
        [IDL.Text, IDL.Nat64],
        [
          IDL.Record({
            'id' : IDL.Principal,
            'quantity' : IDL.Nat64,
            'items' : IDL.Text,
          }),
        ],
        [],
      ),
    'getBussinessOwnerId' : IDL.Func(
        [IDL.Principal],
        [IDL.Opt(IDL.Record({ 'id' : IDL.Principal, 'name' : IDL.Text }))],
        ['query'],
      ),
    'getCustomerId' : IDL.Func(
        [IDL.Principal],
        [IDL.Opt(IDL.Record({ 'id' : IDL.Principal, 'name' : IDL.Text }))],
        ['query'],
      ),
    'getLeaseId' : IDL.Func(
        [IDL.Principal],
        [
          IDL.Opt(
            IDL.Record({
              'id' : IDL.Principal,
              'startTime' : IDL.Text,
              'businessOwner' : IDL.Principal,
              'customer' : IDL.Principal,
              'endTime' : IDL.Text,
              'rentalItem' : IDL.Principal,
            })
          ),
        ],
        ['query'],
      ),
    'getRentalItem' : IDL.Func(
        [IDL.Principal],
        [
          IDL.Opt(
            IDL.Record({
              'id' : IDL.Principal,
              'quantity' : IDL.Nat64,
              'items' : IDL.Text,
            })
          ),
        ],
        ['query'],
      ),
  });
};
export const init = ({ IDL }) => { return []; };
