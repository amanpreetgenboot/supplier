// import requestApi from "@/service/requestApi";
import requestApi from "../../../requestApi"

export const fetchConfigurationList = (currentPage, pageSize) => {
  return requestApi(
    `/v1/oms/documentConfig?page=${currentPage}&size=${pageSize}`
  );
};

export const fetchFilteredDocConfiguration = (configName, pgId, endUserId, vendorId, countryId, currentPage, pageSize) => {
  const queryParams = [];
  if (configName) {
    queryParams.push(`q=${configName}`);
  }
  if (pgId) {
    queryParams.push(`pgId=${pgId}`);
  }
  if (endUserId) {
    queryParams.push(`endUserId=${endUserId}`);
  }
  if (vendorId) {
    queryParams.push(`vendorId=${vendorId}`);
  }
  if (countryId) {
    queryParams.push(`countryId=${countryId}`);
  }
  return requestApi(
    `/v1/oms/documentConfig/filter?${queryParams.join('&')}&page=${currentPage}&size=${pageSize}`
  );
};

export const saveCreateConfigurationApiHandler = async (payload, toast, id, onSave, action, setDocumentConfigUpdated) => {
  try {
    const hasInvalidDoc = payload.docList.some(doc => (
    (doc.needApproval === "yes" && doc.approvalType.id === 2)
        || (doc.approvalType.id === 1 && doc.approvers.length === 2)
    ));
    if (hasInvalidDoc) {
      toast.current.show([
        {
          severity: "error",
          summary: "Error!",
          detail: "Approvers cannot be empty when Approval Required is 'yes'",
          life: 3000
        }
      ]);
    } else {
      const data = await requestApi(
          `/v1/oms/documentConfig/save${id ? `/${id}` : "/"}`,
          "post",
          payload,
          "application/json"
      );
      console.log("DATA >>>", data)
      if (data.status >= 400) {
        throw new Error(data?.data?.message ?? `Failed while ${id ? 'updating' : 'creating'} configuration`);
      }
      if (data.status === 201) {
        toast.current.show([
          {
            severity: "success",
            summary: "Success!",
            detail: `Configuration ${action} successfully`,
            life: 2500
          },
        ]);
        setTimeout(() => onSave?.(), 3000);
        setDocumentConfigUpdated?.(true);
      }
    }
  } catch (err) {
    console.log("err", err);
    if (!err?.message.includes('setDocumentConfigUpdated is not a function')) {
      toast.current.show([
        {
          severity: "error",
          summary: "Error!",
          detail: err?.message || "Failed while creating configuration",
          life: 3000
        },
      ]);
    }
  }
};
/**
 * @param id Number
 * @param  currentStatus active|in-active
 * @returns AxiosPromise
 */
export const toggleStatus = (id, currentStatus) => {
  let newStatus = "In-Active";
  if (currentStatus === "in-active") {
    newStatus = "Active";
  }
  return requestApi(
    `/v1/oms/documentConfig/update/${id}/status`,
    "POST",
    { status: newStatus, id: newStatus === 'inactive' ? 2 : 1 },
    "application/json"
  );
};

export const isNotEmpty = (objOrArray) => {
  if (typeof objOrArray === 'object') {
    return Object.keys(objOrArray).length > 0;
  } else if (Array.isArray(objOrArray)) {
    return objOrArray.length > 0;
  }
  return true;
};

export const isAllMandatorySelected = (mandatoryRowCats, selectedCats) => {
  return mandatoryRowCats.reduce((prev, curr) => {
    return prev && selectedCats.includes(curr);
  }, true);
};

export const isValidFilledArray = (arr) => {
  if (Array.isArray(arr) && arr.length > 0) {
    return true;
  }
  return false;
};

export const verifyIfValidData = (data) => {
  let verified = true;
  if (typeof data?.mandatory === 'undefined') {
    verified = false;
  }
  if (typeof data?.approvalAmount === 'undefined' && typeof data?.needApproval === 'undefined') {
    verified = false;
  }
  if (typeof data?.approvalAmount === 'undefined' && data?.approvalValue === 'undefined') {
    verified = false;
  }

  if (!isValidFilledArray(data?.upload) && !isValidFilledArray(data?.uploadList)) {
    verified = false;
  }

  if (!isValidFilledArray(data?.replace) && !isValidFilledArray(data?.replaceList)) {
    verified = false;
  }

  if (!isValidFilledArray(data?.delete) && !isValidFilledArray(data?.deleteList)) {
    verified = false;
  }

  if (typeof data?.approvalType === 'undefined' || data?.approvalType?.approvalType ===
    "") {
    verified = false;
  }
  return verified;
};
