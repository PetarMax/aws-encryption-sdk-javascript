// Copyright Amazon.com Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

/* eslint-env mocha */

export function basicMessageHeader() {
  return new Uint8Array([
    1,
    128,
    0,
    20,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    0,
    43,
    0,
    2,
    0,
    11,
    105,
    110,
    102,
    111,
    114,
    109,
    97,
    116,
    105,
    111,
    110,
    0,
    12,
    194,
    189,
    32,
    43,
    32,
    194,
    188,
    32,
    61,
    32,
    194,
    190,
    0,
    4,
    115,
    111,
    109,
    101,
    0,
    6,
    112,
    117,
    98,
    108,
    105,
    99,
    0,
    2,
    0,
    12,
    194,
    189,
    32,
    43,
    32,
    194,
    188,
    32,
    61,
    32,
    194,
    190,
    0,
    8,
    102,
    105,
    114,
    115,
    116,
    75,
    101,
    121,
    0,
    5,
    1,
    2,
    3,
    4,
    5,
    0,
    12,
    194,
    189,
    32,
    43,
    32,
    194,
    188,
    32,
    61,
    32,
    194,
    190,
    0,
    9,
    115,
    101,
    99,
    111,
    110,
    100,
    75,
    101,
    121,
    0,
    5,
    6,
    7,
    8,
    9,
    0,
    2,
    0,
    0,
    0,
    0,
    12,
    0,
    0,
    16,
    0,
  ])
}

export function zeroByteEncryptionContextMessageHeader() {
  return new Uint8Array([
    1,
    128,
    0,
    20,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    0,
    0, // see here, 0,0 for context length, but _no_ element count
    0,
    2,
    0,
    12,
    194,
    189,
    32,
    43,
    32,
    194,
    188,
    32,
    61,
    32,
    194,
    190,
    0,
    8,
    102,
    105,
    114,
    115,
    116,
    75,
    101,
    121,
    0,
    5,
    1,
    2,
    3,
    4,
    5,
    0,
    12,
    194,
    189,
    32,
    43,
    32,
    194,
    188,
    32,
    61,
    32,
    194,
    190,
    0,
    9,
    115,
    101,
    99,
    111,
    110,
    100,
    75,
    101,
    121,
    0,
    5,
    6,
    7,
    8,
    9,
    0,
    2,
    0,
    0,
    0,
    0,
    12,
    0,
    0,
    16,
    0,
  ])
}

export function suiteIdNotValidMessageHeader() {
  return new Uint8Array([
    1,
    128,
    0,
    0,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    0,
    43,
    0,
    2,
    0,
    11,
    105,
    110,
    102,
    111,
    114,
    109,
    97,
    116,
    105,
    111,
    110,
    0,
    12,
    194,
    189,
    32,
    43,
    32,
    194,
    188,
    32,
    61,
    32,
    194,
    190,
    0,
    4,
    115,
    111,
    109,
    101,
    0,
    6,
    112,
    117,
    98,
    108,
    105,
    99,
    0,
    2,
    0,
    12,
    194,
    189,
    32,
    43,
    32,
    194,
    188,
    32,
    61,
    32,
    194,
    190,
    0,
    8,
    102,
    105,
    114,
    115,
    116,
    75,
    101,
    121,
    0,
    5,
    1,
    2,
    3,
    4,
    5,
    0,
    12,
    194,
    189,
    32,
    43,
    32,
    194,
    188,
    32,
    61,
    32,
    194,
    190,
    0,
    9,
    115,
    101,
    99,
    111,
    110,
    100,
    75,
    101,
    121,
    0,
    5,
    6,
    7,
    8,
    9,
    0,
    2,
    0,
    0,
    0,
    0,
    12,
    0,
    0,
    16,
    0,
  ])
}

export function versionNotValidMessageHeader() {
  return new Uint8Array([
    256,
    128,
    0,
    20,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    0,
    43,
    0,
    2,
    0,
    11,
    105,
    110,
    102,
    111,
    114,
    109,
    97,
    116,
    105,
    111,
    110,
    0,
    12,
    194,
    189,
    32,
    43,
    32,
    194,
    188,
    32,
    61,
    32,
    194,
    190,
    0,
    4,
    115,
    111,
    109,
    101,
    0,
    6,
    112,
    117,
    98,
    108,
    105,
    99,
    0,
    2,
    0,
    12,
    194,
    189,
    32,
    43,
    32,
    194,
    188,
    32,
    61,
    32,
    194,
    190,
    0,
    8,
    102,
    105,
    114,
    115,
    116,
    75,
    101,
    121,
    0,
    5,
    1,
    2,
    3,
    4,
    5,
    0,
    12,
    194,
    189,
    32,
    43,
    32,
    194,
    188,
    32,
    61,
    32,
    194,
    190,
    0,
    9,
    115,
    101,
    99,
    111,
    110,
    100,
    75,
    101,
    121,
    0,
    5,
    6,
    7,
    8,
    9,
    0,
    2,
    0,
    0,
    0,
    0,
    12,
    0,
    0,
    16,
    0,
  ])
}

export function typeNotValidMessageHeader() {
  return new Uint8Array([
    1,
    256,
    0,
    20,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    0,
    43,
    0,
    2,
    0,
    11,
    105,
    110,
    102,
    111,
    114,
    109,
    97,
    116,
    105,
    111,
    110,
    0,
    12,
    194,
    189,
    32,
    43,
    32,
    194,
    188,
    32,
    61,
    32,
    194,
    190,
    0,
    4,
    115,
    111,
    109,
    101,
    0,
    6,
    112,
    117,
    98,
    108,
    105,
    99,
    0,
    2,
    0,
    12,
    194,
    189,
    32,
    43,
    32,
    194,
    188,
    32,
    61,
    32,
    194,
    190,
    0,
    8,
    102,
    105,
    114,
    115,
    116,
    75,
    101,
    121,
    0,
    5,
    1,
    2,
    3,
    4,
    5,
    0,
    12,
    194,
    189,
    32,
    43,
    32,
    194,
    188,
    32,
    61,
    32,
    194,
    190,
    0,
    9,
    115,
    101,
    99,
    111,
    110,
    100,
    75,
    101,
    121,
    0,
    5,
    6,
    7,
    8,
    9,
    0,
    2,
    0,
    0,
    0,
    0,
    12,
    0,
    0,
    16,
    0,
  ])
}

export function base64MessageHeader() {
  return new Uint8Array([
    65,
    89,
    65,
    65,
    70,
    65,
    77,
    68,
    65,
    119,
    77,
    68,
    65,
    119,
    77,
    68,
    65,
    119,
    77,
    68,
    65,
    119,
    77,
    68,
    65,
    119,
    77,
    65,
    75,
    119,
    65,
    67,
    65,
    65,
    116,
    112,
    98,
    109,
    90,
    118,
    99,
    109,
    49,
    104,
    100,
    71,
    108,
    118,
    98,
    103,
    65,
    77,
    119,
    114,
    48,
    103,
    75,
    121,
    68,
    67,
    118,
    67,
    65,
    57,
    73,
    77,
    75,
    43,
    65,
    65,
    82,
    122,
    98,
    50,
    49,
    108,
    65,
    65,
    90,
    119,
    100,
    87,
    74,
    115,
    97,
    87,
    77,
    65,
    65,
    103,
    65,
    77,
    119,
    114,
    48,
    103,
    75,
    121,
    68,
    67,
    118,
    67,
    65,
    57,
    73,
    77,
    75,
    43,
    65,
    65,
    104,
    109,
    97,
    88,
    74,
    122,
    100,
    69,
    116,
    108,
    101,
    81,
    65,
    70,
    65,
    81,
    73,
    68,
    66,
    65,
    85,
    65,
    68,
    77,
    75,
    57,
    73,
    67,
    115,
    103,
    119,
    114,
    119,
    103,
    80,
    83,
    68,
    67,
    118,
    103,
    65,
    74,
    99,
    50,
    86,
    106,
    98,
    50,
    53,
    107,
    83,
    50,
    86,
    53,
    65,
    65,
    85,
    71,
    66,
    119,
    103,
    74,
    65,
    65,
    73,
    65,
    65,
    65,
    65,
    65,
    68,
    65,
    65,
    65,
    69,
    65,
    65,
    61,
  ])
}

export function reservedBytesNoZeroMessageHeader() {
  return new Uint8Array([
    1,
    128,
    0,
    20,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    0,
    43,
    0,
    2,
    0,
    11,
    105,
    110,
    102,
    111,
    114,
    109,
    97,
    116,
    105,
    111,
    110,
    0,
    12,
    194,
    189,
    32,
    43,
    32,
    194,
    188,
    32,
    61,
    32,
    194,
    190,
    0,
    4,
    115,
    111,
    109,
    101,
    0,
    6,
    112,
    117,
    98,
    108,
    105,
    99,
    0,
    2,
    0,
    12,
    194,
    189,
    32,
    43,
    32,
    194,
    188,
    32,
    61,
    32,
    194,
    190,
    0,
    8,
    102,
    105,
    114,
    115,
    116,
    75,
    101,
    121,
    0,
    5,
    1,
    2,
    3,
    4,
    5,
    0,
    12,
    194,
    189,
    32,
    43,
    32,
    194,
    188,
    32,
    61,
    32,
    194,
    190,
    0,
    9,
    115,
    101,
    99,
    111,
    110,
    100,
    75,
    101,
    121,
    0,
    5,
    6,
    7,
    8,
    9,
    0,
    2,
    0,
    1,
    0,
    0,
    12,
    0,
    0,
    16,
    0,
  ])
}

export function ivLengthMismatchMessageHeader() {
  return new Uint8Array([
    1,
    128,
    0,
    20,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    0,
    43,
    0,
    2,
    0,
    11,
    105,
    110,
    102,
    111,
    114,
    109,
    97,
    116,
    105,
    111,
    110,
    0,
    12,
    194,
    189,
    32,
    43,
    32,
    194,
    188,
    32,
    61,
    32,
    194,
    190,
    0,
    4,
    115,
    111,
    109,
    101,
    0,
    6,
    112,
    117,
    98,
    108,
    105,
    99,
    0,
    2,
    0,
    12,
    194,
    189,
    32,
    43,
    32,
    194,
    188,
    32,
    61,
    32,
    194,
    190,
    0,
    8,
    102,
    105,
    114,
    115,
    116,
    75,
    101,
    121,
    0,
    5,
    1,
    2,
    3,
    4,
    5,
    0,
    12,
    194,
    189,
    32,
    43,
    32,
    194,
    188,
    32,
    61,
    32,
    194,
    190,
    0,
    9,
    115,
    101,
    99,
    111,
    110,
    100,
    75,
    101,
    121,
    0,
    5,
    6,
    7,
    8,
    9,
    0,
    2,
    0,
    0,
    0,
    0,
    8,
    0,
    0,
    16,
    0,
  ])
}

export function basicFrameHeader() {
  return new Uint8Array([0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1])
}

export function invalidSequenceNumberFrameHeader() {
  return new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1])
}

export function finalFrameHeader() {
  return new Uint8Array([
    255,
    255,
    255,
    255,
    0,
    0,
    0,
    1,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    0,
    0,
    3,
    231,
  ])
}

export function finalFrameHeaderZeroBytes() {
  return new Uint8Array([
    255,
    255,
    255,
    255,
    0,
    0,
    0,
    1,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    0,
    0,
    0,
    0,
  ])
}

export function invalidSequenceEndFinalFrameHeader() {
  return new Uint8Array([
    0,
    255,
    255,
    255,
    0,
    0,
    0,
    1,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    0,
    0,
    3,
    231,
  ])
}

export function invalidSequenceNumberFinalFrameHeader() {
  return new Uint8Array([
    255,
    255,
    255,
    255,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    0,
    0,
    3,
    231,
  ])
}

export function basicNonFrameHeader() {
  return new Uint8Array([
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
  ])
}

export function invalidNonFrameHeaderContentLengthExcedsLimits() {
  return new Uint8Array([
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    0,
    0,
    0,
    15,
    255,
    255,
    255,
    224,
  ])
}

export function basicEncryptionContext() {
  return new Uint8Array([
    0,
    43,
    0,
    2,
    0,
    11,
    105,
    110,
    102,
    111,
    114,
    109,
    97,
    116,
    105,
    111,
    110,
    0,
    12,
    194,
    189,
    32,
    43,
    32,
    194,
    188,
    32,
    61,
    32,
    194,
    190,
    0,
    4,
    115,
    111,
    109,
    101,
    0,
    6,
    112,
    117,
    98,
    108,
    105,
    99,
  ])
}

export function missingDataEncryptionContext() {
  return new Uint8Array([
    0,
    43,
    0,
    2,
    0,
    11,
    105,
    110,
    102,
    111,
    114,
    109,
    97,
    116,
    105,
    111,
    110,
    0,
    12,
    194,
    189,
    32,
    43,
    32,
    194,
    188,
    32,
    61,
    32,
    194,
    190,
    0,
    4,
    115,
    111,
    109,
    101,
    0,
    6,
    112,
    117,
    98,
    108,
  ])
}

export function tooMuchDataEncryptionContext() {
  return new Uint8Array([
    0,
    43,
    0,
    2,
    0,
    11,
    105,
    110,
    102,
    111,
    114,
    109,
    97,
    116,
    105,
    111,
    110,
    0,
    12,
    194,
    189,
    32,
    43,
    32,
    194,
    188,
    32,
    61,
    32,
    194,
    190,
    0,
    4,
    115,
    111,
    109,
    101,
    0,
    6,
    112,
    117,
    98,
    108,
    105,
    99,
    0,
  ])
}

export function duplicateKeysEncryptionContext() {
  return new Uint8Array([
    0,
    43,
    0,
    4,
    0,
    11,
    105,
    110,
    102,
    111,
    114,
    109,
    97,
    116,
    105,
    111,
    110,
    0,
    12,
    194,
    189,
    32,
    43,
    32,
    194,
    188,
    32,
    61,
    32,
    194,
    190,
    0,
    11,
    105,
    110,
    102,
    111,
    114,
    109,
    97,
    116,
    105,
    111,
    110,
    0,
    12,
    194,
    189,
    32,
    43,
    32,
    194,
    188,
    32,
    61,
    32,
    194,
    190,
    0,
    4,
    115,
    111,
    109,
    101,
    0,
    6,
    112,
    117,
    98,
    108,
    105,
    99,
    0,
    4,
    115,
    111,
    109,
    101,
    0,
    6,
    112,
    117,
    98,
    108,
    105,
    99,
  ])
}

export function hasOwnPropertyEncryptionContext() {
  return new Uint8Array([
    0,
    34,
    0,
    1,
    0,
    14,
    104,
    97,
    115,
    79,
    119,
    110,
    80,
    114,
    111,
    112,
    101,
    114,
    116,
    121,
    0,
    14,
    97,
    114,
    98,
    105,
    116,
    114,
    97,
    114,
    121,
    86,
    97,
    108,
    117,
    101,
  ])
}

export function basicFrameIV() {
  return new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1])
}

export function basicNonFrameIV() {
  return new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1])
}

export function headerAuthIV() {
  return new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
}

export function encryptedDataKey() {
  return new Uint8Array([
    0,
    2,
    0,
    12,
    194,
    189,
    32,
    43,
    32,
    194,
    188,
    32,
    61,
    32,
    194,
    190,
    0,
    8,
    102,
    105,
    114,
    115,
    116,
    75,
    101,
    121,
    0,
    5,
    1,
    2,
    3,
    4,
    5,
    0,
    12,
    194,
    189,
    32,
    43,
    32,
    194,
    188,
    32,
    61,
    32,
    194,
    190,
    0,
    9,
    115,
    101,
    99,
    111,
    110,
    100,
    75,
    101,
    121,
    0,
    5,
    6,
    7,
    8,
    9,
    0,
  ])
}

export function ecdsaP256Signature() {
  return new Uint8Array([
    48,
    68,
    2,
    32,
    22,
    77,
    187,
    192,
    175,
    104,
    2,
    240,
    55,
    2,
    6,
    138,
    103,
    148,
    214,
    240,
    244,
    65,
    224,
    254,
    60,
    52,
    218,
    22,
    250,
    245,
    216,
    228,
    151,
    151,
    220,
    234,
    2,
    32,
    125,
    9,
    97,
    8,
    132,
    123,
    79,
    193,
    216,
    207,
    214,
    0,
    73,
    183,
    149,
    173,
    26,
    173,
    251,
    132,
    140,
    139,
    44,
    122,
    11,
    50,
    163,
    105,
    138,
    221,
    223,
    29,
  ])
}

export function ecdsaP256SignatureInfo() {
  return new Uint8Array([
    0,
    70,
    48,
    68,
    2,
    32,
    22,
    77,
    187,
    192,
    175,
    104,
    2,
    240,
    55,
    2,
    6,
    138,
    103,
    148,
    214,
    240,
    244,
    65,
    224,
    254,
    60,
    52,
    218,
    22,
    250,
    245,
    216,
    228,
    151,
    151,
    220,
    234,
    2,
    32,
    125,
    9,
    97,
    8,
    132,
    123,
    79,
    193,
    216,
    207,
    214,
    0,
    73,
    183,
    149,
    173,
    26,
    173,
    251,
    132,
    140,
    139,
    44,
    122,
    11,
    50,
    163,
    105,
    138,
    221,
    223,
    29,
  ])
}
