import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';
import type { IDL } from '@dfinity/candid';

export interface _SERVICE {
  'createBussinessOwner' : ActorMethod<
    [string],
    { 'id' : Principal, 'name' : string }
  >,
  'createCustomer' : ActorMethod<
    [string],
    { 'id' : Principal, 'name' : string }
  >,
  'createLease' : ActorMethod<
    [Principal, Principal, Principal, string],
    {
        'Ok' : {
          'id' : Principal,
          'startTime' : string,
          'businessOwner' : Principal,
          'customer' : Principal,
          'endTime' : string,
          'rentalItem' : Principal,
        }
      } |
      {
        'Err' : { 'RentalItemNotFound' : Principal } |
          { 'BusinessOwnerNotFound' : Principal } |
          { 'CustomerNotFound' : Principal }
      }
  >,
  'createRentalItems' : ActorMethod<
    [string, bigint],
    { 'id' : Principal, 'quantity' : bigint, 'items' : string }
  >,
  'getBussinessOwnerId' : ActorMethod<
    [Principal],
    [] | [{ 'id' : Principal, 'name' : string }]
  >,
  'getCustomerId' : ActorMethod<
    [Principal],
    [] | [{ 'id' : Principal, 'name' : string }]
  >,
  'getLeaseId' : ActorMethod<
    [Principal],
    [] | [
      {
        'id' : Principal,
        'startTime' : string,
        'businessOwner' : Principal,
        'customer' : Principal,
        'endTime' : string,
        'rentalItem' : Principal,
      }
    ]
  >,
  'getRentalItem' : ActorMethod<
    [Principal],
    [] | [{ 'id' : Principal, 'quantity' : bigint, 'items' : string }]
  >,
}
export declare const idlFactory: IDL.InterfaceFactory;
export declare const init: ({ IDL }: { IDL: IDL }) => IDL.Type[];
