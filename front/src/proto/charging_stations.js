/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
import * as $protobuf from "protobufjs/minimal";

// Common aliases
const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const protobuf = $root.protobuf = (() => {

    /**
     * Namespace protobuf.
     * @exports protobuf
     * @namespace
     */
    const protobuf = {};

    protobuf.ChargingStationPageProto = (function() {

        /**
         * Properties of a ChargingStationPageProto.
         * @memberof protobuf
         * @interface IChargingStationPageProto
         * @property {Array.<protobuf.IChargingStationProto>|null} [chargingStations] ChargingStationPageProto chargingStations
         * @property {number|null} [totalPages] ChargingStationPageProto totalPages
         * @property {number|null} [totalElements] ChargingStationPageProto totalElements
         * @property {number|null} [pageSize] ChargingStationPageProto pageSize
         * @property {number|null} [pageNumber] ChargingStationPageProto pageNumber
         */

        /**
         * Constructs a new ChargingStationPageProto.
         * @memberof protobuf
         * @classdesc Represents a ChargingStationPageProto.
         * @implements IChargingStationPageProto
         * @constructor
         * @param {protobuf.IChargingStationPageProto=} [properties] Properties to set
         */
        function ChargingStationPageProto(properties) {
            this.chargingStations = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ChargingStationPageProto chargingStations.
         * @member {Array.<protobuf.IChargingStationProto>} chargingStations
         * @memberof protobuf.ChargingStationPageProto
         * @instance
         */
        ChargingStationPageProto.prototype.chargingStations = $util.emptyArray;

        /**
         * ChargingStationPageProto totalPages.
         * @member {number} totalPages
         * @memberof protobuf.ChargingStationPageProto
         * @instance
         */
        ChargingStationPageProto.prototype.totalPages = 0;

        /**
         * ChargingStationPageProto totalElements.
         * @member {number} totalElements
         * @memberof protobuf.ChargingStationPageProto
         * @instance
         */
        ChargingStationPageProto.prototype.totalElements = 0;

        /**
         * ChargingStationPageProto pageSize.
         * @member {number} pageSize
         * @memberof protobuf.ChargingStationPageProto
         * @instance
         */
        ChargingStationPageProto.prototype.pageSize = 0;

        /**
         * ChargingStationPageProto pageNumber.
         * @member {number} pageNumber
         * @memberof protobuf.ChargingStationPageProto
         * @instance
         */
        ChargingStationPageProto.prototype.pageNumber = 0;

        /**
         * Creates a new ChargingStationPageProto instance using the specified properties.
         * @function create
         * @memberof protobuf.ChargingStationPageProto
         * @static
         * @param {protobuf.IChargingStationPageProto=} [properties] Properties to set
         * @returns {protobuf.ChargingStationPageProto} ChargingStationPageProto instance
         */
        ChargingStationPageProto.create = function create(properties) {
            return new ChargingStationPageProto(properties);
        };

        /**
         * Encodes the specified ChargingStationPageProto message. Does not implicitly {@link protobuf.ChargingStationPageProto.verify|verify} messages.
         * @function encode
         * @memberof protobuf.ChargingStationPageProto
         * @static
         * @param {protobuf.IChargingStationPageProto} message ChargingStationPageProto message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ChargingStationPageProto.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.chargingStations != null && message.chargingStations.length)
                for (let i = 0; i < message.chargingStations.length; ++i)
                    $root.protobuf.ChargingStationProto.encode(message.chargingStations[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.totalPages != null && Object.hasOwnProperty.call(message, "totalPages"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.totalPages);
            if (message.totalElements != null && Object.hasOwnProperty.call(message, "totalElements"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.totalElements);
            if (message.pageSize != null && Object.hasOwnProperty.call(message, "pageSize"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.pageSize);
            if (message.pageNumber != null && Object.hasOwnProperty.call(message, "pageNumber"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.pageNumber);
            return writer;
        };

        /**
         * Encodes the specified ChargingStationPageProto message, length delimited. Does not implicitly {@link protobuf.ChargingStationPageProto.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protobuf.ChargingStationPageProto
         * @static
         * @param {protobuf.IChargingStationPageProto} message ChargingStationPageProto message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ChargingStationPageProto.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ChargingStationPageProto message from the specified reader or buffer.
         * @function decode
         * @memberof protobuf.ChargingStationPageProto
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protobuf.ChargingStationPageProto} ChargingStationPageProto
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ChargingStationPageProto.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.protobuf.ChargingStationPageProto();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.chargingStations && message.chargingStations.length))
                            message.chargingStations = [];
                        message.chargingStations.push($root.protobuf.ChargingStationProto.decode(reader, reader.uint32()));
                        break;
                    }
                case 2: {
                        message.totalPages = reader.int32();
                        break;
                    }
                case 3: {
                        message.totalElements = reader.int32();
                        break;
                    }
                case 4: {
                        message.pageSize = reader.int32();
                        break;
                    }
                case 5: {
                        message.pageNumber = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ChargingStationPageProto message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protobuf.ChargingStationPageProto
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protobuf.ChargingStationPageProto} ChargingStationPageProto
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ChargingStationPageProto.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ChargingStationPageProto message.
         * @function verify
         * @memberof protobuf.ChargingStationPageProto
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ChargingStationPageProto.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.chargingStations != null && message.hasOwnProperty("chargingStations")) {
                if (!Array.isArray(message.chargingStations))
                    return "chargingStations: array expected";
                for (let i = 0; i < message.chargingStations.length; ++i) {
                    let error = $root.protobuf.ChargingStationProto.verify(message.chargingStations[i]);
                    if (error)
                        return "chargingStations." + error;
                }
            }
            if (message.totalPages != null && message.hasOwnProperty("totalPages"))
                if (!$util.isInteger(message.totalPages))
                    return "totalPages: integer expected";
            if (message.totalElements != null && message.hasOwnProperty("totalElements"))
                if (!$util.isInteger(message.totalElements))
                    return "totalElements: integer expected";
            if (message.pageSize != null && message.hasOwnProperty("pageSize"))
                if (!$util.isInteger(message.pageSize))
                    return "pageSize: integer expected";
            if (message.pageNumber != null && message.hasOwnProperty("pageNumber"))
                if (!$util.isInteger(message.pageNumber))
                    return "pageNumber: integer expected";
            return null;
        };

        /**
         * Creates a ChargingStationPageProto message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protobuf.ChargingStationPageProto
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protobuf.ChargingStationPageProto} ChargingStationPageProto
         */
        ChargingStationPageProto.fromObject = function fromObject(object) {
            if (object instanceof $root.protobuf.ChargingStationPageProto)
                return object;
            let message = new $root.protobuf.ChargingStationPageProto();
            if (object.chargingStations) {
                if (!Array.isArray(object.chargingStations))
                    throw TypeError(".protobuf.ChargingStationPageProto.chargingStations: array expected");
                message.chargingStations = [];
                for (let i = 0; i < object.chargingStations.length; ++i) {
                    if (typeof object.chargingStations[i] !== "object")
                        throw TypeError(".protobuf.ChargingStationPageProto.chargingStations: object expected");
                    message.chargingStations[i] = $root.protobuf.ChargingStationProto.fromObject(object.chargingStations[i]);
                }
            }
            if (object.totalPages != null)
                message.totalPages = object.totalPages | 0;
            if (object.totalElements != null)
                message.totalElements = object.totalElements | 0;
            if (object.pageSize != null)
                message.pageSize = object.pageSize | 0;
            if (object.pageNumber != null)
                message.pageNumber = object.pageNumber | 0;
            return message;
        };

        /**
         * Creates a plain object from a ChargingStationPageProto message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protobuf.ChargingStationPageProto
         * @static
         * @param {protobuf.ChargingStationPageProto} message ChargingStationPageProto
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ChargingStationPageProto.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.chargingStations = [];
            if (options.defaults) {
                object.totalPages = 0;
                object.totalElements = 0;
                object.pageSize = 0;
                object.pageNumber = 0;
            }
            if (message.chargingStations && message.chargingStations.length) {
                object.chargingStations = [];
                for (let j = 0; j < message.chargingStations.length; ++j)
                    object.chargingStations[j] = $root.protobuf.ChargingStationProto.toObject(message.chargingStations[j], options);
            }
            if (message.totalPages != null && message.hasOwnProperty("totalPages"))
                object.totalPages = message.totalPages;
            if (message.totalElements != null && message.hasOwnProperty("totalElements"))
                object.totalElements = message.totalElements;
            if (message.pageSize != null && message.hasOwnProperty("pageSize"))
                object.pageSize = message.pageSize;
            if (message.pageNumber != null && message.hasOwnProperty("pageNumber"))
                object.pageNumber = message.pageNumber;
            return object;
        };

        /**
         * Converts this ChargingStationPageProto to JSON.
         * @function toJSON
         * @memberof protobuf.ChargingStationPageProto
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ChargingStationPageProto.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ChargingStationPageProto
         * @function getTypeUrl
         * @memberof protobuf.ChargingStationPageProto
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ChargingStationPageProto.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/protobuf.ChargingStationPageProto";
        };

        return ChargingStationPageProto;
    })();

    protobuf.ChargingStationProto = (function() {

        /**
         * Properties of a ChargingStationProto.
         * @memberof protobuf
         * @interface IChargingStationProto
         * @property {number|null} [id] ChargingStationProto id
         * @property {string|null} [name] ChargingStationProto name
         * @property {string|null} [brandName] ChargingStationProto brandName
         * @property {string|null} [address] ChargingStationProto address
         * @property {string|null} [coordinates] ChargingStationProto coordinates
         * @property {string|null} [operatorName] ChargingStationProto operatorName
         * @property {string|null} [managerName] ChargingStationProto managerName
         * @property {protobuf.IStationDetailsProto|null} [stationDetails] ChargingStationProto stationDetails
         * @property {protobuf.IChargingPointProto|null} [chargingPoint] ChargingStationProto chargingPoint
         * @property {google.protobuf.IBoolValue|null} [twoWheelerStation] ChargingStationProto twoWheelerStation
         * @property {string|null} [commissioningDate] ChargingStationProto commissioningDate
         * @property {string|null} [accessibility] ChargingStationProto accessibility
         * @property {string|null} [observations] ChargingStationProto observations
         * @property {string|null} [lastUpdate] ChargingStationProto lastUpdate
         * @property {protobuf.ILocationInfoProto|null} [locationInfo] ChargingStationProto locationInfo
         */

        /**
         * Constructs a new ChargingStationProto.
         * @memberof protobuf
         * @classdesc Represents a ChargingStationProto.
         * @implements IChargingStationProto
         * @constructor
         * @param {protobuf.IChargingStationProto=} [properties] Properties to set
         */
        function ChargingStationProto(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ChargingStationProto id.
         * @member {number} id
         * @memberof protobuf.ChargingStationProto
         * @instance
         */
        ChargingStationProto.prototype.id = 0;

        /**
         * ChargingStationProto name.
         * @member {string} name
         * @memberof protobuf.ChargingStationProto
         * @instance
         */
        ChargingStationProto.prototype.name = "";

        /**
         * ChargingStationProto brandName.
         * @member {string} brandName
         * @memberof protobuf.ChargingStationProto
         * @instance
         */
        ChargingStationProto.prototype.brandName = "";

        /**
         * ChargingStationProto address.
         * @member {string} address
         * @memberof protobuf.ChargingStationProto
         * @instance
         */
        ChargingStationProto.prototype.address = "";

        /**
         * ChargingStationProto coordinates.
         * @member {string} coordinates
         * @memberof protobuf.ChargingStationProto
         * @instance
         */
        ChargingStationProto.prototype.coordinates = "";

        /**
         * ChargingStationProto operatorName.
         * @member {string} operatorName
         * @memberof protobuf.ChargingStationProto
         * @instance
         */
        ChargingStationProto.prototype.operatorName = "";

        /**
         * ChargingStationProto managerName.
         * @member {string} managerName
         * @memberof protobuf.ChargingStationProto
         * @instance
         */
        ChargingStationProto.prototype.managerName = "";

        /**
         * ChargingStationProto stationDetails.
         * @member {protobuf.IStationDetailsProto|null|undefined} stationDetails
         * @memberof protobuf.ChargingStationProto
         * @instance
         */
        ChargingStationProto.prototype.stationDetails = null;

        /**
         * ChargingStationProto chargingPoint.
         * @member {protobuf.IChargingPointProto|null|undefined} chargingPoint
         * @memberof protobuf.ChargingStationProto
         * @instance
         */
        ChargingStationProto.prototype.chargingPoint = null;

        /**
         * ChargingStationProto twoWheelerStation.
         * @member {google.protobuf.IBoolValue|null|undefined} twoWheelerStation
         * @memberof protobuf.ChargingStationProto
         * @instance
         */
        ChargingStationProto.prototype.twoWheelerStation = null;

        /**
         * ChargingStationProto commissioningDate.
         * @member {string} commissioningDate
         * @memberof protobuf.ChargingStationProto
         * @instance
         */
        ChargingStationProto.prototype.commissioningDate = "";

        /**
         * ChargingStationProto accessibility.
         * @member {string} accessibility
         * @memberof protobuf.ChargingStationProto
         * @instance
         */
        ChargingStationProto.prototype.accessibility = "";

        /**
         * ChargingStationProto observations.
         * @member {string} observations
         * @memberof protobuf.ChargingStationProto
         * @instance
         */
        ChargingStationProto.prototype.observations = "";

        /**
         * ChargingStationProto lastUpdate.
         * @member {string} lastUpdate
         * @memberof protobuf.ChargingStationProto
         * @instance
         */
        ChargingStationProto.prototype.lastUpdate = "";

        /**
         * ChargingStationProto locationInfo.
         * @member {protobuf.ILocationInfoProto|null|undefined} locationInfo
         * @memberof protobuf.ChargingStationProto
         * @instance
         */
        ChargingStationProto.prototype.locationInfo = null;

        /**
         * Creates a new ChargingStationProto instance using the specified properties.
         * @function create
         * @memberof protobuf.ChargingStationProto
         * @static
         * @param {protobuf.IChargingStationProto=} [properties] Properties to set
         * @returns {protobuf.ChargingStationProto} ChargingStationProto instance
         */
        ChargingStationProto.create = function create(properties) {
            return new ChargingStationProto(properties);
        };

        /**
         * Encodes the specified ChargingStationProto message. Does not implicitly {@link protobuf.ChargingStationProto.verify|verify} messages.
         * @function encode
         * @memberof protobuf.ChargingStationProto
         * @static
         * @param {protobuf.IChargingStationProto} message ChargingStationProto message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ChargingStationProto.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
            if (message.brandName != null && Object.hasOwnProperty.call(message, "brandName"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.brandName);
            if (message.address != null && Object.hasOwnProperty.call(message, "address"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.address);
            if (message.coordinates != null && Object.hasOwnProperty.call(message, "coordinates"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.coordinates);
            if (message.operatorName != null && Object.hasOwnProperty.call(message, "operatorName"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.operatorName);
            if (message.managerName != null && Object.hasOwnProperty.call(message, "managerName"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.managerName);
            if (message.stationDetails != null && Object.hasOwnProperty.call(message, "stationDetails"))
                $root.protobuf.StationDetailsProto.encode(message.stationDetails, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
            if (message.chargingPoint != null && Object.hasOwnProperty.call(message, "chargingPoint"))
                $root.protobuf.ChargingPointProto.encode(message.chargingPoint, writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
            if (message.twoWheelerStation != null && Object.hasOwnProperty.call(message, "twoWheelerStation"))
                $root.google.protobuf.BoolValue.encode(message.twoWheelerStation, writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
            if (message.commissioningDate != null && Object.hasOwnProperty.call(message, "commissioningDate"))
                writer.uint32(/* id 11, wireType 2 =*/90).string(message.commissioningDate);
            if (message.accessibility != null && Object.hasOwnProperty.call(message, "accessibility"))
                writer.uint32(/* id 12, wireType 2 =*/98).string(message.accessibility);
            if (message.observations != null && Object.hasOwnProperty.call(message, "observations"))
                writer.uint32(/* id 13, wireType 2 =*/106).string(message.observations);
            if (message.lastUpdate != null && Object.hasOwnProperty.call(message, "lastUpdate"))
                writer.uint32(/* id 14, wireType 2 =*/114).string(message.lastUpdate);
            if (message.locationInfo != null && Object.hasOwnProperty.call(message, "locationInfo"))
                $root.protobuf.LocationInfoProto.encode(message.locationInfo, writer.uint32(/* id 15, wireType 2 =*/122).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified ChargingStationProto message, length delimited. Does not implicitly {@link protobuf.ChargingStationProto.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protobuf.ChargingStationProto
         * @static
         * @param {protobuf.IChargingStationProto} message ChargingStationProto message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ChargingStationProto.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ChargingStationProto message from the specified reader or buffer.
         * @function decode
         * @memberof protobuf.ChargingStationProto
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protobuf.ChargingStationProto} ChargingStationProto
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ChargingStationProto.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.protobuf.ChargingStationProto();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.id = reader.int32();
                        break;
                    }
                case 2: {
                        message.name = reader.string();
                        break;
                    }
                case 3: {
                        message.brandName = reader.string();
                        break;
                    }
                case 4: {
                        message.address = reader.string();
                        break;
                    }
                case 5: {
                        message.coordinates = reader.string();
                        break;
                    }
                case 6: {
                        message.operatorName = reader.string();
                        break;
                    }
                case 7: {
                        message.managerName = reader.string();
                        break;
                    }
                case 8: {
                        message.stationDetails = $root.protobuf.StationDetailsProto.decode(reader, reader.uint32());
                        break;
                    }
                case 9: {
                        message.chargingPoint = $root.protobuf.ChargingPointProto.decode(reader, reader.uint32());
                        break;
                    }
                case 10: {
                        message.twoWheelerStation = $root.google.protobuf.BoolValue.decode(reader, reader.uint32());
                        break;
                    }
                case 11: {
                        message.commissioningDate = reader.string();
                        break;
                    }
                case 12: {
                        message.accessibility = reader.string();
                        break;
                    }
                case 13: {
                        message.observations = reader.string();
                        break;
                    }
                case 14: {
                        message.lastUpdate = reader.string();
                        break;
                    }
                case 15: {
                        message.locationInfo = $root.protobuf.LocationInfoProto.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ChargingStationProto message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protobuf.ChargingStationProto
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protobuf.ChargingStationProto} ChargingStationProto
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ChargingStationProto.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ChargingStationProto message.
         * @function verify
         * @memberof protobuf.ChargingStationProto
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ChargingStationProto.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isInteger(message.id))
                    return "id: integer expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.brandName != null && message.hasOwnProperty("brandName"))
                if (!$util.isString(message.brandName))
                    return "brandName: string expected";
            if (message.address != null && message.hasOwnProperty("address"))
                if (!$util.isString(message.address))
                    return "address: string expected";
            if (message.coordinates != null && message.hasOwnProperty("coordinates"))
                if (!$util.isString(message.coordinates))
                    return "coordinates: string expected";
            if (message.operatorName != null && message.hasOwnProperty("operatorName"))
                if (!$util.isString(message.operatorName))
                    return "operatorName: string expected";
            if (message.managerName != null && message.hasOwnProperty("managerName"))
                if (!$util.isString(message.managerName))
                    return "managerName: string expected";
            if (message.stationDetails != null && message.hasOwnProperty("stationDetails")) {
                let error = $root.protobuf.StationDetailsProto.verify(message.stationDetails);
                if (error)
                    return "stationDetails." + error;
            }
            if (message.chargingPoint != null && message.hasOwnProperty("chargingPoint")) {
                let error = $root.protobuf.ChargingPointProto.verify(message.chargingPoint);
                if (error)
                    return "chargingPoint." + error;
            }
            if (message.twoWheelerStation != null && message.hasOwnProperty("twoWheelerStation")) {
                let error = $root.google.protobuf.BoolValue.verify(message.twoWheelerStation);
                if (error)
                    return "twoWheelerStation." + error;
            }
            if (message.commissioningDate != null && message.hasOwnProperty("commissioningDate"))
                if (!$util.isString(message.commissioningDate))
                    return "commissioningDate: string expected";
            if (message.accessibility != null && message.hasOwnProperty("accessibility"))
                if (!$util.isString(message.accessibility))
                    return "accessibility: string expected";
            if (message.observations != null && message.hasOwnProperty("observations"))
                if (!$util.isString(message.observations))
                    return "observations: string expected";
            if (message.lastUpdate != null && message.hasOwnProperty("lastUpdate"))
                if (!$util.isString(message.lastUpdate))
                    return "lastUpdate: string expected";
            if (message.locationInfo != null && message.hasOwnProperty("locationInfo")) {
                let error = $root.protobuf.LocationInfoProto.verify(message.locationInfo);
                if (error)
                    return "locationInfo." + error;
            }
            return null;
        };

        /**
         * Creates a ChargingStationProto message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protobuf.ChargingStationProto
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protobuf.ChargingStationProto} ChargingStationProto
         */
        ChargingStationProto.fromObject = function fromObject(object) {
            if (object instanceof $root.protobuf.ChargingStationProto)
                return object;
            let message = new $root.protobuf.ChargingStationProto();
            if (object.id != null)
                message.id = object.id | 0;
            if (object.name != null)
                message.name = String(object.name);
            if (object.brandName != null)
                message.brandName = String(object.brandName);
            if (object.address != null)
                message.address = String(object.address);
            if (object.coordinates != null)
                message.coordinates = String(object.coordinates);
            if (object.operatorName != null)
                message.operatorName = String(object.operatorName);
            if (object.managerName != null)
                message.managerName = String(object.managerName);
            if (object.stationDetails != null) {
                if (typeof object.stationDetails !== "object")
                    throw TypeError(".protobuf.ChargingStationProto.stationDetails: object expected");
                message.stationDetails = $root.protobuf.StationDetailsProto.fromObject(object.stationDetails);
            }
            if (object.chargingPoint != null) {
                if (typeof object.chargingPoint !== "object")
                    throw TypeError(".protobuf.ChargingStationProto.chargingPoint: object expected");
                message.chargingPoint = $root.protobuf.ChargingPointProto.fromObject(object.chargingPoint);
            }
            if (object.twoWheelerStation != null) {
                if (typeof object.twoWheelerStation !== "object")
                    throw TypeError(".protobuf.ChargingStationProto.twoWheelerStation: object expected");
                message.twoWheelerStation = $root.google.protobuf.BoolValue.fromObject(object.twoWheelerStation);
            }
            if (object.commissioningDate != null)
                message.commissioningDate = String(object.commissioningDate);
            if (object.accessibility != null)
                message.accessibility = String(object.accessibility);
            if (object.observations != null)
                message.observations = String(object.observations);
            if (object.lastUpdate != null)
                message.lastUpdate = String(object.lastUpdate);
            if (object.locationInfo != null) {
                if (typeof object.locationInfo !== "object")
                    throw TypeError(".protobuf.ChargingStationProto.locationInfo: object expected");
                message.locationInfo = $root.protobuf.LocationInfoProto.fromObject(object.locationInfo);
            }
            return message;
        };

        /**
         * Creates a plain object from a ChargingStationProto message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protobuf.ChargingStationProto
         * @static
         * @param {protobuf.ChargingStationProto} message ChargingStationProto
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ChargingStationProto.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.id = 0;
                object.name = "";
                object.brandName = "";
                object.address = "";
                object.coordinates = "";
                object.operatorName = "";
                object.managerName = "";
                object.stationDetails = null;
                object.chargingPoint = null;
                object.twoWheelerStation = null;
                object.commissioningDate = "";
                object.accessibility = "";
                object.observations = "";
                object.lastUpdate = "";
                object.locationInfo = null;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.brandName != null && message.hasOwnProperty("brandName"))
                object.brandName = message.brandName;
            if (message.address != null && message.hasOwnProperty("address"))
                object.address = message.address;
            if (message.coordinates != null && message.hasOwnProperty("coordinates"))
                object.coordinates = message.coordinates;
            if (message.operatorName != null && message.hasOwnProperty("operatorName"))
                object.operatorName = message.operatorName;
            if (message.managerName != null && message.hasOwnProperty("managerName"))
                object.managerName = message.managerName;
            if (message.stationDetails != null && message.hasOwnProperty("stationDetails"))
                object.stationDetails = $root.protobuf.StationDetailsProto.toObject(message.stationDetails, options);
            if (message.chargingPoint != null && message.hasOwnProperty("chargingPoint"))
                object.chargingPoint = $root.protobuf.ChargingPointProto.toObject(message.chargingPoint, options);
            if (message.twoWheelerStation != null && message.hasOwnProperty("twoWheelerStation"))
                object.twoWheelerStation = $root.google.protobuf.BoolValue.toObject(message.twoWheelerStation, options);
            if (message.commissioningDate != null && message.hasOwnProperty("commissioningDate"))
                object.commissioningDate = message.commissioningDate;
            if (message.accessibility != null && message.hasOwnProperty("accessibility"))
                object.accessibility = message.accessibility;
            if (message.observations != null && message.hasOwnProperty("observations"))
                object.observations = message.observations;
            if (message.lastUpdate != null && message.hasOwnProperty("lastUpdate"))
                object.lastUpdate = message.lastUpdate;
            if (message.locationInfo != null && message.hasOwnProperty("locationInfo"))
                object.locationInfo = $root.protobuf.LocationInfoProto.toObject(message.locationInfo, options);
            return object;
        };

        /**
         * Converts this ChargingStationProto to JSON.
         * @function toJSON
         * @memberof protobuf.ChargingStationProto
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ChargingStationProto.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ChargingStationProto
         * @function getTypeUrl
         * @memberof protobuf.ChargingStationProto
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ChargingStationProto.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/protobuf.ChargingStationProto";
        };

        return ChargingStationProto;
    })();

    protobuf.StationDetailsProto = (function() {

        /**
         * Properties of a StationDetailsProto.
         * @memberof protobuf
         * @interface IStationDetailsProto
         * @property {string|null} [itinerantStationId] StationDetailsProto itinerantStationId
         * @property {string|null} [localStationId] StationDetailsProto localStationId
         * @property {string|null} [implantation] StationDetailsProto implantation
         * @property {google.protobuf.IInt32Value|null} [numberOfChargingPoints] StationDetailsProto numberOfChargingPoints
         * @property {google.protobuf.IBoolValue|null} [reservationRequired] StationDetailsProto reservationRequired
         * @property {string|null} [accessConditions] StationDetailsProto accessConditions
         * @property {string|null} [operatingHours] StationDetailsProto operatingHours
         * @property {string|null} [deliveryPointNumber] StationDetailsProto deliveryPointNumber
         * @property {string|null} [templateRestrictions] StationDetailsProto templateRestrictions
         */

        /**
         * Constructs a new StationDetailsProto.
         * @memberof protobuf
         * @classdesc Represents a StationDetailsProto.
         * @implements IStationDetailsProto
         * @constructor
         * @param {protobuf.IStationDetailsProto=} [properties] Properties to set
         */
        function StationDetailsProto(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * StationDetailsProto itinerantStationId.
         * @member {string} itinerantStationId
         * @memberof protobuf.StationDetailsProto
         * @instance
         */
        StationDetailsProto.prototype.itinerantStationId = "";

        /**
         * StationDetailsProto localStationId.
         * @member {string} localStationId
         * @memberof protobuf.StationDetailsProto
         * @instance
         */
        StationDetailsProto.prototype.localStationId = "";

        /**
         * StationDetailsProto implantation.
         * @member {string} implantation
         * @memberof protobuf.StationDetailsProto
         * @instance
         */
        StationDetailsProto.prototype.implantation = "";

        /**
         * StationDetailsProto numberOfChargingPoints.
         * @member {google.protobuf.IInt32Value|null|undefined} numberOfChargingPoints
         * @memberof protobuf.StationDetailsProto
         * @instance
         */
        StationDetailsProto.prototype.numberOfChargingPoints = null;

        /**
         * StationDetailsProto reservationRequired.
         * @member {google.protobuf.IBoolValue|null|undefined} reservationRequired
         * @memberof protobuf.StationDetailsProto
         * @instance
         */
        StationDetailsProto.prototype.reservationRequired = null;

        /**
         * StationDetailsProto accessConditions.
         * @member {string} accessConditions
         * @memberof protobuf.StationDetailsProto
         * @instance
         */
        StationDetailsProto.prototype.accessConditions = "";

        /**
         * StationDetailsProto operatingHours.
         * @member {string} operatingHours
         * @memberof protobuf.StationDetailsProto
         * @instance
         */
        StationDetailsProto.prototype.operatingHours = "";

        /**
         * StationDetailsProto deliveryPointNumber.
         * @member {string} deliveryPointNumber
         * @memberof protobuf.StationDetailsProto
         * @instance
         */
        StationDetailsProto.prototype.deliveryPointNumber = "";

        /**
         * StationDetailsProto templateRestrictions.
         * @member {string} templateRestrictions
         * @memberof protobuf.StationDetailsProto
         * @instance
         */
        StationDetailsProto.prototype.templateRestrictions = "";

        /**
         * Creates a new StationDetailsProto instance using the specified properties.
         * @function create
         * @memberof protobuf.StationDetailsProto
         * @static
         * @param {protobuf.IStationDetailsProto=} [properties] Properties to set
         * @returns {protobuf.StationDetailsProto} StationDetailsProto instance
         */
        StationDetailsProto.create = function create(properties) {
            return new StationDetailsProto(properties);
        };

        /**
         * Encodes the specified StationDetailsProto message. Does not implicitly {@link protobuf.StationDetailsProto.verify|verify} messages.
         * @function encode
         * @memberof protobuf.StationDetailsProto
         * @static
         * @param {protobuf.IStationDetailsProto} message StationDetailsProto message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StationDetailsProto.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.itinerantStationId != null && Object.hasOwnProperty.call(message, "itinerantStationId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.itinerantStationId);
            if (message.localStationId != null && Object.hasOwnProperty.call(message, "localStationId"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.localStationId);
            if (message.implantation != null && Object.hasOwnProperty.call(message, "implantation"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.implantation);
            if (message.numberOfChargingPoints != null && Object.hasOwnProperty.call(message, "numberOfChargingPoints"))
                $root.google.protobuf.Int32Value.encode(message.numberOfChargingPoints, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.reservationRequired != null && Object.hasOwnProperty.call(message, "reservationRequired"))
                $root.google.protobuf.BoolValue.encode(message.reservationRequired, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            if (message.accessConditions != null && Object.hasOwnProperty.call(message, "accessConditions"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.accessConditions);
            if (message.operatingHours != null && Object.hasOwnProperty.call(message, "operatingHours"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.operatingHours);
            if (message.deliveryPointNumber != null && Object.hasOwnProperty.call(message, "deliveryPointNumber"))
                writer.uint32(/* id 8, wireType 2 =*/66).string(message.deliveryPointNumber);
            if (message.templateRestrictions != null && Object.hasOwnProperty.call(message, "templateRestrictions"))
                writer.uint32(/* id 9, wireType 2 =*/74).string(message.templateRestrictions);
            return writer;
        };

        /**
         * Encodes the specified StationDetailsProto message, length delimited. Does not implicitly {@link protobuf.StationDetailsProto.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protobuf.StationDetailsProto
         * @static
         * @param {protobuf.IStationDetailsProto} message StationDetailsProto message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StationDetailsProto.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a StationDetailsProto message from the specified reader or buffer.
         * @function decode
         * @memberof protobuf.StationDetailsProto
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protobuf.StationDetailsProto} StationDetailsProto
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StationDetailsProto.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.protobuf.StationDetailsProto();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.itinerantStationId = reader.string();
                        break;
                    }
                case 2: {
                        message.localStationId = reader.string();
                        break;
                    }
                case 3: {
                        message.implantation = reader.string();
                        break;
                    }
                case 4: {
                        message.numberOfChargingPoints = $root.google.protobuf.Int32Value.decode(reader, reader.uint32());
                        break;
                    }
                case 5: {
                        message.reservationRequired = $root.google.protobuf.BoolValue.decode(reader, reader.uint32());
                        break;
                    }
                case 6: {
                        message.accessConditions = reader.string();
                        break;
                    }
                case 7: {
                        message.operatingHours = reader.string();
                        break;
                    }
                case 8: {
                        message.deliveryPointNumber = reader.string();
                        break;
                    }
                case 9: {
                        message.templateRestrictions = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a StationDetailsProto message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protobuf.StationDetailsProto
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protobuf.StationDetailsProto} StationDetailsProto
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StationDetailsProto.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a StationDetailsProto message.
         * @function verify
         * @memberof protobuf.StationDetailsProto
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        StationDetailsProto.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.itinerantStationId != null && message.hasOwnProperty("itinerantStationId"))
                if (!$util.isString(message.itinerantStationId))
                    return "itinerantStationId: string expected";
            if (message.localStationId != null && message.hasOwnProperty("localStationId"))
                if (!$util.isString(message.localStationId))
                    return "localStationId: string expected";
            if (message.implantation != null && message.hasOwnProperty("implantation"))
                if (!$util.isString(message.implantation))
                    return "implantation: string expected";
            if (message.numberOfChargingPoints != null && message.hasOwnProperty("numberOfChargingPoints")) {
                let error = $root.google.protobuf.Int32Value.verify(message.numberOfChargingPoints);
                if (error)
                    return "numberOfChargingPoints." + error;
            }
            if (message.reservationRequired != null && message.hasOwnProperty("reservationRequired")) {
                let error = $root.google.protobuf.BoolValue.verify(message.reservationRequired);
                if (error)
                    return "reservationRequired." + error;
            }
            if (message.accessConditions != null && message.hasOwnProperty("accessConditions"))
                if (!$util.isString(message.accessConditions))
                    return "accessConditions: string expected";
            if (message.operatingHours != null && message.hasOwnProperty("operatingHours"))
                if (!$util.isString(message.operatingHours))
                    return "operatingHours: string expected";
            if (message.deliveryPointNumber != null && message.hasOwnProperty("deliveryPointNumber"))
                if (!$util.isString(message.deliveryPointNumber))
                    return "deliveryPointNumber: string expected";
            if (message.templateRestrictions != null && message.hasOwnProperty("templateRestrictions"))
                if (!$util.isString(message.templateRestrictions))
                    return "templateRestrictions: string expected";
            return null;
        };

        /**
         * Creates a StationDetailsProto message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protobuf.StationDetailsProto
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protobuf.StationDetailsProto} StationDetailsProto
         */
        StationDetailsProto.fromObject = function fromObject(object) {
            if (object instanceof $root.protobuf.StationDetailsProto)
                return object;
            let message = new $root.protobuf.StationDetailsProto();
            if (object.itinerantStationId != null)
                message.itinerantStationId = String(object.itinerantStationId);
            if (object.localStationId != null)
                message.localStationId = String(object.localStationId);
            if (object.implantation != null)
                message.implantation = String(object.implantation);
            if (object.numberOfChargingPoints != null) {
                if (typeof object.numberOfChargingPoints !== "object")
                    throw TypeError(".protobuf.StationDetailsProto.numberOfChargingPoints: object expected");
                message.numberOfChargingPoints = $root.google.protobuf.Int32Value.fromObject(object.numberOfChargingPoints);
            }
            if (object.reservationRequired != null) {
                if (typeof object.reservationRequired !== "object")
                    throw TypeError(".protobuf.StationDetailsProto.reservationRequired: object expected");
                message.reservationRequired = $root.google.protobuf.BoolValue.fromObject(object.reservationRequired);
            }
            if (object.accessConditions != null)
                message.accessConditions = String(object.accessConditions);
            if (object.operatingHours != null)
                message.operatingHours = String(object.operatingHours);
            if (object.deliveryPointNumber != null)
                message.deliveryPointNumber = String(object.deliveryPointNumber);
            if (object.templateRestrictions != null)
                message.templateRestrictions = String(object.templateRestrictions);
            return message;
        };

        /**
         * Creates a plain object from a StationDetailsProto message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protobuf.StationDetailsProto
         * @static
         * @param {protobuf.StationDetailsProto} message StationDetailsProto
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        StationDetailsProto.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.itinerantStationId = "";
                object.localStationId = "";
                object.implantation = "";
                object.numberOfChargingPoints = null;
                object.reservationRequired = null;
                object.accessConditions = "";
                object.operatingHours = "";
                object.deliveryPointNumber = "";
                object.templateRestrictions = "";
            }
            if (message.itinerantStationId != null && message.hasOwnProperty("itinerantStationId"))
                object.itinerantStationId = message.itinerantStationId;
            if (message.localStationId != null && message.hasOwnProperty("localStationId"))
                object.localStationId = message.localStationId;
            if (message.implantation != null && message.hasOwnProperty("implantation"))
                object.implantation = message.implantation;
            if (message.numberOfChargingPoints != null && message.hasOwnProperty("numberOfChargingPoints"))
                object.numberOfChargingPoints = $root.google.protobuf.Int32Value.toObject(message.numberOfChargingPoints, options);
            if (message.reservationRequired != null && message.hasOwnProperty("reservationRequired"))
                object.reservationRequired = $root.google.protobuf.BoolValue.toObject(message.reservationRequired, options);
            if (message.accessConditions != null && message.hasOwnProperty("accessConditions"))
                object.accessConditions = message.accessConditions;
            if (message.operatingHours != null && message.hasOwnProperty("operatingHours"))
                object.operatingHours = message.operatingHours;
            if (message.deliveryPointNumber != null && message.hasOwnProperty("deliveryPointNumber"))
                object.deliveryPointNumber = message.deliveryPointNumber;
            if (message.templateRestrictions != null && message.hasOwnProperty("templateRestrictions"))
                object.templateRestrictions = message.templateRestrictions;
            return object;
        };

        /**
         * Converts this StationDetailsProto to JSON.
         * @function toJSON
         * @memberof protobuf.StationDetailsProto
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        StationDetailsProto.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for StationDetailsProto
         * @function getTypeUrl
         * @memberof protobuf.StationDetailsProto
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        StationDetailsProto.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/protobuf.StationDetailsProto";
        };

        return StationDetailsProto;
    })();

    protobuf.ChargingPointProto = (function() {

        /**
         * Properties of a ChargingPointProto.
         * @memberof protobuf
         * @interface IChargingPointProto
         * @property {string|null} [itinerantId] ChargingPointProto itinerantId
         * @property {string|null} [localId] ChargingPointProto localId
         * @property {google.protobuf.IDoubleValue|null} [nominalPower] ChargingPointProto nominalPower
         * @property {protobuf.IChargingConnectorTypesProto|null} [connectorTypes] ChargingPointProto connectorTypes
         * @property {google.protobuf.IBoolValue|null} [isFree] ChargingPointProto isFree
         * @property {protobuf.IPaymentOptionsProto|null} [paymentOptions] ChargingPointProto paymentOptions
         * @property {string|null} [pricing] ChargingPointProto pricing
         */

        /**
         * Constructs a new ChargingPointProto.
         * @memberof protobuf
         * @classdesc Represents a ChargingPointProto.
         * @implements IChargingPointProto
         * @constructor
         * @param {protobuf.IChargingPointProto=} [properties] Properties to set
         */
        function ChargingPointProto(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ChargingPointProto itinerantId.
         * @member {string} itinerantId
         * @memberof protobuf.ChargingPointProto
         * @instance
         */
        ChargingPointProto.prototype.itinerantId = "";

        /**
         * ChargingPointProto localId.
         * @member {string} localId
         * @memberof protobuf.ChargingPointProto
         * @instance
         */
        ChargingPointProto.prototype.localId = "";

        /**
         * ChargingPointProto nominalPower.
         * @member {google.protobuf.IDoubleValue|null|undefined} nominalPower
         * @memberof protobuf.ChargingPointProto
         * @instance
         */
        ChargingPointProto.prototype.nominalPower = null;

        /**
         * ChargingPointProto connectorTypes.
         * @member {protobuf.IChargingConnectorTypesProto|null|undefined} connectorTypes
         * @memberof protobuf.ChargingPointProto
         * @instance
         */
        ChargingPointProto.prototype.connectorTypes = null;

        /**
         * ChargingPointProto isFree.
         * @member {google.protobuf.IBoolValue|null|undefined} isFree
         * @memberof protobuf.ChargingPointProto
         * @instance
         */
        ChargingPointProto.prototype.isFree = null;

        /**
         * ChargingPointProto paymentOptions.
         * @member {protobuf.IPaymentOptionsProto|null|undefined} paymentOptions
         * @memberof protobuf.ChargingPointProto
         * @instance
         */
        ChargingPointProto.prototype.paymentOptions = null;

        /**
         * ChargingPointProto pricing.
         * @member {string} pricing
         * @memberof protobuf.ChargingPointProto
         * @instance
         */
        ChargingPointProto.prototype.pricing = "";

        /**
         * Creates a new ChargingPointProto instance using the specified properties.
         * @function create
         * @memberof protobuf.ChargingPointProto
         * @static
         * @param {protobuf.IChargingPointProto=} [properties] Properties to set
         * @returns {protobuf.ChargingPointProto} ChargingPointProto instance
         */
        ChargingPointProto.create = function create(properties) {
            return new ChargingPointProto(properties);
        };

        /**
         * Encodes the specified ChargingPointProto message. Does not implicitly {@link protobuf.ChargingPointProto.verify|verify} messages.
         * @function encode
         * @memberof protobuf.ChargingPointProto
         * @static
         * @param {protobuf.IChargingPointProto} message ChargingPointProto message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ChargingPointProto.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.itinerantId != null && Object.hasOwnProperty.call(message, "itinerantId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.itinerantId);
            if (message.localId != null && Object.hasOwnProperty.call(message, "localId"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.localId);
            if (message.nominalPower != null && Object.hasOwnProperty.call(message, "nominalPower"))
                $root.google.protobuf.DoubleValue.encode(message.nominalPower, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.connectorTypes != null && Object.hasOwnProperty.call(message, "connectorTypes"))
                $root.protobuf.ChargingConnectorTypesProto.encode(message.connectorTypes, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.isFree != null && Object.hasOwnProperty.call(message, "isFree"))
                $root.google.protobuf.BoolValue.encode(message.isFree, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            if (message.paymentOptions != null && Object.hasOwnProperty.call(message, "paymentOptions"))
                $root.protobuf.PaymentOptionsProto.encode(message.paymentOptions, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            if (message.pricing != null && Object.hasOwnProperty.call(message, "pricing"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.pricing);
            return writer;
        };

        /**
         * Encodes the specified ChargingPointProto message, length delimited. Does not implicitly {@link protobuf.ChargingPointProto.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protobuf.ChargingPointProto
         * @static
         * @param {protobuf.IChargingPointProto} message ChargingPointProto message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ChargingPointProto.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ChargingPointProto message from the specified reader or buffer.
         * @function decode
         * @memberof protobuf.ChargingPointProto
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protobuf.ChargingPointProto} ChargingPointProto
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ChargingPointProto.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.protobuf.ChargingPointProto();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.itinerantId = reader.string();
                        break;
                    }
                case 2: {
                        message.localId = reader.string();
                        break;
                    }
                case 3: {
                        message.nominalPower = $root.google.protobuf.DoubleValue.decode(reader, reader.uint32());
                        break;
                    }
                case 4: {
                        message.connectorTypes = $root.protobuf.ChargingConnectorTypesProto.decode(reader, reader.uint32());
                        break;
                    }
                case 5: {
                        message.isFree = $root.google.protobuf.BoolValue.decode(reader, reader.uint32());
                        break;
                    }
                case 6: {
                        message.paymentOptions = $root.protobuf.PaymentOptionsProto.decode(reader, reader.uint32());
                        break;
                    }
                case 7: {
                        message.pricing = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ChargingPointProto message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protobuf.ChargingPointProto
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protobuf.ChargingPointProto} ChargingPointProto
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ChargingPointProto.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ChargingPointProto message.
         * @function verify
         * @memberof protobuf.ChargingPointProto
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ChargingPointProto.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.itinerantId != null && message.hasOwnProperty("itinerantId"))
                if (!$util.isString(message.itinerantId))
                    return "itinerantId: string expected";
            if (message.localId != null && message.hasOwnProperty("localId"))
                if (!$util.isString(message.localId))
                    return "localId: string expected";
            if (message.nominalPower != null && message.hasOwnProperty("nominalPower")) {
                let error = $root.google.protobuf.DoubleValue.verify(message.nominalPower);
                if (error)
                    return "nominalPower." + error;
            }
            if (message.connectorTypes != null && message.hasOwnProperty("connectorTypes")) {
                let error = $root.protobuf.ChargingConnectorTypesProto.verify(message.connectorTypes);
                if (error)
                    return "connectorTypes." + error;
            }
            if (message.isFree != null && message.hasOwnProperty("isFree")) {
                let error = $root.google.protobuf.BoolValue.verify(message.isFree);
                if (error)
                    return "isFree." + error;
            }
            if (message.paymentOptions != null && message.hasOwnProperty("paymentOptions")) {
                let error = $root.protobuf.PaymentOptionsProto.verify(message.paymentOptions);
                if (error)
                    return "paymentOptions." + error;
            }
            if (message.pricing != null && message.hasOwnProperty("pricing"))
                if (!$util.isString(message.pricing))
                    return "pricing: string expected";
            return null;
        };

        /**
         * Creates a ChargingPointProto message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protobuf.ChargingPointProto
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protobuf.ChargingPointProto} ChargingPointProto
         */
        ChargingPointProto.fromObject = function fromObject(object) {
            if (object instanceof $root.protobuf.ChargingPointProto)
                return object;
            let message = new $root.protobuf.ChargingPointProto();
            if (object.itinerantId != null)
                message.itinerantId = String(object.itinerantId);
            if (object.localId != null)
                message.localId = String(object.localId);
            if (object.nominalPower != null) {
                if (typeof object.nominalPower !== "object")
                    throw TypeError(".protobuf.ChargingPointProto.nominalPower: object expected");
                message.nominalPower = $root.google.protobuf.DoubleValue.fromObject(object.nominalPower);
            }
            if (object.connectorTypes != null) {
                if (typeof object.connectorTypes !== "object")
                    throw TypeError(".protobuf.ChargingPointProto.connectorTypes: object expected");
                message.connectorTypes = $root.protobuf.ChargingConnectorTypesProto.fromObject(object.connectorTypes);
            }
            if (object.isFree != null) {
                if (typeof object.isFree !== "object")
                    throw TypeError(".protobuf.ChargingPointProto.isFree: object expected");
                message.isFree = $root.google.protobuf.BoolValue.fromObject(object.isFree);
            }
            if (object.paymentOptions != null) {
                if (typeof object.paymentOptions !== "object")
                    throw TypeError(".protobuf.ChargingPointProto.paymentOptions: object expected");
                message.paymentOptions = $root.protobuf.PaymentOptionsProto.fromObject(object.paymentOptions);
            }
            if (object.pricing != null)
                message.pricing = String(object.pricing);
            return message;
        };

        /**
         * Creates a plain object from a ChargingPointProto message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protobuf.ChargingPointProto
         * @static
         * @param {protobuf.ChargingPointProto} message ChargingPointProto
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ChargingPointProto.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.itinerantId = "";
                object.localId = "";
                object.nominalPower = null;
                object.connectorTypes = null;
                object.isFree = null;
                object.paymentOptions = null;
                object.pricing = "";
            }
            if (message.itinerantId != null && message.hasOwnProperty("itinerantId"))
                object.itinerantId = message.itinerantId;
            if (message.localId != null && message.hasOwnProperty("localId"))
                object.localId = message.localId;
            if (message.nominalPower != null && message.hasOwnProperty("nominalPower"))
                object.nominalPower = $root.google.protobuf.DoubleValue.toObject(message.nominalPower, options);
            if (message.connectorTypes != null && message.hasOwnProperty("connectorTypes"))
                object.connectorTypes = $root.protobuf.ChargingConnectorTypesProto.toObject(message.connectorTypes, options);
            if (message.isFree != null && message.hasOwnProperty("isFree"))
                object.isFree = $root.google.protobuf.BoolValue.toObject(message.isFree, options);
            if (message.paymentOptions != null && message.hasOwnProperty("paymentOptions"))
                object.paymentOptions = $root.protobuf.PaymentOptionsProto.toObject(message.paymentOptions, options);
            if (message.pricing != null && message.hasOwnProperty("pricing"))
                object.pricing = message.pricing;
            return object;
        };

        /**
         * Converts this ChargingPointProto to JSON.
         * @function toJSON
         * @memberof protobuf.ChargingPointProto
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ChargingPointProto.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ChargingPointProto
         * @function getTypeUrl
         * @memberof protobuf.ChargingPointProto
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ChargingPointProto.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/protobuf.ChargingPointProto";
        };

        return ChargingPointProto;
    })();

    protobuf.ChargingConnectorTypesProto = (function() {

        /**
         * Properties of a ChargingConnectorTypesProto.
         * @memberof protobuf
         * @interface IChargingConnectorTypesProto
         * @property {google.protobuf.IBoolValue|null} [typeEF] ChargingConnectorTypesProto typeEF
         * @property {google.protobuf.IBoolValue|null} [type2] ChargingConnectorTypesProto type2
         * @property {google.protobuf.IBoolValue|null} [comboCCS] ChargingConnectorTypesProto comboCCS
         * @property {google.protobuf.IBoolValue|null} [chademo] ChargingConnectorTypesProto chademo
         * @property {google.protobuf.IBoolValue|null} [other] ChargingConnectorTypesProto other
         * @property {google.protobuf.IBoolValue|null} [attachedCableT2] ChargingConnectorTypesProto attachedCableT2
         * @property {string|null} [connectionType] ChargingConnectorTypesProto connectionType
         */

        /**
         * Constructs a new ChargingConnectorTypesProto.
         * @memberof protobuf
         * @classdesc Represents a ChargingConnectorTypesProto.
         * @implements IChargingConnectorTypesProto
         * @constructor
         * @param {protobuf.IChargingConnectorTypesProto=} [properties] Properties to set
         */
        function ChargingConnectorTypesProto(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ChargingConnectorTypesProto typeEF.
         * @member {google.protobuf.IBoolValue|null|undefined} typeEF
         * @memberof protobuf.ChargingConnectorTypesProto
         * @instance
         */
        ChargingConnectorTypesProto.prototype.typeEF = null;

        /**
         * ChargingConnectorTypesProto type2.
         * @member {google.protobuf.IBoolValue|null|undefined} type2
         * @memberof protobuf.ChargingConnectorTypesProto
         * @instance
         */
        ChargingConnectorTypesProto.prototype.type2 = null;

        /**
         * ChargingConnectorTypesProto comboCCS.
         * @member {google.protobuf.IBoolValue|null|undefined} comboCCS
         * @memberof protobuf.ChargingConnectorTypesProto
         * @instance
         */
        ChargingConnectorTypesProto.prototype.comboCCS = null;

        /**
         * ChargingConnectorTypesProto chademo.
         * @member {google.protobuf.IBoolValue|null|undefined} chademo
         * @memberof protobuf.ChargingConnectorTypesProto
         * @instance
         */
        ChargingConnectorTypesProto.prototype.chademo = null;

        /**
         * ChargingConnectorTypesProto other.
         * @member {google.protobuf.IBoolValue|null|undefined} other
         * @memberof protobuf.ChargingConnectorTypesProto
         * @instance
         */
        ChargingConnectorTypesProto.prototype.other = null;

        /**
         * ChargingConnectorTypesProto attachedCableT2.
         * @member {google.protobuf.IBoolValue|null|undefined} attachedCableT2
         * @memberof protobuf.ChargingConnectorTypesProto
         * @instance
         */
        ChargingConnectorTypesProto.prototype.attachedCableT2 = null;

        /**
         * ChargingConnectorTypesProto connectionType.
         * @member {string} connectionType
         * @memberof protobuf.ChargingConnectorTypesProto
         * @instance
         */
        ChargingConnectorTypesProto.prototype.connectionType = "";

        /**
         * Creates a new ChargingConnectorTypesProto instance using the specified properties.
         * @function create
         * @memberof protobuf.ChargingConnectorTypesProto
         * @static
         * @param {protobuf.IChargingConnectorTypesProto=} [properties] Properties to set
         * @returns {protobuf.ChargingConnectorTypesProto} ChargingConnectorTypesProto instance
         */
        ChargingConnectorTypesProto.create = function create(properties) {
            return new ChargingConnectorTypesProto(properties);
        };

        /**
         * Encodes the specified ChargingConnectorTypesProto message. Does not implicitly {@link protobuf.ChargingConnectorTypesProto.verify|verify} messages.
         * @function encode
         * @memberof protobuf.ChargingConnectorTypesProto
         * @static
         * @param {protobuf.IChargingConnectorTypesProto} message ChargingConnectorTypesProto message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ChargingConnectorTypesProto.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.typeEF != null && Object.hasOwnProperty.call(message, "typeEF"))
                $root.google.protobuf.BoolValue.encode(message.typeEF, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.type2 != null && Object.hasOwnProperty.call(message, "type2"))
                $root.google.protobuf.BoolValue.encode(message.type2, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.comboCCS != null && Object.hasOwnProperty.call(message, "comboCCS"))
                $root.google.protobuf.BoolValue.encode(message.comboCCS, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.chademo != null && Object.hasOwnProperty.call(message, "chademo"))
                $root.google.protobuf.BoolValue.encode(message.chademo, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.other != null && Object.hasOwnProperty.call(message, "other"))
                $root.google.protobuf.BoolValue.encode(message.other, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            if (message.attachedCableT2 != null && Object.hasOwnProperty.call(message, "attachedCableT2"))
                $root.google.protobuf.BoolValue.encode(message.attachedCableT2, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            if (message.connectionType != null && Object.hasOwnProperty.call(message, "connectionType"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.connectionType);
            return writer;
        };

        /**
         * Encodes the specified ChargingConnectorTypesProto message, length delimited. Does not implicitly {@link protobuf.ChargingConnectorTypesProto.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protobuf.ChargingConnectorTypesProto
         * @static
         * @param {protobuf.IChargingConnectorTypesProto} message ChargingConnectorTypesProto message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ChargingConnectorTypesProto.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ChargingConnectorTypesProto message from the specified reader or buffer.
         * @function decode
         * @memberof protobuf.ChargingConnectorTypesProto
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protobuf.ChargingConnectorTypesProto} ChargingConnectorTypesProto
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ChargingConnectorTypesProto.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.protobuf.ChargingConnectorTypesProto();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.typeEF = $root.google.protobuf.BoolValue.decode(reader, reader.uint32());
                        break;
                    }
                case 2: {
                        message.type2 = $root.google.protobuf.BoolValue.decode(reader, reader.uint32());
                        break;
                    }
                case 3: {
                        message.comboCCS = $root.google.protobuf.BoolValue.decode(reader, reader.uint32());
                        break;
                    }
                case 4: {
                        message.chademo = $root.google.protobuf.BoolValue.decode(reader, reader.uint32());
                        break;
                    }
                case 5: {
                        message.other = $root.google.protobuf.BoolValue.decode(reader, reader.uint32());
                        break;
                    }
                case 6: {
                        message.attachedCableT2 = $root.google.protobuf.BoolValue.decode(reader, reader.uint32());
                        break;
                    }
                case 7: {
                        message.connectionType = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ChargingConnectorTypesProto message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protobuf.ChargingConnectorTypesProto
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protobuf.ChargingConnectorTypesProto} ChargingConnectorTypesProto
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ChargingConnectorTypesProto.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ChargingConnectorTypesProto message.
         * @function verify
         * @memberof protobuf.ChargingConnectorTypesProto
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ChargingConnectorTypesProto.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.typeEF != null && message.hasOwnProperty("typeEF")) {
                let error = $root.google.protobuf.BoolValue.verify(message.typeEF);
                if (error)
                    return "typeEF." + error;
            }
            if (message.type2 != null && message.hasOwnProperty("type2")) {
                let error = $root.google.protobuf.BoolValue.verify(message.type2);
                if (error)
                    return "type2." + error;
            }
            if (message.comboCCS != null && message.hasOwnProperty("comboCCS")) {
                let error = $root.google.protobuf.BoolValue.verify(message.comboCCS);
                if (error)
                    return "comboCCS." + error;
            }
            if (message.chademo != null && message.hasOwnProperty("chademo")) {
                let error = $root.google.protobuf.BoolValue.verify(message.chademo);
                if (error)
                    return "chademo." + error;
            }
            if (message.other != null && message.hasOwnProperty("other")) {
                let error = $root.google.protobuf.BoolValue.verify(message.other);
                if (error)
                    return "other." + error;
            }
            if (message.attachedCableT2 != null && message.hasOwnProperty("attachedCableT2")) {
                let error = $root.google.protobuf.BoolValue.verify(message.attachedCableT2);
                if (error)
                    return "attachedCableT2." + error;
            }
            if (message.connectionType != null && message.hasOwnProperty("connectionType"))
                if (!$util.isString(message.connectionType))
                    return "connectionType: string expected";
            return null;
        };

        /**
         * Creates a ChargingConnectorTypesProto message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protobuf.ChargingConnectorTypesProto
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protobuf.ChargingConnectorTypesProto} ChargingConnectorTypesProto
         */
        ChargingConnectorTypesProto.fromObject = function fromObject(object) {
            if (object instanceof $root.protobuf.ChargingConnectorTypesProto)
                return object;
            let message = new $root.protobuf.ChargingConnectorTypesProto();
            if (object.typeEF != null) {
                if (typeof object.typeEF !== "object")
                    throw TypeError(".protobuf.ChargingConnectorTypesProto.typeEF: object expected");
                message.typeEF = $root.google.protobuf.BoolValue.fromObject(object.typeEF);
            }
            if (object.type2 != null) {
                if (typeof object.type2 !== "object")
                    throw TypeError(".protobuf.ChargingConnectorTypesProto.type2: object expected");
                message.type2 = $root.google.protobuf.BoolValue.fromObject(object.type2);
            }
            if (object.comboCCS != null) {
                if (typeof object.comboCCS !== "object")
                    throw TypeError(".protobuf.ChargingConnectorTypesProto.comboCCS: object expected");
                message.comboCCS = $root.google.protobuf.BoolValue.fromObject(object.comboCCS);
            }
            if (object.chademo != null) {
                if (typeof object.chademo !== "object")
                    throw TypeError(".protobuf.ChargingConnectorTypesProto.chademo: object expected");
                message.chademo = $root.google.protobuf.BoolValue.fromObject(object.chademo);
            }
            if (object.other != null) {
                if (typeof object.other !== "object")
                    throw TypeError(".protobuf.ChargingConnectorTypesProto.other: object expected");
                message.other = $root.google.protobuf.BoolValue.fromObject(object.other);
            }
            if (object.attachedCableT2 != null) {
                if (typeof object.attachedCableT2 !== "object")
                    throw TypeError(".protobuf.ChargingConnectorTypesProto.attachedCableT2: object expected");
                message.attachedCableT2 = $root.google.protobuf.BoolValue.fromObject(object.attachedCableT2);
            }
            if (object.connectionType != null)
                message.connectionType = String(object.connectionType);
            return message;
        };

        /**
         * Creates a plain object from a ChargingConnectorTypesProto message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protobuf.ChargingConnectorTypesProto
         * @static
         * @param {protobuf.ChargingConnectorTypesProto} message ChargingConnectorTypesProto
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ChargingConnectorTypesProto.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.typeEF = null;
                object.type2 = null;
                object.comboCCS = null;
                object.chademo = null;
                object.other = null;
                object.attachedCableT2 = null;
                object.connectionType = "";
            }
            if (message.typeEF != null && message.hasOwnProperty("typeEF"))
                object.typeEF = $root.google.protobuf.BoolValue.toObject(message.typeEF, options);
            if (message.type2 != null && message.hasOwnProperty("type2"))
                object.type2 = $root.google.protobuf.BoolValue.toObject(message.type2, options);
            if (message.comboCCS != null && message.hasOwnProperty("comboCCS"))
                object.comboCCS = $root.google.protobuf.BoolValue.toObject(message.comboCCS, options);
            if (message.chademo != null && message.hasOwnProperty("chademo"))
                object.chademo = $root.google.protobuf.BoolValue.toObject(message.chademo, options);
            if (message.other != null && message.hasOwnProperty("other"))
                object.other = $root.google.protobuf.BoolValue.toObject(message.other, options);
            if (message.attachedCableT2 != null && message.hasOwnProperty("attachedCableT2"))
                object.attachedCableT2 = $root.google.protobuf.BoolValue.toObject(message.attachedCableT2, options);
            if (message.connectionType != null && message.hasOwnProperty("connectionType"))
                object.connectionType = message.connectionType;
            return object;
        };

        /**
         * Converts this ChargingConnectorTypesProto to JSON.
         * @function toJSON
         * @memberof protobuf.ChargingConnectorTypesProto
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ChargingConnectorTypesProto.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ChargingConnectorTypesProto
         * @function getTypeUrl
         * @memberof protobuf.ChargingConnectorTypesProto
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ChargingConnectorTypesProto.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/protobuf.ChargingConnectorTypesProto";
        };

        return ChargingConnectorTypesProto;
    })();

    protobuf.PaymentOptionsProto = (function() {

        /**
         * Properties of a PaymentOptionsProto.
         * @memberof protobuf
         * @interface IPaymentOptionsProto
         * @property {google.protobuf.IBoolValue|null} [payPerUse] PaymentOptionsProto payPerUse
         * @property {string|null} [creditCardPayment] PaymentOptionsProto creditCardPayment
         * @property {google.protobuf.IBoolValue|null} [otherPaymentMethods] PaymentOptionsProto otherPaymentMethods
         */

        /**
         * Constructs a new PaymentOptionsProto.
         * @memberof protobuf
         * @classdesc Represents a PaymentOptionsProto.
         * @implements IPaymentOptionsProto
         * @constructor
         * @param {protobuf.IPaymentOptionsProto=} [properties] Properties to set
         */
        function PaymentOptionsProto(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PaymentOptionsProto payPerUse.
         * @member {google.protobuf.IBoolValue|null|undefined} payPerUse
         * @memberof protobuf.PaymentOptionsProto
         * @instance
         */
        PaymentOptionsProto.prototype.payPerUse = null;

        /**
         * PaymentOptionsProto creditCardPayment.
         * @member {string} creditCardPayment
         * @memberof protobuf.PaymentOptionsProto
         * @instance
         */
        PaymentOptionsProto.prototype.creditCardPayment = "";

        /**
         * PaymentOptionsProto otherPaymentMethods.
         * @member {google.protobuf.IBoolValue|null|undefined} otherPaymentMethods
         * @memberof protobuf.PaymentOptionsProto
         * @instance
         */
        PaymentOptionsProto.prototype.otherPaymentMethods = null;

        /**
         * Creates a new PaymentOptionsProto instance using the specified properties.
         * @function create
         * @memberof protobuf.PaymentOptionsProto
         * @static
         * @param {protobuf.IPaymentOptionsProto=} [properties] Properties to set
         * @returns {protobuf.PaymentOptionsProto} PaymentOptionsProto instance
         */
        PaymentOptionsProto.create = function create(properties) {
            return new PaymentOptionsProto(properties);
        };

        /**
         * Encodes the specified PaymentOptionsProto message. Does not implicitly {@link protobuf.PaymentOptionsProto.verify|verify} messages.
         * @function encode
         * @memberof protobuf.PaymentOptionsProto
         * @static
         * @param {protobuf.IPaymentOptionsProto} message PaymentOptionsProto message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PaymentOptionsProto.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.payPerUse != null && Object.hasOwnProperty.call(message, "payPerUse"))
                $root.google.protobuf.BoolValue.encode(message.payPerUse, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.creditCardPayment != null && Object.hasOwnProperty.call(message, "creditCardPayment"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.creditCardPayment);
            if (message.otherPaymentMethods != null && Object.hasOwnProperty.call(message, "otherPaymentMethods"))
                $root.google.protobuf.BoolValue.encode(message.otherPaymentMethods, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified PaymentOptionsProto message, length delimited. Does not implicitly {@link protobuf.PaymentOptionsProto.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protobuf.PaymentOptionsProto
         * @static
         * @param {protobuf.IPaymentOptionsProto} message PaymentOptionsProto message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PaymentOptionsProto.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PaymentOptionsProto message from the specified reader or buffer.
         * @function decode
         * @memberof protobuf.PaymentOptionsProto
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protobuf.PaymentOptionsProto} PaymentOptionsProto
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PaymentOptionsProto.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.protobuf.PaymentOptionsProto();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.payPerUse = $root.google.protobuf.BoolValue.decode(reader, reader.uint32());
                        break;
                    }
                case 2: {
                        message.creditCardPayment = reader.string();
                        break;
                    }
                case 3: {
                        message.otherPaymentMethods = $root.google.protobuf.BoolValue.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PaymentOptionsProto message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protobuf.PaymentOptionsProto
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protobuf.PaymentOptionsProto} PaymentOptionsProto
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PaymentOptionsProto.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PaymentOptionsProto message.
         * @function verify
         * @memberof protobuf.PaymentOptionsProto
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PaymentOptionsProto.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.payPerUse != null && message.hasOwnProperty("payPerUse")) {
                let error = $root.google.protobuf.BoolValue.verify(message.payPerUse);
                if (error)
                    return "payPerUse." + error;
            }
            if (message.creditCardPayment != null && message.hasOwnProperty("creditCardPayment"))
                if (!$util.isString(message.creditCardPayment))
                    return "creditCardPayment: string expected";
            if (message.otherPaymentMethods != null && message.hasOwnProperty("otherPaymentMethods")) {
                let error = $root.google.protobuf.BoolValue.verify(message.otherPaymentMethods);
                if (error)
                    return "otherPaymentMethods." + error;
            }
            return null;
        };

        /**
         * Creates a PaymentOptionsProto message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protobuf.PaymentOptionsProto
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protobuf.PaymentOptionsProto} PaymentOptionsProto
         */
        PaymentOptionsProto.fromObject = function fromObject(object) {
            if (object instanceof $root.protobuf.PaymentOptionsProto)
                return object;
            let message = new $root.protobuf.PaymentOptionsProto();
            if (object.payPerUse != null) {
                if (typeof object.payPerUse !== "object")
                    throw TypeError(".protobuf.PaymentOptionsProto.payPerUse: object expected");
                message.payPerUse = $root.google.protobuf.BoolValue.fromObject(object.payPerUse);
            }
            if (object.creditCardPayment != null)
                message.creditCardPayment = String(object.creditCardPayment);
            if (object.otherPaymentMethods != null) {
                if (typeof object.otherPaymentMethods !== "object")
                    throw TypeError(".protobuf.PaymentOptionsProto.otherPaymentMethods: object expected");
                message.otherPaymentMethods = $root.google.protobuf.BoolValue.fromObject(object.otherPaymentMethods);
            }
            return message;
        };

        /**
         * Creates a plain object from a PaymentOptionsProto message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protobuf.PaymentOptionsProto
         * @static
         * @param {protobuf.PaymentOptionsProto} message PaymentOptionsProto
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PaymentOptionsProto.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.payPerUse = null;
                object.creditCardPayment = "";
                object.otherPaymentMethods = null;
            }
            if (message.payPerUse != null && message.hasOwnProperty("payPerUse"))
                object.payPerUse = $root.google.protobuf.BoolValue.toObject(message.payPerUse, options);
            if (message.creditCardPayment != null && message.hasOwnProperty("creditCardPayment"))
                object.creditCardPayment = message.creditCardPayment;
            if (message.otherPaymentMethods != null && message.hasOwnProperty("otherPaymentMethods"))
                object.otherPaymentMethods = $root.google.protobuf.BoolValue.toObject(message.otherPaymentMethods, options);
            return object;
        };

        /**
         * Converts this PaymentOptionsProto to JSON.
         * @function toJSON
         * @memberof protobuf.PaymentOptionsProto
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PaymentOptionsProto.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for PaymentOptionsProto
         * @function getTypeUrl
         * @memberof protobuf.PaymentOptionsProto
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        PaymentOptionsProto.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/protobuf.PaymentOptionsProto";
        };

        return PaymentOptionsProto;
    })();

    protobuf.LocationInfoProto = (function() {

        /**
         * Properties of a LocationInfoProto.
         * @memberof protobuf
         * @interface ILocationInfoProto
         * @property {google.protobuf.IDoubleValue|null} [longitude] LocationInfoProto longitude
         * @property {google.protobuf.IDoubleValue|null} [latitude] LocationInfoProto latitude
         * @property {string|null} [postalCode] LocationInfoProto postalCode
         * @property {string|null} [city] LocationInfoProto city
         */

        /**
         * Constructs a new LocationInfoProto.
         * @memberof protobuf
         * @classdesc Represents a LocationInfoProto.
         * @implements ILocationInfoProto
         * @constructor
         * @param {protobuf.ILocationInfoProto=} [properties] Properties to set
         */
        function LocationInfoProto(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LocationInfoProto longitude.
         * @member {google.protobuf.IDoubleValue|null|undefined} longitude
         * @memberof protobuf.LocationInfoProto
         * @instance
         */
        LocationInfoProto.prototype.longitude = null;

        /**
         * LocationInfoProto latitude.
         * @member {google.protobuf.IDoubleValue|null|undefined} latitude
         * @memberof protobuf.LocationInfoProto
         * @instance
         */
        LocationInfoProto.prototype.latitude = null;

        /**
         * LocationInfoProto postalCode.
         * @member {string} postalCode
         * @memberof protobuf.LocationInfoProto
         * @instance
         */
        LocationInfoProto.prototype.postalCode = "";

        /**
         * LocationInfoProto city.
         * @member {string} city
         * @memberof protobuf.LocationInfoProto
         * @instance
         */
        LocationInfoProto.prototype.city = "";

        /**
         * Creates a new LocationInfoProto instance using the specified properties.
         * @function create
         * @memberof protobuf.LocationInfoProto
         * @static
         * @param {protobuf.ILocationInfoProto=} [properties] Properties to set
         * @returns {protobuf.LocationInfoProto} LocationInfoProto instance
         */
        LocationInfoProto.create = function create(properties) {
            return new LocationInfoProto(properties);
        };

        /**
         * Encodes the specified LocationInfoProto message. Does not implicitly {@link protobuf.LocationInfoProto.verify|verify} messages.
         * @function encode
         * @memberof protobuf.LocationInfoProto
         * @static
         * @param {protobuf.ILocationInfoProto} message LocationInfoProto message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LocationInfoProto.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.longitude != null && Object.hasOwnProperty.call(message, "longitude"))
                $root.google.protobuf.DoubleValue.encode(message.longitude, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.latitude != null && Object.hasOwnProperty.call(message, "latitude"))
                $root.google.protobuf.DoubleValue.encode(message.latitude, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.postalCode != null && Object.hasOwnProperty.call(message, "postalCode"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.postalCode);
            if (message.city != null && Object.hasOwnProperty.call(message, "city"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.city);
            return writer;
        };

        /**
         * Encodes the specified LocationInfoProto message, length delimited. Does not implicitly {@link protobuf.LocationInfoProto.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protobuf.LocationInfoProto
         * @static
         * @param {protobuf.ILocationInfoProto} message LocationInfoProto message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LocationInfoProto.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LocationInfoProto message from the specified reader or buffer.
         * @function decode
         * @memberof protobuf.LocationInfoProto
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protobuf.LocationInfoProto} LocationInfoProto
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LocationInfoProto.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.protobuf.LocationInfoProto();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.longitude = $root.google.protobuf.DoubleValue.decode(reader, reader.uint32());
                        break;
                    }
                case 2: {
                        message.latitude = $root.google.protobuf.DoubleValue.decode(reader, reader.uint32());
                        break;
                    }
                case 3: {
                        message.postalCode = reader.string();
                        break;
                    }
                case 4: {
                        message.city = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a LocationInfoProto message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protobuf.LocationInfoProto
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protobuf.LocationInfoProto} LocationInfoProto
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LocationInfoProto.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a LocationInfoProto message.
         * @function verify
         * @memberof protobuf.LocationInfoProto
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LocationInfoProto.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.longitude != null && message.hasOwnProperty("longitude")) {
                let error = $root.google.protobuf.DoubleValue.verify(message.longitude);
                if (error)
                    return "longitude." + error;
            }
            if (message.latitude != null && message.hasOwnProperty("latitude")) {
                let error = $root.google.protobuf.DoubleValue.verify(message.latitude);
                if (error)
                    return "latitude." + error;
            }
            if (message.postalCode != null && message.hasOwnProperty("postalCode"))
                if (!$util.isString(message.postalCode))
                    return "postalCode: string expected";
            if (message.city != null && message.hasOwnProperty("city"))
                if (!$util.isString(message.city))
                    return "city: string expected";
            return null;
        };

        /**
         * Creates a LocationInfoProto message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protobuf.LocationInfoProto
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protobuf.LocationInfoProto} LocationInfoProto
         */
        LocationInfoProto.fromObject = function fromObject(object) {
            if (object instanceof $root.protobuf.LocationInfoProto)
                return object;
            let message = new $root.protobuf.LocationInfoProto();
            if (object.longitude != null) {
                if (typeof object.longitude !== "object")
                    throw TypeError(".protobuf.LocationInfoProto.longitude: object expected");
                message.longitude = $root.google.protobuf.DoubleValue.fromObject(object.longitude);
            }
            if (object.latitude != null) {
                if (typeof object.latitude !== "object")
                    throw TypeError(".protobuf.LocationInfoProto.latitude: object expected");
                message.latitude = $root.google.protobuf.DoubleValue.fromObject(object.latitude);
            }
            if (object.postalCode != null)
                message.postalCode = String(object.postalCode);
            if (object.city != null)
                message.city = String(object.city);
            return message;
        };

        /**
         * Creates a plain object from a LocationInfoProto message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protobuf.LocationInfoProto
         * @static
         * @param {protobuf.LocationInfoProto} message LocationInfoProto
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LocationInfoProto.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.longitude = null;
                object.latitude = null;
                object.postalCode = "";
                object.city = "";
            }
            if (message.longitude != null && message.hasOwnProperty("longitude"))
                object.longitude = $root.google.protobuf.DoubleValue.toObject(message.longitude, options);
            if (message.latitude != null && message.hasOwnProperty("latitude"))
                object.latitude = $root.google.protobuf.DoubleValue.toObject(message.latitude, options);
            if (message.postalCode != null && message.hasOwnProperty("postalCode"))
                object.postalCode = message.postalCode;
            if (message.city != null && message.hasOwnProperty("city"))
                object.city = message.city;
            return object;
        };

        /**
         * Converts this LocationInfoProto to JSON.
         * @function toJSON
         * @memberof protobuf.LocationInfoProto
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LocationInfoProto.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for LocationInfoProto
         * @function getTypeUrl
         * @memberof protobuf.LocationInfoProto
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        LocationInfoProto.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/protobuf.LocationInfoProto";
        };

        return LocationInfoProto;
    })();

    return protobuf;
})();

export const google = $root.google = (() => {

    /**
     * Namespace google.
     * @exports google
     * @namespace
     */
    const google = {};

    google.protobuf = (function() {

        /**
         * Namespace protobuf.
         * @memberof google
         * @namespace
         */
        const protobuf = {};

        protobuf.DoubleValue = (function() {

            /**
             * Properties of a DoubleValue.
             * @memberof google.protobuf
             * @interface IDoubleValue
             * @property {number|null} [value] DoubleValue value
             */

            /**
             * Constructs a new DoubleValue.
             * @memberof google.protobuf
             * @classdesc Represents a DoubleValue.
             * @implements IDoubleValue
             * @constructor
             * @param {google.protobuf.IDoubleValue=} [properties] Properties to set
             */
            function DoubleValue(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * DoubleValue value.
             * @member {number} value
             * @memberof google.protobuf.DoubleValue
             * @instance
             */
            DoubleValue.prototype.value = 0;

            /**
             * Creates a new DoubleValue instance using the specified properties.
             * @function create
             * @memberof google.protobuf.DoubleValue
             * @static
             * @param {google.protobuf.IDoubleValue=} [properties] Properties to set
             * @returns {google.protobuf.DoubleValue} DoubleValue instance
             */
            DoubleValue.create = function create(properties) {
                return new DoubleValue(properties);
            };

            /**
             * Encodes the specified DoubleValue message. Does not implicitly {@link google.protobuf.DoubleValue.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.DoubleValue
             * @static
             * @param {google.protobuf.IDoubleValue} message DoubleValue message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DoubleValue.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                    writer.uint32(/* id 1, wireType 1 =*/9).double(message.value);
                return writer;
            };

            /**
             * Encodes the specified DoubleValue message, length delimited. Does not implicitly {@link google.protobuf.DoubleValue.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.DoubleValue
             * @static
             * @param {google.protobuf.IDoubleValue} message DoubleValue message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DoubleValue.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a DoubleValue message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.DoubleValue
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.DoubleValue} DoubleValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DoubleValue.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.DoubleValue();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.value = reader.double();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a DoubleValue message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.DoubleValue
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.DoubleValue} DoubleValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DoubleValue.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a DoubleValue message.
             * @function verify
             * @memberof google.protobuf.DoubleValue
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            DoubleValue.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.value != null && message.hasOwnProperty("value"))
                    if (typeof message.value !== "number")
                        return "value: number expected";
                return null;
            };

            /**
             * Creates a DoubleValue message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.DoubleValue
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.DoubleValue} DoubleValue
             */
            DoubleValue.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.DoubleValue)
                    return object;
                let message = new $root.google.protobuf.DoubleValue();
                if (object.value != null)
                    message.value = Number(object.value);
                return message;
            };

            /**
             * Creates a plain object from a DoubleValue message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.DoubleValue
             * @static
             * @param {google.protobuf.DoubleValue} message DoubleValue
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            DoubleValue.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults)
                    object.value = 0;
                if (message.value != null && message.hasOwnProperty("value"))
                    object.value = options.json && !isFinite(message.value) ? String(message.value) : message.value;
                return object;
            };

            /**
             * Converts this DoubleValue to JSON.
             * @function toJSON
             * @memberof google.protobuf.DoubleValue
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            DoubleValue.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for DoubleValue
             * @function getTypeUrl
             * @memberof google.protobuf.DoubleValue
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            DoubleValue.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/google.protobuf.DoubleValue";
            };

            return DoubleValue;
        })();

        protobuf.FloatValue = (function() {

            /**
             * Properties of a FloatValue.
             * @memberof google.protobuf
             * @interface IFloatValue
             * @property {number|null} [value] FloatValue value
             */

            /**
             * Constructs a new FloatValue.
             * @memberof google.protobuf
             * @classdesc Represents a FloatValue.
             * @implements IFloatValue
             * @constructor
             * @param {google.protobuf.IFloatValue=} [properties] Properties to set
             */
            function FloatValue(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * FloatValue value.
             * @member {number} value
             * @memberof google.protobuf.FloatValue
             * @instance
             */
            FloatValue.prototype.value = 0;

            /**
             * Creates a new FloatValue instance using the specified properties.
             * @function create
             * @memberof google.protobuf.FloatValue
             * @static
             * @param {google.protobuf.IFloatValue=} [properties] Properties to set
             * @returns {google.protobuf.FloatValue} FloatValue instance
             */
            FloatValue.create = function create(properties) {
                return new FloatValue(properties);
            };

            /**
             * Encodes the specified FloatValue message. Does not implicitly {@link google.protobuf.FloatValue.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.FloatValue
             * @static
             * @param {google.protobuf.IFloatValue} message FloatValue message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FloatValue.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                    writer.uint32(/* id 1, wireType 5 =*/13).float(message.value);
                return writer;
            };

            /**
             * Encodes the specified FloatValue message, length delimited. Does not implicitly {@link google.protobuf.FloatValue.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.FloatValue
             * @static
             * @param {google.protobuf.IFloatValue} message FloatValue message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FloatValue.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a FloatValue message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.FloatValue
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.FloatValue} FloatValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FloatValue.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.FloatValue();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.value = reader.float();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a FloatValue message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.FloatValue
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.FloatValue} FloatValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FloatValue.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a FloatValue message.
             * @function verify
             * @memberof google.protobuf.FloatValue
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            FloatValue.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.value != null && message.hasOwnProperty("value"))
                    if (typeof message.value !== "number")
                        return "value: number expected";
                return null;
            };

            /**
             * Creates a FloatValue message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.FloatValue
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.FloatValue} FloatValue
             */
            FloatValue.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.FloatValue)
                    return object;
                let message = new $root.google.protobuf.FloatValue();
                if (object.value != null)
                    message.value = Number(object.value);
                return message;
            };

            /**
             * Creates a plain object from a FloatValue message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.FloatValue
             * @static
             * @param {google.protobuf.FloatValue} message FloatValue
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            FloatValue.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults)
                    object.value = 0;
                if (message.value != null && message.hasOwnProperty("value"))
                    object.value = options.json && !isFinite(message.value) ? String(message.value) : message.value;
                return object;
            };

            /**
             * Converts this FloatValue to JSON.
             * @function toJSON
             * @memberof google.protobuf.FloatValue
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            FloatValue.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for FloatValue
             * @function getTypeUrl
             * @memberof google.protobuf.FloatValue
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            FloatValue.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/google.protobuf.FloatValue";
            };

            return FloatValue;
        })();

        protobuf.Int64Value = (function() {

            /**
             * Properties of an Int64Value.
             * @memberof google.protobuf
             * @interface IInt64Value
             * @property {number|Long|null} [value] Int64Value value
             */

            /**
             * Constructs a new Int64Value.
             * @memberof google.protobuf
             * @classdesc Represents an Int64Value.
             * @implements IInt64Value
             * @constructor
             * @param {google.protobuf.IInt64Value=} [properties] Properties to set
             */
            function Int64Value(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Int64Value value.
             * @member {number|Long} value
             * @memberof google.protobuf.Int64Value
             * @instance
             */
            Int64Value.prototype.value = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Creates a new Int64Value instance using the specified properties.
             * @function create
             * @memberof google.protobuf.Int64Value
             * @static
             * @param {google.protobuf.IInt64Value=} [properties] Properties to set
             * @returns {google.protobuf.Int64Value} Int64Value instance
             */
            Int64Value.create = function create(properties) {
                return new Int64Value(properties);
            };

            /**
             * Encodes the specified Int64Value message. Does not implicitly {@link google.protobuf.Int64Value.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.Int64Value
             * @static
             * @param {google.protobuf.IInt64Value} message Int64Value message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Int64Value.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.value);
                return writer;
            };

            /**
             * Encodes the specified Int64Value message, length delimited. Does not implicitly {@link google.protobuf.Int64Value.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.Int64Value
             * @static
             * @param {google.protobuf.IInt64Value} message Int64Value message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Int64Value.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an Int64Value message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.Int64Value
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.Int64Value} Int64Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Int64Value.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.Int64Value();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.value = reader.int64();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an Int64Value message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.Int64Value
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.Int64Value} Int64Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Int64Value.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an Int64Value message.
             * @function verify
             * @memberof google.protobuf.Int64Value
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Int64Value.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.value != null && message.hasOwnProperty("value"))
                    if (!$util.isInteger(message.value) && !(message.value && $util.isInteger(message.value.low) && $util.isInteger(message.value.high)))
                        return "value: integer|Long expected";
                return null;
            };

            /**
             * Creates an Int64Value message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.Int64Value
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.Int64Value} Int64Value
             */
            Int64Value.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.Int64Value)
                    return object;
                let message = new $root.google.protobuf.Int64Value();
                if (object.value != null)
                    if ($util.Long)
                        (message.value = $util.Long.fromValue(object.value)).unsigned = false;
                    else if (typeof object.value === "string")
                        message.value = parseInt(object.value, 10);
                    else if (typeof object.value === "number")
                        message.value = object.value;
                    else if (typeof object.value === "object")
                        message.value = new $util.LongBits(object.value.low >>> 0, object.value.high >>> 0).toNumber();
                return message;
            };

            /**
             * Creates a plain object from an Int64Value message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.Int64Value
             * @static
             * @param {google.protobuf.Int64Value} message Int64Value
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Int64Value.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults)
                    if ($util.Long) {
                        let long = new $util.Long(0, 0, false);
                        object.value = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.value = options.longs === String ? "0" : 0;
                if (message.value != null && message.hasOwnProperty("value"))
                    if (typeof message.value === "number")
                        object.value = options.longs === String ? String(message.value) : message.value;
                    else
                        object.value = options.longs === String ? $util.Long.prototype.toString.call(message.value) : options.longs === Number ? new $util.LongBits(message.value.low >>> 0, message.value.high >>> 0).toNumber() : message.value;
                return object;
            };

            /**
             * Converts this Int64Value to JSON.
             * @function toJSON
             * @memberof google.protobuf.Int64Value
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Int64Value.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for Int64Value
             * @function getTypeUrl
             * @memberof google.protobuf.Int64Value
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            Int64Value.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/google.protobuf.Int64Value";
            };

            return Int64Value;
        })();

        protobuf.UInt64Value = (function() {

            /**
             * Properties of a UInt64Value.
             * @memberof google.protobuf
             * @interface IUInt64Value
             * @property {number|Long|null} [value] UInt64Value value
             */

            /**
             * Constructs a new UInt64Value.
             * @memberof google.protobuf
             * @classdesc Represents a UInt64Value.
             * @implements IUInt64Value
             * @constructor
             * @param {google.protobuf.IUInt64Value=} [properties] Properties to set
             */
            function UInt64Value(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * UInt64Value value.
             * @member {number|Long} value
             * @memberof google.protobuf.UInt64Value
             * @instance
             */
            UInt64Value.prototype.value = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

            /**
             * Creates a new UInt64Value instance using the specified properties.
             * @function create
             * @memberof google.protobuf.UInt64Value
             * @static
             * @param {google.protobuf.IUInt64Value=} [properties] Properties to set
             * @returns {google.protobuf.UInt64Value} UInt64Value instance
             */
            UInt64Value.create = function create(properties) {
                return new UInt64Value(properties);
            };

            /**
             * Encodes the specified UInt64Value message. Does not implicitly {@link google.protobuf.UInt64Value.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.UInt64Value
             * @static
             * @param {google.protobuf.IUInt64Value} message UInt64Value message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UInt64Value.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.value);
                return writer;
            };

            /**
             * Encodes the specified UInt64Value message, length delimited. Does not implicitly {@link google.protobuf.UInt64Value.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.UInt64Value
             * @static
             * @param {google.protobuf.IUInt64Value} message UInt64Value message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UInt64Value.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a UInt64Value message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.UInt64Value
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.UInt64Value} UInt64Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UInt64Value.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.UInt64Value();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.value = reader.uint64();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a UInt64Value message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.UInt64Value
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.UInt64Value} UInt64Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UInt64Value.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a UInt64Value message.
             * @function verify
             * @memberof google.protobuf.UInt64Value
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            UInt64Value.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.value != null && message.hasOwnProperty("value"))
                    if (!$util.isInteger(message.value) && !(message.value && $util.isInteger(message.value.low) && $util.isInteger(message.value.high)))
                        return "value: integer|Long expected";
                return null;
            };

            /**
             * Creates a UInt64Value message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.UInt64Value
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.UInt64Value} UInt64Value
             */
            UInt64Value.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.UInt64Value)
                    return object;
                let message = new $root.google.protobuf.UInt64Value();
                if (object.value != null)
                    if ($util.Long)
                        (message.value = $util.Long.fromValue(object.value)).unsigned = true;
                    else if (typeof object.value === "string")
                        message.value = parseInt(object.value, 10);
                    else if (typeof object.value === "number")
                        message.value = object.value;
                    else if (typeof object.value === "object")
                        message.value = new $util.LongBits(object.value.low >>> 0, object.value.high >>> 0).toNumber(true);
                return message;
            };

            /**
             * Creates a plain object from a UInt64Value message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.UInt64Value
             * @static
             * @param {google.protobuf.UInt64Value} message UInt64Value
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            UInt64Value.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults)
                    if ($util.Long) {
                        let long = new $util.Long(0, 0, true);
                        object.value = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.value = options.longs === String ? "0" : 0;
                if (message.value != null && message.hasOwnProperty("value"))
                    if (typeof message.value === "number")
                        object.value = options.longs === String ? String(message.value) : message.value;
                    else
                        object.value = options.longs === String ? $util.Long.prototype.toString.call(message.value) : options.longs === Number ? new $util.LongBits(message.value.low >>> 0, message.value.high >>> 0).toNumber(true) : message.value;
                return object;
            };

            /**
             * Converts this UInt64Value to JSON.
             * @function toJSON
             * @memberof google.protobuf.UInt64Value
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            UInt64Value.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for UInt64Value
             * @function getTypeUrl
             * @memberof google.protobuf.UInt64Value
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            UInt64Value.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/google.protobuf.UInt64Value";
            };

            return UInt64Value;
        })();

        protobuf.Int32Value = (function() {

            /**
             * Properties of an Int32Value.
             * @memberof google.protobuf
             * @interface IInt32Value
             * @property {number|null} [value] Int32Value value
             */

            /**
             * Constructs a new Int32Value.
             * @memberof google.protobuf
             * @classdesc Represents an Int32Value.
             * @implements IInt32Value
             * @constructor
             * @param {google.protobuf.IInt32Value=} [properties] Properties to set
             */
            function Int32Value(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Int32Value value.
             * @member {number} value
             * @memberof google.protobuf.Int32Value
             * @instance
             */
            Int32Value.prototype.value = 0;

            /**
             * Creates a new Int32Value instance using the specified properties.
             * @function create
             * @memberof google.protobuf.Int32Value
             * @static
             * @param {google.protobuf.IInt32Value=} [properties] Properties to set
             * @returns {google.protobuf.Int32Value} Int32Value instance
             */
            Int32Value.create = function create(properties) {
                return new Int32Value(properties);
            };

            /**
             * Encodes the specified Int32Value message. Does not implicitly {@link google.protobuf.Int32Value.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.Int32Value
             * @static
             * @param {google.protobuf.IInt32Value} message Int32Value message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Int32Value.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.value);
                return writer;
            };

            /**
             * Encodes the specified Int32Value message, length delimited. Does not implicitly {@link google.protobuf.Int32Value.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.Int32Value
             * @static
             * @param {google.protobuf.IInt32Value} message Int32Value message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Int32Value.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an Int32Value message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.Int32Value
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.Int32Value} Int32Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Int32Value.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.Int32Value();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.value = reader.int32();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an Int32Value message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.Int32Value
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.Int32Value} Int32Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Int32Value.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an Int32Value message.
             * @function verify
             * @memberof google.protobuf.Int32Value
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Int32Value.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.value != null && message.hasOwnProperty("value"))
                    if (!$util.isInteger(message.value))
                        return "value: integer expected";
                return null;
            };

            /**
             * Creates an Int32Value message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.Int32Value
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.Int32Value} Int32Value
             */
            Int32Value.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.Int32Value)
                    return object;
                let message = new $root.google.protobuf.Int32Value();
                if (object.value != null)
                    message.value = object.value | 0;
                return message;
            };

            /**
             * Creates a plain object from an Int32Value message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.Int32Value
             * @static
             * @param {google.protobuf.Int32Value} message Int32Value
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Int32Value.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults)
                    object.value = 0;
                if (message.value != null && message.hasOwnProperty("value"))
                    object.value = message.value;
                return object;
            };

            /**
             * Converts this Int32Value to JSON.
             * @function toJSON
             * @memberof google.protobuf.Int32Value
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Int32Value.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for Int32Value
             * @function getTypeUrl
             * @memberof google.protobuf.Int32Value
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            Int32Value.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/google.protobuf.Int32Value";
            };

            return Int32Value;
        })();

        protobuf.UInt32Value = (function() {

            /**
             * Properties of a UInt32Value.
             * @memberof google.protobuf
             * @interface IUInt32Value
             * @property {number|null} [value] UInt32Value value
             */

            /**
             * Constructs a new UInt32Value.
             * @memberof google.protobuf
             * @classdesc Represents a UInt32Value.
             * @implements IUInt32Value
             * @constructor
             * @param {google.protobuf.IUInt32Value=} [properties] Properties to set
             */
            function UInt32Value(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * UInt32Value value.
             * @member {number} value
             * @memberof google.protobuf.UInt32Value
             * @instance
             */
            UInt32Value.prototype.value = 0;

            /**
             * Creates a new UInt32Value instance using the specified properties.
             * @function create
             * @memberof google.protobuf.UInt32Value
             * @static
             * @param {google.protobuf.IUInt32Value=} [properties] Properties to set
             * @returns {google.protobuf.UInt32Value} UInt32Value instance
             */
            UInt32Value.create = function create(properties) {
                return new UInt32Value(properties);
            };

            /**
             * Encodes the specified UInt32Value message. Does not implicitly {@link google.protobuf.UInt32Value.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.UInt32Value
             * @static
             * @param {google.protobuf.IUInt32Value} message UInt32Value message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UInt32Value.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.value);
                return writer;
            };

            /**
             * Encodes the specified UInt32Value message, length delimited. Does not implicitly {@link google.protobuf.UInt32Value.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.UInt32Value
             * @static
             * @param {google.protobuf.IUInt32Value} message UInt32Value message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UInt32Value.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a UInt32Value message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.UInt32Value
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.UInt32Value} UInt32Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UInt32Value.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.UInt32Value();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.value = reader.uint32();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a UInt32Value message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.UInt32Value
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.UInt32Value} UInt32Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UInt32Value.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a UInt32Value message.
             * @function verify
             * @memberof google.protobuf.UInt32Value
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            UInt32Value.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.value != null && message.hasOwnProperty("value"))
                    if (!$util.isInteger(message.value))
                        return "value: integer expected";
                return null;
            };

            /**
             * Creates a UInt32Value message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.UInt32Value
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.UInt32Value} UInt32Value
             */
            UInt32Value.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.UInt32Value)
                    return object;
                let message = new $root.google.protobuf.UInt32Value();
                if (object.value != null)
                    message.value = object.value >>> 0;
                return message;
            };

            /**
             * Creates a plain object from a UInt32Value message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.UInt32Value
             * @static
             * @param {google.protobuf.UInt32Value} message UInt32Value
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            UInt32Value.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults)
                    object.value = 0;
                if (message.value != null && message.hasOwnProperty("value"))
                    object.value = message.value;
                return object;
            };

            /**
             * Converts this UInt32Value to JSON.
             * @function toJSON
             * @memberof google.protobuf.UInt32Value
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            UInt32Value.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for UInt32Value
             * @function getTypeUrl
             * @memberof google.protobuf.UInt32Value
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            UInt32Value.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/google.protobuf.UInt32Value";
            };

            return UInt32Value;
        })();

        protobuf.BoolValue = (function() {

            /**
             * Properties of a BoolValue.
             * @memberof google.protobuf
             * @interface IBoolValue
             * @property {boolean|null} [value] BoolValue value
             */

            /**
             * Constructs a new BoolValue.
             * @memberof google.protobuf
             * @classdesc Represents a BoolValue.
             * @implements IBoolValue
             * @constructor
             * @param {google.protobuf.IBoolValue=} [properties] Properties to set
             */
            function BoolValue(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * BoolValue value.
             * @member {boolean} value
             * @memberof google.protobuf.BoolValue
             * @instance
             */
            BoolValue.prototype.value = false;

            /**
             * Creates a new BoolValue instance using the specified properties.
             * @function create
             * @memberof google.protobuf.BoolValue
             * @static
             * @param {google.protobuf.IBoolValue=} [properties] Properties to set
             * @returns {google.protobuf.BoolValue} BoolValue instance
             */
            BoolValue.create = function create(properties) {
                return new BoolValue(properties);
            };

            /**
             * Encodes the specified BoolValue message. Does not implicitly {@link google.protobuf.BoolValue.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.BoolValue
             * @static
             * @param {google.protobuf.IBoolValue} message BoolValue message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            BoolValue.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                    writer.uint32(/* id 1, wireType 0 =*/8).bool(message.value);
                return writer;
            };

            /**
             * Encodes the specified BoolValue message, length delimited. Does not implicitly {@link google.protobuf.BoolValue.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.BoolValue
             * @static
             * @param {google.protobuf.IBoolValue} message BoolValue message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            BoolValue.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a BoolValue message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.BoolValue
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.BoolValue} BoolValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            BoolValue.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.BoolValue();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.value = reader.bool();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a BoolValue message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.BoolValue
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.BoolValue} BoolValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            BoolValue.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a BoolValue message.
             * @function verify
             * @memberof google.protobuf.BoolValue
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            BoolValue.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.value != null && message.hasOwnProperty("value"))
                    if (typeof message.value !== "boolean")
                        return "value: boolean expected";
                return null;
            };

            /**
             * Creates a BoolValue message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.BoolValue
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.BoolValue} BoolValue
             */
            BoolValue.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.BoolValue)
                    return object;
                let message = new $root.google.protobuf.BoolValue();
                if (object.value != null)
                    message.value = Boolean(object.value);
                return message;
            };

            /**
             * Creates a plain object from a BoolValue message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.BoolValue
             * @static
             * @param {google.protobuf.BoolValue} message BoolValue
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            BoolValue.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults)
                    object.value = false;
                if (message.value != null && message.hasOwnProperty("value"))
                    object.value = message.value;
                return object;
            };

            /**
             * Converts this BoolValue to JSON.
             * @function toJSON
             * @memberof google.protobuf.BoolValue
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            BoolValue.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for BoolValue
             * @function getTypeUrl
             * @memberof google.protobuf.BoolValue
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            BoolValue.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/google.protobuf.BoolValue";
            };

            return BoolValue;
        })();

        protobuf.StringValue = (function() {

            /**
             * Properties of a StringValue.
             * @memberof google.protobuf
             * @interface IStringValue
             * @property {string|null} [value] StringValue value
             */

            /**
             * Constructs a new StringValue.
             * @memberof google.protobuf
             * @classdesc Represents a StringValue.
             * @implements IStringValue
             * @constructor
             * @param {google.protobuf.IStringValue=} [properties] Properties to set
             */
            function StringValue(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * StringValue value.
             * @member {string} value
             * @memberof google.protobuf.StringValue
             * @instance
             */
            StringValue.prototype.value = "";

            /**
             * Creates a new StringValue instance using the specified properties.
             * @function create
             * @memberof google.protobuf.StringValue
             * @static
             * @param {google.protobuf.IStringValue=} [properties] Properties to set
             * @returns {google.protobuf.StringValue} StringValue instance
             */
            StringValue.create = function create(properties) {
                return new StringValue(properties);
            };

            /**
             * Encodes the specified StringValue message. Does not implicitly {@link google.protobuf.StringValue.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.StringValue
             * @static
             * @param {google.protobuf.IStringValue} message StringValue message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            StringValue.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.value);
                return writer;
            };

            /**
             * Encodes the specified StringValue message, length delimited. Does not implicitly {@link google.protobuf.StringValue.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.StringValue
             * @static
             * @param {google.protobuf.IStringValue} message StringValue message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            StringValue.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a StringValue message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.StringValue
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.StringValue} StringValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            StringValue.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.StringValue();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.value = reader.string();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a StringValue message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.StringValue
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.StringValue} StringValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            StringValue.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a StringValue message.
             * @function verify
             * @memberof google.protobuf.StringValue
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            StringValue.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.value != null && message.hasOwnProperty("value"))
                    if (!$util.isString(message.value))
                        return "value: string expected";
                return null;
            };

            /**
             * Creates a StringValue message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.StringValue
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.StringValue} StringValue
             */
            StringValue.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.StringValue)
                    return object;
                let message = new $root.google.protobuf.StringValue();
                if (object.value != null)
                    message.value = String(object.value);
                return message;
            };

            /**
             * Creates a plain object from a StringValue message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.StringValue
             * @static
             * @param {google.protobuf.StringValue} message StringValue
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            StringValue.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults)
                    object.value = "";
                if (message.value != null && message.hasOwnProperty("value"))
                    object.value = message.value;
                return object;
            };

            /**
             * Converts this StringValue to JSON.
             * @function toJSON
             * @memberof google.protobuf.StringValue
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            StringValue.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for StringValue
             * @function getTypeUrl
             * @memberof google.protobuf.StringValue
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            StringValue.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/google.protobuf.StringValue";
            };

            return StringValue;
        })();

        protobuf.BytesValue = (function() {

            /**
             * Properties of a BytesValue.
             * @memberof google.protobuf
             * @interface IBytesValue
             * @property {Uint8Array|null} [value] BytesValue value
             */

            /**
             * Constructs a new BytesValue.
             * @memberof google.protobuf
             * @classdesc Represents a BytesValue.
             * @implements IBytesValue
             * @constructor
             * @param {google.protobuf.IBytesValue=} [properties] Properties to set
             */
            function BytesValue(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * BytesValue value.
             * @member {Uint8Array} value
             * @memberof google.protobuf.BytesValue
             * @instance
             */
            BytesValue.prototype.value = $util.newBuffer([]);

            /**
             * Creates a new BytesValue instance using the specified properties.
             * @function create
             * @memberof google.protobuf.BytesValue
             * @static
             * @param {google.protobuf.IBytesValue=} [properties] Properties to set
             * @returns {google.protobuf.BytesValue} BytesValue instance
             */
            BytesValue.create = function create(properties) {
                return new BytesValue(properties);
            };

            /**
             * Encodes the specified BytesValue message. Does not implicitly {@link google.protobuf.BytesValue.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.BytesValue
             * @static
             * @param {google.protobuf.IBytesValue} message BytesValue message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            BytesValue.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                    writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.value);
                return writer;
            };

            /**
             * Encodes the specified BytesValue message, length delimited. Does not implicitly {@link google.protobuf.BytesValue.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.BytesValue
             * @static
             * @param {google.protobuf.IBytesValue} message BytesValue message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            BytesValue.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a BytesValue message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.BytesValue
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.BytesValue} BytesValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            BytesValue.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.BytesValue();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.value = reader.bytes();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a BytesValue message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.BytesValue
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.BytesValue} BytesValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            BytesValue.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a BytesValue message.
             * @function verify
             * @memberof google.protobuf.BytesValue
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            BytesValue.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.value != null && message.hasOwnProperty("value"))
                    if (!(message.value && typeof message.value.length === "number" || $util.isString(message.value)))
                        return "value: buffer expected";
                return null;
            };

            /**
             * Creates a BytesValue message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.BytesValue
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.BytesValue} BytesValue
             */
            BytesValue.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.BytesValue)
                    return object;
                let message = new $root.google.protobuf.BytesValue();
                if (object.value != null)
                    if (typeof object.value === "string")
                        $util.base64.decode(object.value, message.value = $util.newBuffer($util.base64.length(object.value)), 0);
                    else if (object.value.length >= 0)
                        message.value = object.value;
                return message;
            };

            /**
             * Creates a plain object from a BytesValue message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.BytesValue
             * @static
             * @param {google.protobuf.BytesValue} message BytesValue
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            BytesValue.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults)
                    if (options.bytes === String)
                        object.value = "";
                    else {
                        object.value = [];
                        if (options.bytes !== Array)
                            object.value = $util.newBuffer(object.value);
                    }
                if (message.value != null && message.hasOwnProperty("value"))
                    object.value = options.bytes === String ? $util.base64.encode(message.value, 0, message.value.length) : options.bytes === Array ? Array.prototype.slice.call(message.value) : message.value;
                return object;
            };

            /**
             * Converts this BytesValue to JSON.
             * @function toJSON
             * @memberof google.protobuf.BytesValue
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            BytesValue.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for BytesValue
             * @function getTypeUrl
             * @memberof google.protobuf.BytesValue
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            BytesValue.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/google.protobuf.BytesValue";
            };

            return BytesValue;
        })();

        return protobuf;
    })();

    return google;
})();

export { $root as default };
